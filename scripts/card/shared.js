import { existsSync, readFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import QRCode from 'qrcode'
import { SITE_URL, CARD_URL } from '../../src/data/site.js'

export const root = new URL('../../', import.meta.url)
export const fromRoot = (path) => new URL(path, root)

export const QR_SVG = fromRoot('print/qr/card-qr.svg')
export const QR_PNG = fromRoot('print/qr/card-qr.png')

// The printed QR must never point at the temporary Vercel subdomain
export const isFinalDomain = () => !new URL(SITE_URL).hostname.endsWith('.vercel.app')
export const hasFinalQr = () => existsSync(QR_SVG)

export const QR_OPTIONS = { errorCorrectionLevel: 'M' }
export const qrMatrix = () => QRCode.create(CARD_URL, QR_OPTIONS).modules

export const icon = (Icon, size) =>
  renderToStaticMarkup(
    createElement(Icon, { style: { display: 'block', width: size, height: size }, 'aria-hidden': true })
  )

export const dataUri = (path, type) =>
  `data:${type};base64,${readFileSync(fromRoot(path)).toString('base64')}`

export const FONTS_LINK =
  '<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;700&family=Pacifico&family=Space+Grotesk:wght@400;500;700&display=block" rel="stylesheet">'

export async function launchBrowser() {
  const { chromium } = await import('playwright-core')
  const executablePath = process.env.CHROME_PATH
  const args = process.env.CHROME_ARGS?.split(' ').filter(Boolean)
  try {
    return await chromium.launch(executablePath ? { executablePath, args } : { channel: 'chrome', args })
  } catch (error) {
    console.error(
      'Could not start Chrome. Install Google Chrome, or set CHROME_PATH to a Chrome/Chromium binary.'
    )
    throw error
  }
}

// Wait for every web font to finish loading before taking a PDF/screenshot
export async function renderPage(browser, html, viewport, scale = 1) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: scale })
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.evaluate(async () => {
    const families = ["700 16px 'IBM Plex Sans Arabic'", "500 16px 'Space Grotesk'", "16px 'Pacifico'"]
    await Promise.all(families.map((f) => document.fonts.load(f, 'ME محمود')))
    await document.fonts.ready
  })
  return page
}
