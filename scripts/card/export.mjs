// Renders the Open Graph image and the printed card (front/back, dark variant).
//   public/og-card.jpg                   1200 × 630
//   print/card-front.pdf / .png          91 × 61 mm (85 × 55 + 3 mm bleed), PNG at 300 dpi
//   print/card-back.pdf / .png           only once the final-domain QR exists (npm run card:qr);
//   print/card-back-DRAFT.pdf / .png     until then, with a placeholder instead of the QR
// Usage: npm run card:export   (needs Chrome; set CHROME_PATH if it isn't found)
import { mkdirSync, rmSync } from 'node:fs'
import { FaArrowLeftLong, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../../src/data/profile.js'
import { CARD_URL } from '../../src/data/site.js'
import {
  FONTS_LINK,
  dataUri,
  fromRoot,
  hasFinalQr,
  icon,
  isFinalDomain,
  launchBrowser,
  qrMatrix,
  renderPage,
} from './shared.js'

const NAVY = '#0f172a'
const BLUE = '#2b7fff'
const ACCENT = '#51a2ff'
const BODY = '#d1d5dc'
const MUTED = '#99a1af'

const base = (body, css) => `<!doctype html><html><head><meta charset="utf-8">${FONTS_LINK}
<style>*{box-sizing:border-box;margin:0;padding:0}${css}</style></head><body>${body}</body></html>`

// ---------- Open Graph image ----------
const ogHtml = () =>
  base(
    `<div class="og">
      <div class="ring"><div class="photo"><img src="${dataUri('src/assets/profile.webp', 'image/webp')}"></div></div>
      <div class="text">
        <span class="logo">ME</span>
        <span class="en-name">${profile.name.en}</span>
        <span class="ar-name" dir="rtl">${profile.name.ar}</span>
        <span class="bar"></span>
        <span class="en-line">${profile.tagline.en}</span>
        <span class="ar-line" dir="rtl">${profile.tagline.ar}</span>
      </div>
    </div>`,
    `body{width:1200px;height:630px;overflow:hidden;font-family:'Space Grotesk',sans-serif;
      background:linear-gradient(135deg,#0f172a 0%,#1a2744 40%,#0d1b3e 70%,#0f172a 100%)}
    .og{position:absolute;left:100px;top:65px;width:1000px;height:500px;display:flex;align-items:center;gap:72px}
    .ring{flex:none;width:330px;height:330px;border-radius:50%;border:1px dashed rgba(81,162,255,.4);display:flex;align-items:center;justify-content:center}
    .photo{width:296px;height:296px;border-radius:50%;border:3px solid ${BLUE};padding:6px}
    .photo img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}
    .text{display:flex;flex-direction:column;min-width:0}
    .logo{font-family:'Pacifico',cursive;font-size:36px;line-height:1.2;color:${ACCENT};margin-bottom:18px}
    .en-name{font-size:60px;font-weight:700;line-height:1.1;color:#fff;letter-spacing:-.01em}
    .ar-name{text-align:left;font-family:'IBM Plex Sans Arabic',sans-serif;font-size:40px;font-weight:700;line-height:1.4;color:${BODY};margin-top:8px}
    .bar{width:64px;height:4px;border-radius:2px;background:${BLUE};margin:28px 0}
    .en-line{font-size:26px;line-height:1.4;color:${BODY}}
    .ar-line{text-align:left;font-family:'IBM Plex Sans Arabic',sans-serif;font-size:26px;line-height:1.6;color:${MUTED};margin-top:4px}`
  )

// ---------- Printed card (dark variant, mm units; design was drawn at 7 px = 1 mm) ----------
const cardCss = `@page{size:91mm 61mm;margin:0}
  html,body{width:91mm;height:61mm}
  body{background:${NAVY};color:#fff;position:relative;overflow:hidden;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .safe{position:absolute;inset:7mm;display:flex}
  .ar{font-family:'IBM Plex Sans Arabic',sans-serif}
  .latin{font-family:'Space Grotesk',sans-serif;unicode-bidi:isolate}
  .logo{font-family:'Pacifico',cursive;color:${ACCENT}}`

const frontHtml = () =>
  base(
    `<div class="safe" dir="rtl">
      <div class="top">
        <div class="row"><span class="ar name">${profile.name.ar}</span><span class="logo" dir="ltr">ME</span></div>
        <span class="ar line">${profile.tagline.ar}</span>
        <span class="bar"></span>
      </div>
      <div class="contacts">
        <div class="contact"><span class="ic">${icon(FaWhatsapp, '3.14mm')}</span><span class="latin phone" dir="ltr">${profile.phone.local}</span></div>
        <div class="contact"><span class="ic">${icon(FaEnvelope, '2.57mm')}</span><span class="latin email" dir="ltr">${profile.email}</span></div>
      </div>
    </div>`,
    `${cardCss}
    .safe{flex-direction:column;justify-content:space-between}
    .top{display:flex;flex-direction:column}
    .row{display:flex;justify-content:space-between;align-items:flex-start}
    .name{font-weight:700;font-size:5mm;line-height:1.3}
    .logo{font-size:3.43mm;line-height:1.2}
    .line{margin-top:.86mm;font-size:3mm;line-height:1.6;color:${BODY}}
    .bar{margin-top:2.57mm;width:8mm;height:.43mm;border-radius:.29mm;background:${BLUE}}
    .contacts{display:flex;flex-direction:column;gap:1.71mm}
    .contact{display:flex;align-items:center;gap:1.71mm}
    .ic{width:3.43mm;display:flex;justify-content:center;color:${ACCENT}}
    .phone{font-weight:500;font-size:3.14mm}
    .email{font-weight:500;font-size:2.86mm}`
  )

// QR sized so the quiet zone inside the 36 mm white tile is at least 4 modules
function qrLayout() {
  const tile = 36
  const modules = qrMatrix().size
  const size = Math.min(30, (tile * modules) / (modules + 8))
  return { tile, size, padding: (tile - size) / 2, modules }
}

function qrSvg() {
  const matrix = qrMatrix()
  const n = matrix.size
  let path = ''
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) if (matrix.get(x, y)) path += `M${x} ${y}h1v1h-1z`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" style="display:block;width:100%;height:100%"><path fill="${NAVY}" d="${path}"/></svg>`
}

const qrPlaceholder = () => `<div class="placeholder">
    <i class="finder tl"><b></b></i><i class="finder tr"><b></b></i><i class="finder bl"><b></b></i>
    <span dir="ltr">QR placeholder<br>generated once the<br>domain is live</span>
  </div>`

const backHtml = (final) => {
  const { tile, size, padding } = qrLayout()
  return base(
    `<div class="safe" dir="rtl">
      <div class="cta">
        <span class="ar title">امسح وشوف شغلي</span>
        <span class="arrow">${icon(FaArrowLeftLong, '4mm')}</span>
      </div>
      <div class="qr-col">
        <div class="tile">${final ? qrSvg() : qrPlaceholder()}</div>
        <span class="latin url" dir="ltr">${CARD_URL.replace(/^https?:\/\//, '')}</span>
      </div>
    </div>`,
    `${cardCss}
    .safe{align-items:center;justify-content:space-between}
    .cta{display:flex;flex-direction:column;gap:2mm;padding-inline-start:.57mm}
    .title{font-weight:700;font-size:4.86mm;line-height:1.35;white-space:nowrap}
    .arrow{color:${ACCENT}}
    .qr-col{display:flex;flex-direction:column;align-items:center;gap:1.43mm}
    .tile{width:${tile}mm;height:${tile}mm;padding:${padding}mm;border-radius:2.43mm;background:#fff}
    .url{font-size:2.29mm;color:${MUTED}}
    .placeholder{position:relative;width:${size}mm;height:${size}mm;
      background:repeating-linear-gradient(45deg,rgba(15,23,42,.08) 0 .86mm,transparent .86mm 1.71mm);
      display:flex;align-items:center;justify-content:center;text-align:center;
      font:500 1.6mm/1.5 ui-monospace,Menlo,monospace;color:${NAVY}}
    .finder{position:absolute;width:7mm;height:7mm;border:1mm solid ${NAVY};background:#fff;display:flex;align-items:center;justify-content:center}
    .finder b{width:3mm;height:3mm;background:${NAVY}}
    .tl{left:0;top:0}.tr{right:0;top:0}.bl{left:0;bottom:0}`
  )
}

// ---------- Render ----------
mkdirSync(fromRoot('print'), { recursive: true })
const browser = await launchBrowser()

const og = await renderPage(browser, ogHtml(), { width: 1200, height: 630 })
await og.screenshot({ path: fromRoot('public/og-card.jpg').pathname, type: 'jpeg', quality: 88 })
console.log('→ public/og-card.jpg')

// 91 mm at 96 css px per inch ≈ 344 px; scale 300/96 gives a 300 dpi PNG
const mm = (v) => Math.round((v / 25.4) * 96)
const printViewport = { width: mm(91), height: mm(61) }

const final = isFinalDomain() && hasFinalQr()
const sides = [
  ['card-front', frontHtml()],
  [final ? 'card-back' : 'card-back-DRAFT', backHtml(final)],
]
for (const stale of ['card-back', 'card-back-DRAFT']) {
  for (const ext of ['pdf', 'png']) rmSync(fromRoot(`print/${stale}.${ext}`), { force: true })
}
for (const [name, html] of sides) {
  const page = await renderPage(browser, html, printViewport, 300 / 96)
  await page.pdf({
    path: fromRoot(`print/${name}.pdf`).pathname,
    width: '91mm',
    height: '61mm',
    printBackground: true,
    preferCSSPageSize: true,
  })
  await page.screenshot({ path: fromRoot(`print/${name}.png`).pathname })
  console.log(`→ print/${name}.pdf + .png`)
}
await browser.close()

const { size, padding, modules } = qrLayout()
console.log(
  final
    ? `QR: ${modules} modules, ${size.toFixed(1)} mm with a ${padding.toFixed(1)} mm quiet zone`
    : 'Back side is a DRAFT: set the domain in src/data/site.js, run `npm run card:qr`, then export again.'
)
