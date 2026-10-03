# Design Brief — Digital Business Card Page + Printed Business Card

> **For the designer:** this brief is self-contained. You don't have access to the codebase; every value, color, font and piece of content you need is below. Please use the **real content** in section 4 exactly as written. Do not invent extra data. Attached separately: the profile photo and two project screenshots (see section 9).

---

## 1. What we're designing

Mahmoud Elsharawy is a freelance Full Stack Developer based in Alexandria, Egypt. He already has a portfolio website (dark, modern, blue accents). We need **three things** that share its visual identity:

1. **A digital business card page** at `/card` on his site. It's a mobile-first, link-in-bio style page (similar in concept to Linktree), but on his own domain and with a "Save Contact" feature.
2. **A printed business card**, 85 × 55 mm, **Arabic only**, front and back.
3. **An Open Graph preview image** (1200 × 630) for when the `/card` link is shared on WhatsApp or Facebook.

*(A simple HTML email signature will also link to `/card`. Optional: if you have time, propose a matching signature layout. It must be very simple: photo, name, one-liner, 3 links.)*

## 2. Audience and context

- **How people arrive:** they scan the QR code on the printed card, or they tap a link in his social bios, email signature, or a WhatsApp message he sends after meeting someone.
- **Who they are:** mostly **on a phone**, and many are **non-technical** (local business owners: clinics, shops, restaurants in Egypt). Some are international clients (Upwork, LinkedIn).
- **What they need:** within **3 seconds** they should understand who he is and what he does, and be able to **save his contact** or **message him on WhatsApp** with one tap.
- **Implication:** plain language, big tap targets, strong hierarchy, no jargon, no tech-stack lists, no decorative clutter.

## 3. Design direction

- **Clean, professional, calm.** It's a simplified version of the main site, not a new brand.
- Same dark navy background, same blue accent, same translucent surfaces with thin borders, same fonts and radii.
- **No heavy animations** (at most subtle hover/press states), no particles, no busy gradients, no glassmorphism overload.
- One clear primary action (**Save Contact**). Everything else is visually secondary.
- It must look trustworthy to a 50-year-old clinic owner and modern to a tech client.

---

## 4. Real content (use exactly)

### Identity

| | English | Arabic |
|---|---|---|
| Name | **Mahmoud Elsharawy** | **محمود الشعراوي** |
| One-liner (value statement) | **I build websites and apps for businesses** | **أصمم وأطوّر مواقع وتطبيقات للأعمال** |
| Role (secondary, small, optional) | Full Stack Developer | مطوّر مواقع وتطبيقات (Full Stack) |
| Location (small, optional) | Alexandria, Egypt | الإسكندرية، مصر |

### Contact

| | Value |
|---|---|
| WhatsApp / primary phone | **+20 122 603 4294** (local format: **0122 603 4294**) |
| Secondary phone (only inside the saved contact, not shown on the page) | +20 115 722 9382 |
| Email | **mahmoudelsharawy92@gmail.com** |
| Website | Portfolio home page. **The final domain is still being purchased.** Show the URL as `mahmoudelsharawy.com/card`-style text only if the layout needs it, and mark it clearly as **"[final domain]"** so it can be swapped. |

**WhatsApp prefilled message** (not displayed, but useful to know the tone):
- AR: أهلاً محمود، شفت الكارت بتاعك وحابب أتكلم معاك عن مشروع
- EN: Hi Mahmoud, I saw your card and I'd like to talk about a project

### Trust signal (optional, one small line or chips. Use only if it fits cleanly)

Upwork: **100% Job Success · Rising Talent · 5.0★ client rating**
AR: ‏Upwork: ‏نسبة نجاح 100% · Rising Talent · تقييم 5.0★

### Selected work (2 projects)

| | Project 1 | Project 2 |
|---|---|---|
| Title EN | **Advisors Platform** | **Janelle Online Store** |
| Title AR | **منصة المستشارين** | **متجر Janelle الإلكتروني** |
| One-liner EN | A platform where clients meet expert advisors through video calls and chat. | An online beauty store for a brand in Egypt: products, cart and checkout. |
| One-liner AR | منصة يتواصل فيها العملاء مع مستشارين متخصصين بمكالمات فيديو ومحادثة. | متجر إلكتروني لبراند مستحضرات تجميل في مصر: منتجات وسلة مشتريات ودفع. |
| Link | advisors.startupkit.io | janelle-eg.com |
| Thumbnail | Attached `advisors.png`: a laptop mockup on white showing a video meeting room. | Attached `ecommerce.png`: a white and pink product page (lip liners). |

Both thumbnails have **white backgrounds**, so frame them inside a light rounded tile or crop them into a fixed ratio (16:10) so they don't look like holes in the dark UI.

### Links

| Label EN | Label AR | URL |
|---|---|---|
| Upwork | Upwork | upwork.com/freelancers/mahmoudelsharawy |
| LinkedIn | LinkedIn | linkedin.com/in/mahmoud-elsharawy-dev |
| GitHub | GitHub | github.com/MahmoudElsh3rawy |
| Full portfolio | الموقع الكامل | [final domain] (home page) |

*(No Facebook. He doesn't use it for work.)*

### UI labels

| Element | English | Arabic |
|---|---|---|
| Primary button | Save Contact | احفظ جهة الاتصال |
| WhatsApp button | WhatsApp | واتساب |
| Email button | Email | البريد الإلكتروني |
| Section heading | Selected work | من أعمالي |
| Project link | Visit site | زيارة الموقع |
| Section heading | Links | روابط |
| Language toggle | **ع** (switch to Arabic) | **EN** (switch to English) |
| Footer | © 2026 Mahmoud Elsharawy | © 2026 محمود الشعراوي |
| (Optional) toast after saving | Contact saved, check your downloads | تم حفظ جهة الاتصال، شوف التنزيلات |

### Printed card copy (Arabic only)

- **Front:** محمود الشعراوي / أصمم وأطوّر مواقع وتطبيقات للأعمال / WhatsApp: 0122 603 4294 / mahmoudelsharawy92@gmail.com
- **Back:** QR code (to `[final domain]/card`) + call to action: **امسح وشوف شغلي**. Optionally a tiny URL line under the QR: `[final domain]/card`.

---

## 5. Design tokens (extracted from the live site, exact values)

### Mode
**Dark only.** The site has no light mode. The page should be dark only too. (The printed card is the exception; see section 7.)

### Colors

| Token | Hex | Role |
|---|---|---|
| `bg-base` | `#0F172A` | Page base, browser theme-color |
| `bg-gradient` | `linear-gradient(135deg, #0F172A 0%, #1A2744 40%, #0D1B3E 70%, #0F172A 100%)` | Full-page background (fixed) |
| `surface` | `rgba(255,255,255,0.05)` ≈ `#1B2335` on base | Cards, rows, list items |
| `surface-raised` | `rgba(255,255,255,0.10)` ≈ `#272E3F` | Hover/pressed surface, chips |
| `border` | `rgba(255,255,255,0.10)` ≈ `#272E3F` | 1px borders on all cards |
| `border-accent` | `rgba(43,127,255,0.50)` ≈ `#1D4B94` | Hover/focus border |
| `text-primary` | `#FFFFFF` | Name, headings |
| `text-body` | `#D1D5DC` | Body copy, one-liner |
| `text-muted` | `#99A1AF` | Descriptions, secondary info (most used) |
| `text-faint` | `#6A7282` | Footer, tiny meta |
| `accent` | `#51A2FF` | Links, icons, active states, outline-button text |
| `primary` | `#2B7FFF` | Filled primary button, outline-button border, photo ring |
| `primary-hover` | `#155DFC` | Primary button hover/pressed |
| `accent-fill` | `rgba(43,127,255,0.20)` ≈ `#152C55` | Icon backgrounds, tags |
| `gradient-heading` | `linear-gradient(to right, #60A5FA, #22D3EE)` | Section headings (text gradient). Use sparingly |
| `whatsapp` | `#05DF72` text / `#00C950` fill / `rgba(0,201,80,0.20)` tinted bg | WhatsApp button only |
| `star` | `#FF8904` | Rating stars |
| `nav-surface` | `rgba(16,24,40,0.90)` + `backdrop-blur 8px`, bottom border `#1E2939` | Sticky top bar (if any) |

### Typography

| | Value |
|---|---|
| Latin font | **Space Grotesk** (Google Fonts). Weights **400** body, **500** buttons/links, **700** headings |
| Logo font | **Pacifico**, only for the "ME" monogram logo (blue `#51A2FF`) |
| Arabic font (new; the site has none yet) | **IBM Plex Sans Arabic** 400/500/700, recommended because it pairs well with Space Grotesk's geometric shapes. Acceptable alternatives: Readex Pro, Alexandria. Pick one and use it for all Arabic text on the page and the printed card. |
| Scale (px) | 12 · 14 (most used) · 16 · 18 · 20 · 24 · 36 (section titles) · 48–60 (hero name on main site) |
| Line height | 1.625 for paragraphs (`leading-relaxed`) |
| Letter spacing | 0.1em only on tiny uppercase labels |

Phone numbers and emails inside Arabic text must stay **Western digits, LTR-isolated** (e.g. `0122 603 4294`), as is normal in Egypt.

### Shape and depth

| | Value |
|---|---|
| Radius | **8px** buttons/inputs · **12px** icon boxes, small cards, list rows · **16px** large cards · **full** for photo, chips, round buttons |
| Borders | 1px `border` on every surface; this is the main depth cue |
| Shadows | Essentially none. The style is **translucent surfaces + thin borders**, not shadows |
| Spacing | 4px base grid. Card padding 24px (mobile) / 32px. Gaps 8 / 12 / 16 / 24 / 32px |

### Icons
Font Awesome style (solid), plus brand logos from Simple Icons (Upwork, GitHub, LinkedIn, WhatsApp). Line weight and size consistent; 20–24px in buttons and rows.

### Distinctive elements to echo (simplified)
- **Round profile photo with a 2px `#2B7FFF` ring**. The main site also has a slowly spinning dashed ring around it; on the card page use a **static** thin dashed ring at most, or none.
- **"ME" monogram** in Pacifico, blue.
- **Outline buttons**: 1px `#2B7FFF` border + `#51A2FF` text, filling with blue on hover/press.
- **Gradient text** (`#60A5FA` to `#22D3EE`) on section titles.

---

## 6. The page (`/card`): layout spec

### Frames to deliver
1. **Mobile, Arabic (RTL)**, 390 px wide (primary)
2. **Mobile, English (LTR)**, 390 px wide
3. **Desktop, Arabic**: same single column centered (max ~440 px) on the full-width gradient background
4. **Desktop, English**: same

(Plus pressed/hover states for buttons and the language toggle, and an optional "contact saved" toast.)

### Structure (top to bottom)

1. **Top row:** small "ME" logo at the start side, language toggle (**ع / EN**) as a small pill at the end side.
2. **Profile block (centered):**
   - Photo ~112–128px, round, 2px blue ring.
   - Name: 24–28px, bold, white.
   - One-liner: 16–17px, `text-body`, max 2 lines.
   - Optional meta line: role · location, 13–14px, `text-muted`.
   - Optional trust chips: 100% Job Success · 5.0★ Upwork.
3. **Primary actions:**
   - **Save Contact**: full-width, **filled `#2B7FFF`**, ~56px tall, 12px radius, icon (address-card / user-plus) + label. It's the most prominent element on the page.
   - **WhatsApp** + **Email** side by side (2 equal columns), ~52px tall, outline/tinted style. WhatsApp uses green tint and icon; Email uses blue outline.
4. **Selected work** (section title with gradient text or plain white):
   - 2 cards stacked. Each card: thumbnail (16:10, inside a light tile with 12px radius), title (16px bold), one-liner (14px muted), "Visit site ↗" link row.
5. **Links:** full-width list rows (~52px, 12px radius, `surface` + `border`). Each row: brand icon, label, and a chevron/arrow at the end side.
   Order: Upwork, LinkedIn, GitHub, Full portfolio.
6. **Footer:** small faint text: © 2026 + name. Optionally the "ME" monogram.

### Rules
- **Touch targets ≥ 48px**, minimum 8px between tappable items.
- Text contrast WCAG AA on the dark background.
- The whole page should feel **scannable in one scroll** on a phone; the profile + 3 action buttons should be visible above the fold at 390 × 844.
- **RTL:** fully mirrored layout (alignment, paddings, icon positions, chevron direction). Brand logos are **not** mirrored. Numbers, emails and URLs stay LTR.
- Arabic text: slightly larger size/line-height than Latin for equal visual weight (e.g. +1px, line-height 1.7).
- No heavy imagery, no background illustrations, no carousels.

---

## 7. Printed business card (Arabic only)

### Format and print specs
| | Value |
|---|---|
| Trim size | **85 × 55 mm** (landscape) |
| Bleed | **3 mm** on every side → artboard **91 × 61 mm** |
| Safe margin | Keep all text and the QR **≥ 4 mm inside the trim** (safe area ≈ 77 × 47 mm) |
| Resolution | **≥ 300 DPI**. At 300 DPI: trim ≈ 1004 × 650 px, with bleed ≈ 1075 × 720 px |
| Color | Deliver print-ready CMYK guidance next to each hex (the print shop will convert) |
| Direction | RTL layout, Arabic font from section 5 |

### Front
- محمود الشعراوي: the largest element, bold.
- أصمم وأطوّر مواقع وتطبيقات للأعمال
- WhatsApp icon + **0122 603 4294**
- Email icon + **mahmoudelsharawy92@gmail.com** (long, so make sure it fits on one line at a legible size, ≥ 7pt)
- Optional: small "ME" monogram as a brand mark.

### Back
- **Large QR code** pointing to `[final domain]/card`. **The QR will be generated later**, once the domain is purchased. Design with a **placeholder square** at the final size.
  - Size: **≥ 25 mm**, ideally 28–32 mm.
  - **Dark modules on a light background** (e.g. `#0F172A` on `#FFFFFF`), high contrast.
  - **Quiet zone ≥ 4 modules** (~3 mm) of plain light background around it.
  - **No logo in the middle, no rounded/dotted module styles, no gradients** on the code.
- Call to action next to it: **امسح وشوف شغلي** (optionally with a small arrow pointing to the QR).
- Optional tiny URL line: `[final domain]/card`.

### Two variants, please (the client will choose)
1. **Dark:** navy `#0F172A` background (solid, no gradient, to avoid banding), white/blue text, QR on a white rounded tile with its quiet zone. Note: dark full-bleed prints need a rich-black or navy CMYK build; flag any print risk.
2. **Light:** white background, `#0F172A` text, `#2B7FFF` accents, QR directly on white.

---

## 8. Open Graph image (for WhatsApp/Facebook link preview)

- **1200 × 630 px**, dark gradient background, photo with blue ring, name (AR + EN), one-liner in both languages, small "ME" mark.
- Keep the important content inside the central ~1000 × 500 px (some apps crop the edges).

## 9. Assets attached separately

- `profile.webp`: 640×640 portrait, man with a beard in a black suit and black shirt on a near-black background. Use it round.
- `advisors.png`: 667×397, project 1 thumbnail.
- `ecommerce.png`: 1403×912, project 2 thumbnail.

## 10. What to deliver

1. Page: 4 frames (mobile AR, mobile EN, desktop AR, desktop EN) + button states + optional toast.
2. Printed card: front + back, dark and light variants, at 91 × 61 mm with bleed, trim and safe guides visible.
3. OG image 1200 × 630.
4. (Optional) email signature layout.
5. A short spec sheet: final spacing, font sizes, and any token you changed, with the reason.

**Do not** introduce new brand colors, new fonts (other than the one Arabic font), heavy effects, or placeholder text. Everything should feel like it belongs on the existing portfolio.
