# Handoff: Digital Business Card (/card page, printed card, OG image, email signature)

## Overview
Mahmoud Elsharawy is a freelance Full Stack Developer in Alexandria, Egypt. These files cover:
1. `/card`: a mobile-first, link-in-bio style page on his portfolio domain, with Save Contact (.vcf), WhatsApp and Email actions. It is bilingual: Arabic (RTL, the primary version) and English (LTR).
2. A printed business card, 85 × 55 mm, Arabic only, front and back, in dark and light variants.
3. An Open Graph image, 1200 × 630.
4. An email signature layout.

The original design brief is `CARD_DESIGN_BRIEF.md` in this folder. Its content is final copy and must be used verbatim.

## About the Design Files
The HTML files here are **design references**. They are prototypes that show the intended look and behavior, not production code to copy. Rebuild them in the portfolio site's existing stack (its framework, styling approach and component patterns). If no stack exists yet, pick the most suitable one, for example Next.js + Tailwind, which fits the tokens below.

- `Digital Card Mockups.dc.html`: the overview canvas with every deliverable. Option IDs: 1a mobile AR, 1b mobile EN, 1c button states, 1d desktop AR, 1e desktop EN, 1f dark print card, 1g light print card, 1h OG image, 1i signature, 1j spec sheet.
- `Card Page.dc.html`: the `/card` page itself, a working prototype. Its logic class at the bottom of the file holds all copy strings, the vCard and the link URLs.
- `support.js`: the runtime that lets the .dc.html files open in a browser. Serve the folder over a local server (for example `npx serve .`) and open the .dc.html files. You don't need to port this file.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii and states are final. Recreate them pixel-accurately.

## Design Tokens
Dark only. The printed light card is the one exception.

Colors
- bg-base `#0F172A`. Also the browser `theme-color`.
- bg-gradient `linear-gradient(135deg, #0F172A 0%, #1A2744 40%, #0D1B3E 70%, #0F172A 100%)`, fixed, full page.
- surface `rgba(255,255,255,0.05)` · surface-raised `rgba(255,255,255,0.10)`
- border `rgba(255,255,255,0.10)` · border-accent `rgba(43,127,255,0.50)`
- text-primary `#FFFFFF` · text-body `#D1D5DC` · text-muted `#99A1AF` · text-faint `#6A7282`. On the dark page, text-faint is used only on light backgrounds; it fails AA on navy.
- accent `#51A2FF` · primary `#2B7FFF` · primary-hover `#155DFC` · accent-fill `rgba(43,127,255,0.20)`
- gradient-heading `linear-gradient(to right, #60A5FA, #22D3EE)`, used as a text gradient on section titles only.
- whatsapp: text `#05DF72`, fill `#00C950`, tint bg `rgba(0,201,80,0.20)`, tint border `rgba(0,201,80,0.40)`
- star `#FF8904`

Typography
- Latin: **Space Grotesk** 400/500/700. Arabic: **IBM Plex Sans Arabic** 400/500/700. Logo only: **Pacifico** ("ME", color `#51A2FF`).
- Font stack for the page: `'Space Grotesk','IBM Plex Sans Arabic',sans-serif`. Latin, digits, emails and URLs render in Space Grotesk; Arabic falls back to Plex.
- Root font-size **16px (EN) / 17px (AR)**, line-height **1.6 (EN) / 1.7 (AR)**. All sizes below are in `em` against that root, so Arabic scales ×1.0625 automatically.

Radius: 12px for buttons, rows and thumbnails · 16px for project cards · 10px for icon boxes · full for the photo, chips and the language pill.
Shadows: none. Depth comes from translucent surfaces and 1px borders only.

## Screen: /card page

Root
- `dir="rtl" lang="ar"` or `dir="ltr" lang="en"`. min-height 100vh, bg-gradient, color text-body.
- Padding: mobile `12px 20px 32px`; desktop (≥ 768px) `56px 24px 56px`.
- Inner column: `max-width: 440px; margin: 0 auto; display:flex; flex-direction:column; gap:28px`.

1. Top row: height 48, `justify-content: space-between`.
   - "ME" in Pacifico 22px, `#51A2FF`, `dir="ltr"`. It sits at the start side.
   - Language toggle: a button 48 tall, min-width 56, padding `0 18px`, radius full, bg surface, 1px border, white text, 15px weight 500, using the Arabic font. The label reads **ع** on the English page and **EN** on the Arabic page. aria-label: "Switch to Arabic" / "Switch to English".
     - Hover: bg `rgba(255,255,255,.10)`, border border-accent.
     - Pressed: bg accent-fill, border `#2B7FFF`.
2. Profile block, centered, with margin-top -8.
   - Outer ring: 138×138, 1px dashed `rgba(81,162,255,0.40)`, round. It is static, with no animation.
   - Inner ring: 122×122, 2px solid `#2B7FFF`, padding 3, containing the photo (object-fit cover, round). Margin-bottom 20.
   - Name `<h1>`: 1.625em, weight 700, white, line-height 1.25.
   - One-liner: 1em, text-body, margin-top 8, max-width 320, `text-wrap: balance`.
   - Meta line: 0.8125em, text-muted, margin-top 4.
   - Trust chips: margin-top 16, gap 8, wrapping and centered. Each chip is 30 tall, padding `0 12px`, radius full, bg surface, 1px border, 0.8125em text-body, with a 7px gap between icon and text.
     - Chip 1: Upwork logo (13px, `#51A2FF`) + "100% Job Success" / "نسبة نجاح 100%".
     - Chip 2: solid star (11px, `#FF8904`) + "5.0 client rating" / "تقييم 5.0".
3. Actions: a column with gap 12.
   - **Save Contact**: full width, 56 tall, radius 12, bg `#2B7FFF`, white, 1em weight 500, address-card icon at 20px, gap 10.
     - Hover and pressed: `#155DFC`. Pressed also applies `scale(.985)`.
     - Focus-visible: 2px `#51A2FF` outline, offset 3.
   - Below it, a grid of 2 equal columns with gap 12:
     - **WhatsApp**: 52 tall, radius 12, tint bg + tint border, text `#05DF72`, 0.9375em weight 500, WhatsApp logo at 21px.
       - Hover: bg `rgba(0,201,80,.30)`.
       - Pressed: bg `#00C950`, text `#0F172A`.
     - **Email**: 52 tall, radius 12, transparent, 1px `#2B7FFF` border, text `#51A2FF`, envelope icon at 18px.
       - Hover: bg `#2B7FFF`, white text.
       - Pressed: `#155DFC`.
   - At 390 × 844 the profile block and all three buttons sit above the fold, ending at about 560px.
4. Selected work ("Selected work" / "من أعمالي"): margin-top 8, gap 12.
   - Title `<h2>`: 1.125em, weight 700, gradient text, `width: fit-content`.
   - 2 cards. Each card: bg surface, 1px border, radius 16, padding `12px 12px 0`, gap 12, overflow hidden.
     - Thumbnail tile: bg `#FFFFFF`, radius 12, `aspect-ratio: 16/10`, image object-fit cover. advisors.png is centered; ecommerce.png uses `object-position: center top`.
     - Title `<h3>`: 1em, weight 700, white. Description: 0.875em, text-muted, gap 4, side padding 4.
     - Link row: 48 tall, extending to the card edges (margin `0 -12px`, padding `0 16px`), 1px top border.
       - At the start: "Visit site ↗" / "زيارة الموقع ↖" in `#51A2FF`, 0.875em, weight 500.
       - At the end: the domain in text-muted, `dir="ltr"`.
       - Hover: bg surface.
5. Links ("Links" / "روابط"): margin-top 8, gap 8.
   - Rows: 56 tall, padding `0 12px`, radius 12, bg surface, 1px border, gap 12.
     - Icon box: 34×34, radius 10, bg accent-fill, icon at 17px in `#51A2FF`.
     - Label: flex 1, 0.9375em, weight 500, white.
     - Chevron: 13px, text-muted. It points right in LTR and left in RTL.
     - Hover: bg surface-raised, border border-accent.
   - Order: Upwork, LinkedIn, GitHub, Full portfolio / الموقع الكامل (globe icon).
6. Footer: centered, gap 6, padding `12px 0 4px`. "ME" in Pacifico 16px `#51A2FF`, then "© 2026 Mahmoud Elsharawy" / "© 2026 محمود الشعراوي" at 0.75em in text-muted.

Toast (after Save Contact)
- Placed fixed, top 76px, centered horizontally. Width `calc(100% - 40px)`, max 400. Padding `14px 16px`, radius 12, bg `rgba(16,24,40,0.96)`, 1px border, white text at 0.875em.
- Content: circle-check icon in `#05DF72` at 18px + "Contact saved, check your downloads" / "تم حفظ جهة الاتصال، شوف التنزيلات".
- Auto-hides after 2.8s. Use `role="status"`.

RTL rules
- The whole layout mirrors via `dir`; use logical properties (`padding-inline-start` and similar).
- Brand logos are not mirrored.
- Numbers, emails and URLs are wrapped in `dir="ltr"` / `unicode-bidi: isolate`, and use Western digits.

## Interactions & Behavior
- **Save Contact** generates a vCard 3.0 and downloads `Mahmoud-Elsharawy.vcf`, then shows the toast. On iOS Safari, serving a real `.vcf` file with `Content-Type: text/vcard` opens the native "Add Contact" sheet more reliably than a blob URL. The vCard:
  ```
  BEGIN:VCARD
  VERSION:3.0
  N:Elsharawy;Mahmoud;;;
  FN:Mahmoud Elsharawy
  TITLE:Full Stack Developer
  TEL;TYPE=CELL,VOICE:+201226034294
  TEL;TYPE=CELL:+201157229382
  EMAIL;TYPE=INTERNET:mahmoudelsharawy92@gmail.com
  ADR;TYPE=WORK:;;;Alexandria;;;Egypt
  URL:https://www.upwork.com/freelancers/mahmoudelsharawy
  NOTE:I build websites and apps for businesses
  END:VCARD
  ```
  Adding a `PHOTO` field and the final domain as `URL` is recommended once the domain exists.
- **WhatsApp** opens `https://wa.me/201226034294?text=<encoded>` in a new tab. The prefilled message depends on the language:
  - AR: أهلاً محمود، شفت الكارت بتاعك وحابب أتكلم معاك عن مشروع
  - EN: Hi Mahmoud, I saw your card and I'd like to talk about a project
- **Email** opens `mailto:mahmoudelsharawy92@gmail.com`.
- **Language toggle** swaps all strings plus `dir`, `lang` and the root size. Recommended: keep the choice in the URL (`/card?lang=en`) or localStorage, defaulting to Arabic, or to the language from `Accept-Language`.
- Transitions: background 150ms, transform 100ms. No other animation.
- External links open in a new tab with `rel="noopener"`.

## State
- `lang`: `'ar' | 'en'`
- `toastVisible`: boolean, set when Save Contact is pressed and cleared after 2.8s.

## Printed card (85 × 55 mm, 3 mm bleed → 91 × 61 mm)
The mockups are drawn at a scale of 7px = 1mm.
- Artboard: 637 × 427px.
- Trim box: inset 21px (3 mm).
- Safe area: inset 49px (3 mm bleed + 4 mm margin).
- Layout is RTL, all Arabic text is in IBM Plex Sans Arabic, and digits and email are in Space Grotesk.

Front, laid out as a column inside the safe area with `justify-content: space-between`:
- Top block:
  - Name "محمود الشعراوي" at 13.9pt, weight 700, at the start side; "ME" in Pacifico about 9.7pt at the end side.
  - One-liner at 8.6pt.
  - A blue bar, 8 × 0.4 mm.
- Bottom block:
  - WhatsApp icon + "0122 603 4294" at 9pt, weight 500.
  - Envelope icon + email at 8.2pt, weight 500, on one line.

Back:
- At the start side: the call to action "امسح وشوف شغلي" at 13.5pt, weight 700, with a left-pointing arrow below it (toward the QR).
- At the end side: the QR code, 30 × 30 mm, with a 3 mm quiet zone (36 mm tile), dark modules on white. Below it, "[final domain]/card" at 6.5pt.
- The QR code is a **placeholder**. Generate it once the domain exists: no logo, square modules, ECC level M.

Variants
- **Dark**:
  - Background: solid `#0F172A`, no gradient.
  - Text: name white, one-liner `#D1D5DC`, icons `#51A2FF`, URL `#99A1AF`.
  - QR: on a white tile with 2.5 mm radius.
- **Light**:
  - Background: `#FFFFFF`.
  - Text: name `#0F172A`, one-liner `#6A7282`, icons and accents `#2B7FFF`.
  - QR: directly on white.

CMYK starting points (proof before the print run)
- `#0F172A`: C90 M78 Y45 K62 (rich navy).
- `#2B7FFF`: C80 M45 Y0 K0. It is out of CMYK gamut; the nearest spot color is about Pantone 2727 C.
- `#51A2FF`: C65 M28 Y0 K0.
- `#D1D5DC`: C15 M10 Y8 K0.
- `#6A7282`: C55 M42 Y30 K12.
- White: paper (knock-out).

Dark variant risks
- Small reversed text can fill in if plates misregister.
- Dark full-bleed shows scuffs; matte lamination is recommended.
- Never build the navy from K only.

## OG image (1200 × 630)
- Background: bg-gradient.
- All content sits inside the central safe area: 1000 × 500 at x 100, y 65.
- Layout: a flex row, vertically centered, gap 72.
- Photo: 296px, with a 3px `#2B7FFF` ring, 6px padding, and a 330px dashed outer ring.
- Text column:
  - "ME" in Pacifico 36px.
  - Name in English: 60px, weight 700, white.
  - Name in Arabic: 40px, weight 700, `#D1D5DC`, left-aligned.
  - A 64 × 4 blue bar with 28px vertical margin.
  - One-liner in English: 26px, `#D1D5DC`.
  - One-liner in Arabic: 26px, `#99A1AF`.
- Export as PNG or JPG. Reference it with `og:image`, `og:image:width=1200` and `og:image:height=630`.

## Email signature
- White background, layout in Space Grotesk with an Arial fallback.
- Photo: 64px round, with a 2px `#2B7FFF` ring.
- Name: 16px, weight 700, `#0F172A`.
- One-liner: 14px, `#6A7282`.
- Links: 13px, weight 500, `#2B7FFF`, separated by "·": [final domain]/card · WhatsApp · LinkedIn.
- Production build: table-based HTML, inline styles, absolute image URLs, Arial fallback. Web fonts won't load in most mail clients.

## Assets
- `uploads/profile.webp`: 640×640 portrait, displayed round.
- `uploads/advisors.png`: project 1 thumbnail.
- `uploads/ecommerce.png`: project 2 thumbnail.
- Icons: Font Awesome 6 Free. Solid icons used: address-card, envelope, star, chevron-left and chevron-right, globe, circle-check, arrow-left-long. Brand icons used: whatsapp, upwork, linkedin-in, github.
- Fonts: Google Fonts (Space Grotesk, IBM Plex Sans Arabic, Pacifico).

## Placeholders to replace
`[final domain]` appears in the Full portfolio link, the card-back URL, the QR target and the signature link.

## Files
- `Digital Card Mockups.dc.html`: overview of all deliverables.
- `Card Page.dc.html`: the /card prototype, holding the copy strings, vCard and URLs.
- `support.js`: the prototype runtime only.
- `CARD_DESIGN_BRIEF.md`: the original brief, the source of truth for copy.
- `uploads/`: images.
