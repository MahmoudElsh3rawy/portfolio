# Project notes for Claude

Context for continuing work on this repo in a new chat. Keep it up to date when
something here changes.

## Owner and workflow

- Owner: Mahmoud Elsharawy (محمود الشعراوي), freelance Full Stack Developer,
  Alexandria, Egypt. Talks in Egyptian Arabic; answer in Arabic.
- One change at a time: new branch with a descriptive name
  (e.g. `content/...`, `feat/...`, `fix/...`, `docs/...`), commit, push, open
  a PR. He reviews and merges himself. Never push to `main`.
- Commits are authored in his name, without a Co-Authored-By trailer:
  `git config user.name "MahmoudElsh3rawy"`,
  `git config user.email "mahmoudelsharawy92@gmail.com"`.
- Never ask for or paste secret values (MONGODB_URI, RESEND_API_KEY,
  CRON_SECRET) in chat. They live only in Vercel → Settings → Environment
  Variables, type **Secret**.

## Stack and layout

- React 19 + Vite 8 + Tailwind 4 (no config file), deployed on Vercel:
  https://mahmoudelsharawy.vercel.app. CI: `.github/workflows/ci.yml`
  (lint + build, Node 22). `main` is protected by a ruleset.
- Multi-page build: `index.html` (portfolio) and `card/index.html` (`/card`,
  digital business card, its own static OG tags).
- Single source of truth for the domain: `SITE_URL` in `src/data/site.js`.
  `%SITE_URL%` in HTML, `robots.txt`, `sitemap.xml` and the vCard are generated
  from it by `scripts/vite-site-plugin.js`.
- Personal data: `src/data/profile.js` (name, title, tagline, phones, links).
  Primary phone = calls + WhatsApp; secondary = calls only (no call button for
  it on `/card` — decided).
- `/card`: `src/card/` (CardPage, content.js EN/AR, card.css). Language is set
  before paint: `?lang=` > localStorage `card-lang` > device language.
  vCard built by `scripts/card/vcard.js` (served at `/card/Mahmoud-Elsharawy.vcf`).
- Contact form: `src/components/Contact.jsx` → `api/contact.js` (Vercel
  function: MongoDB `contacts` collection + Resend email from
  `onboarding@resend.dev`). `api/_lib/db.js` shared client.
  `api/keep-alive.js` + weekly cron in `vercel.json` keep the Atlas M0 cluster
  from auto-pausing. The old `portfolio-backend` repo (Render) is unused.
- Scripts (need Chrome via `CHROME_PATH` for Playwright):
  `npm run card:qr` (refuses while the domain is `*.vercel.app`),
  `npm run card:export` (OG image + printed card PDFs/PNGs into `print/`),
  `npm run card:signature` (email signature HTML into `print/`),
  `npm run card:screen` (phone-screen QR image he shows instead of NFC).
  `print/` is gitignored — print files are sent to him directly, not committed.
- Design: `docs/card/DESIGN_HANDOFF.md`, `docs/card/CARD_DESIGN_BRIEF.md`.
  Tokens: bg `#0F172A`, primary `#2B7FFF`, accent `#51A2FF`, fonts Space
  Grotesk / IBM Plex Sans Arabic / Pacifico (ME logo).

## Decisions already made

- English title: "Software Engineer | Full Stack Developer".
  Arabic line: "مصمّم ومطوّر مواقع وتطبيقات الأعمال" (his wording). The Arabic role
  line was dropped as a duplicate: the line under it (card meta and the printed
  card) is just the city "الإسكندرية، مصر". English stays untouched.
- Printed card: dark version. Back CTA "دع موقعك يتحدث عنك" /
  "امسح الرمز للتواصل معي ومشاهدة أعمالي" (formal Arabic, no colloquial copy).
- Navbar: no Home link (logo scrolls to top), no Reviews link.
- Floating WhatsApp button on the portfolio (`src/components/WhatsAppButton.jsx`,
  prefilled message); the scroll-to-top button is stacked above it. Ideas taken
  from sharkclicks.com, done one per PR: 1) WhatsApp button (done), 2) stats
  strip under the hero, 3) a call-to-action band before Contact, 4) "how I
  work" steps + FAQ (with the Arabic site).
- /card badges: 100% Job Success, 5.0 rating, and Rising Talent on its own row
  (`risingTalent` in `src/card/content.js`). Replace Rising Talent with
  Top Rated once Upwork awards it.

- Advisors Platform: the client took advisors.startupkit.io down and he can't
  reach the client. The live link is removed (portfolio shows "Private
  Repository"; the /card tile links to `/#projects`). He is looking for a
  video, screenshots or the code to build a case study / own demo instead.

## Pending (deferred by him, in this order)

1. **Domain** — he wants advice choosing one. After buying: connect it in
   Vercel, change `SITE_URL` in `src/data/site.js`, run `card:qr`,
   `card:export`, `card:signature`, PR, deploy. Don't print cards or lock NFC
   tags before this. Also re-run `card:screen` and send him the new image.
2. **Printed card** — generate the final PDFs after the domain. Still open:
   whether to drop the back subtitle "امسح الرمز للتواصل معي ومشاهدة أعمالي"
   (he dropped the same line from the phone-screen QR; decide at print time).
3. **Full Arabic version of the main site.**
4. **Email from his own domain** (verify the domain in Resend, replace
   `onboarding@resend.dev`).

His own to-dos: delete the Render service; enable "Automatically delete head
branches" and clean old branches; re-paste the new signature in Gmail;
optionally add `CRON_SECRET`; put the `/card` link in Instagram bio and
WhatsApp About.
