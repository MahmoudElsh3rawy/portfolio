// Generates the QR code for the printed card: print/qr/card-qr.svg + .png
// Usage: npm run card:qr  (refuses to run while SITE_URL is still *.vercel.app)
import { mkdirSync, writeFileSync } from 'node:fs'
import QRCode from 'qrcode'
import { CARD_URL } from '../../src/data/site.js'
import { QR_OPTIONS, QR_PNG, QR_SVG, fromRoot, isFinalDomain, qrMatrix } from './shared.js'

if (!isFinalDomain() && !process.argv.includes('--force')) {
  console.error(
    `Refusing to generate the print QR for ${CARD_URL}.\n` +
      'Set the custom domain in src/data/site.js first (printed cards cannot be updated later).\n' +
      'Use --force only for a test print.'
  )
  process.exit(1)
}

mkdirSync(fromRoot('print/qr'), { recursive: true })

// 4-module quiet zone is part of the standalone files so they scan anywhere
const options = { ...QR_OPTIONS, margin: 4, color: { dark: '#0f172a', light: '#ffffff' } }
writeFileSync(QR_SVG, await QRCode.toString(CARD_URL, { ...options, type: 'svg' }))
await QRCode.toFile(QR_PNG.pathname, CARD_URL, { ...options, width: 2400 })

const size = qrMatrix().size
console.log(`QR for ${CARD_URL}: ${size}×${size} modules, ECC M`)
console.log(`→ ${QR_SVG.pathname}\n→ ${QR_PNG.pathname} (2400 px ≈ 2000 dpi at 30 mm)`)
