import { readFileSync } from 'node:fs'
import { profile } from '../../src/data/profile.js'
import { SITE_URL } from '../../src/data/site.js'

const PHOTO_PATH = new URL('./assets/contact-photo.jpg', import.meta.url)

const escapeText = (value) =>
  value.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n')

// vCard lines must be folded at 75 octets: continuation lines start with a space.
function fold(line) {
  const bytes = Buffer.from(line, 'utf8')
  if (bytes.length <= 75) return line
  const parts = []
  let start = 0
  let limit = 75
  while (start < bytes.length) {
    let end = Math.min(start + limit, bytes.length)
    // Don't split a multi-byte UTF-8 character
    while (end < bytes.length && (bytes[end] & 0xc0) === 0x80) end--
    parts.push(bytes.subarray(start, end).toString('utf8'))
    start = end
    limit = 74 // the leading space counts toward the 75
  }
  return parts.join('\r\n ')
}

export function buildVCard() {
  const photo = readFileSync(PHOTO_PATH).toString('base64')
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeText(profile.lastName)};${escapeText(profile.firstName)};;;`,
    `FN:${escapeText(profile.name.en)}`,
    `TITLE:${escapeText(profile.title)}`,
    `TEL;TYPE=CELL,VOICE,PREF:${profile.phone.primary}`,
    `TEL;TYPE=CELL:${profile.phone.secondary}`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
    `ADR;TYPE=WORK:;;;${escapeText(profile.location.city)};;;${escapeText(profile.location.country)}`,
    `URL:${SITE_URL}`,
    `NOTE:${escapeText(profile.tagline.en)}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${photo}`,
    'END:VCARD',
  ]
  return lines.map(fold).join('\r\n') + '\r\n'
}
