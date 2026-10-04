// Single source of truth for the production URL. Used by the HTML meta tags,
// sitemap, vCard, QR code, printed card and email signature.
// When the custom domain is live, change it here and re-run `npm run card:qr`.
export const SITE_URL = 'https://mahmoudelsharawy.vercel.app'

export const CARD_URL = `${SITE_URL}/card`

// Generated at build time from src/data/profile.js (see scripts/card/vcard.js)
export const VCARD_PATH = '/card/Mahmoud-Elsharawy.vcf'
