import { SITE_URL, CARD_URL, VCARD_PATH } from '../src/data/site.js'
import { buildVCard } from './card/vcard.js'

const robots = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
  </url>
  <url>
    <loc>${CARD_URL}</loc>
  </url>
</urlset>
`

// Everything that depends on the domain is generated from src/data/site.js,
// so switching domains is a one-line change.
export function sitePlugin() {
  const generated = {
    '/robots.txt': { type: 'text/plain; charset=utf-8', body: robots },
    '/sitemap.xml': { type: 'application/xml; charset=utf-8', body: sitemap },
    [VCARD_PATH]: { type: 'text/vcard; charset=utf-8', body: buildVCard },
  }

  return {
    name: 'site-url',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = generated[req.url?.split('?')[0]]
        if (!file) return next()
        res.setHeader('Content-Type', file.type)
        res.end(file.body())
      })
    },
    // Mirror vercel.json (the /card rewrite and .vcf headers) so `vite preview`
    // behaves like production
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const [path, query] = req.url?.split('?') ?? []
        if (path === '/card') req.url = `/card/index.html${query ? `?${query}` : ''}`
        if (path === VCARD_PATH) res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
        next()
      })
    },
    generateBundle() {
      for (const [path, file] of Object.entries(generated)) {
        this.emitFile({ type: 'asset', fileName: path.slice(1), source: file.body() })
      }
    },
  }
}
