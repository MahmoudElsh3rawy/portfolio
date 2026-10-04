// Writes print/email-signature.html: table-based with inline styles, since
// most mail clients ignore <style>, flexbox and web fonts.
// Usage: npm run card:signature, then open the file in a browser, select all,
// copy and paste into Gmail → Settings → Signature.
import { mkdirSync, writeFileSync } from 'node:fs'
import { profile } from '../../src/data/profile.js'
import { CARD_URL, SITE_URL } from '../../src/data/site.js'
import { fromRoot } from './shared.js'

const font = "font-family:'Space Grotesk',Arial,Helvetica,sans-serif"
const link = `color:#2b7fff;text-decoration:none;font-weight:500`
const dot = `<span style="color:#d1d5dc;padding:0 6px">·</span>`
const cardLabel = CARD_URL.replace(/^https?:\/\//, '')

const html = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="${font};border-collapse:collapse">
  <tr>
    <td style="padding:0 16px 0 0;vertical-align:middle">
      <a href="${CARD_URL}"><img src="${SITE_URL}/email/signature-photo.png" width="64" height="64" alt="${profile.name.en}" style="display:block;width:64px;height:64px;border:0"></a>
    </td>
    <td style="vertical-align:middle">
      <div style="font-size:16px;line-height:22px;font-weight:700;color:#0f172a">${profile.name.en}</div>
      <div style="font-size:14px;line-height:20px;color:#6a7282">${profile.tagline.en}</div>
      <div style="font-size:13px;line-height:20px;padding-top:6px">
        <a href="${CARD_URL}" style="${link}">${cardLabel}</a>${dot}<a href="https://wa.me/${profile.phone.primary.replace('+', '')}" style="${link}">WhatsApp</a>${dot}<a href="${profile.links.linkedin}" style="${link}">LinkedIn</a>
      </div>
    </td>
  </tr>
</table>
`

mkdirSync(fromRoot('print'), { recursive: true })
writeFileSync(fromRoot('print/email-signature.html'), html)
console.log('→ print/email-signature.html')
