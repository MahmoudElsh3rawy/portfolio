// Writes print/card-qr-phone.png: a phone-sized image (1170 × 2532) with the
// /card QR, to show on screen or use as a lock-screen wallpaper. The top is left
// empty for the lock-screen clock. It isn't printed, so it can point at the
// temporary Vercel domain; re-run it after the domain changes.
// Usage: npm run card:screen   (needs Chrome; set CHROME_PATH if it isn't found)
import { mkdirSync } from 'node:fs'
import QRCode from 'qrcode'
import { profile } from '../../src/data/profile.js'
import { CARD_URL } from '../../src/data/site.js'
import { FONTS_LINK, QR_OPTIONS, dataUri, fromRoot, launchBrowser, renderPage } from './shared.js'

const qr = await QRCode.toString(CARD_URL, {
  ...QR_OPTIONS,
  type: 'svg',
  margin: 0,
  color: { dark: '#0f172a', light: '#ffffff' },
})

const html = `<!doctype html><html><head><meta charset="utf-8">${FONTS_LINK}<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:390px;height:844px;overflow:hidden}
body{background:linear-gradient(160deg,#0f172a 0%,#1a2744 40%,#0d1b3e 70%,#0f172a 100%);color:#fff;
  font-family:'IBM Plex Sans Arabic',sans-serif;display:flex;flex-direction:column;align-items:center;
  justify-content:flex-end;padding:0 32px 92px;position:relative}
.glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 62%,rgba(43,127,255,.22),transparent 260px)}
.photo,.name,.en,.line,.tile,.url{position:relative}
.photo{width:76px;height:76px;border-radius:50%;padding:3px;border:2px solid #2b7fff}
.photo img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}
.name{margin-top:12px;font-weight:700;font-size:24px;line-height:1.3}
.en{font-family:'Space Grotesk',sans-serif;font-size:14px;color:#99a1af;letter-spacing:.2px}
.line{margin-top:4px;font-size:15px;color:#d1d5dc}
/* 30px padding keeps a quiet zone of at least 4 modules around the QR */
.tile{margin-top:24px;background:#fff;border-radius:24px;padding:30px;width:270px;height:270px;box-shadow:0 20px 50px rgba(0,0,0,.35)}
.tile svg{width:100%;height:100%;display:block}
.url{margin-top:18px;font-family:'Space Grotesk',sans-serif;font-size:12px;color:#6a7282;direction:ltr}
</style></head><body dir="rtl"><div class="glow"></div>
<div class="photo"><img src="${dataUri('src/assets/profile.webp', 'image/webp')}" alt=""></div>
<div class="name">${profile.name.ar}</div>
<div class="en">${profile.name.en}</div>
<div class="line">${profile.tagline.ar}</div>
<div class="tile">${qr}</div>
<div class="url">${CARD_URL.replace(/^https:\/\//, '')}</div>
</body></html>`

mkdirSync(fromRoot('print'), { recursive: true })
const browser = await launchBrowser()
const page = await renderPage(browser, html, { width: 390, height: 844 }, 3)
await page.screenshot({ path: fromRoot('print/card-qr-phone.png').pathname })
await browser.close()
console.log('→ print/card-qr-phone.png')
