# 💼 Personal Portfolio — Mahmoud Elsharawy

A modern, responsive personal portfolio website built with React.js and Vite.

🔗 Live Demo: https://mahmoudelsharawy.vercel.app

## ✨ Sections

- 🏠 Hero — Introduction and call to action
- 👤 About — Background and personal info
- 🛠️ Skills — Tech stack and tools
- 💼 Projects — Featured work and case studies
- ⭐ Testimonials — Client reviews from Upwork
- 🔧 Services — What I offer
- 📋 Experience — Work history & education
- 🔗 Profiles — GitHub, Upwork, LinkedIn & problem-solving profiles
- 📬 Contact — Get in touch form
- 🪪 `/card` — Bilingual digital business card

## 🛠️ Tech Stack

- React.js
- Vite
- Tailwind CSS
- AOS Animations
- React Icons
- Vercel Web Analytics
- Vercel Serverless Function (`api/contact.js`, contact form API)
- MongoDB Atlas (stores messages)
- Resend (emails new messages)
- GitHub Actions (CI: lint & build on every PR)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The contact form posts to `/api/contact`, a Vercel function that needs `MONGODB_URI` and `RESEND_API_KEY` (set them in Vercel → Settings → Environment Variables). A weekly Vercel Cron calls `/api/keep-alive` so MongoDB Atlas doesn't pause the free cluster for inactivity (set `CRON_SECRET` to protect it). `npm run dev` doesn't run functions: use `npx vercel dev`, or set `VITE_API_URL` in `.env` to a deployed site. See `.env.example`.

## 🪪 Digital Business Card (`/card`)

A bilingual (Arabic RTL / English LTR) link-in-bio page with a **Save Contact** (.vcf) button, WhatsApp, email, selected work and links. It's a separate Vite page (`card/index.html`) so it has its own link-preview tags.

- **Site URL:** set once in `src/data/site.js`. Meta tags, sitemap, vCard, QR, printed card and email signature all read it.
- **Profile data:** `src/data/profile.js`; card copy and projects: `src/card/content.js`.
- **Design brief and handoff:** `docs/card/`.

| Command | Output |
|---|---|
| `npm run card:qr` | `print/qr/card-qr.svg` + `.png` (refuses to run until a custom domain is set) |
| `npm run card:export` | `public/og-card.jpg` and the printed card PDFs/PNGs in `print/` (85 × 55 mm + 3 mm bleed). The back stays `card-back-DRAFT` until the QR exists |
| `npm run card:signature` | `print/email-signature.html` |

`card:export` needs Google Chrome; set `CHROME_PATH` to use another Chrome/Chromium binary. The `print/` folder is generated and not committed.

**After buying the domain:** update `SITE_URL` in `src/data/site.js` → `npm run card:qr` → `npm run card:export` → `npm run card:signature` → commit and deploy.

## 📸 Preview

![Portfolio Preview](https://i.postimg.cc/3xRhdQdM/1.jpg)

## 📬 Contact

- LinkedIn: https://www.linkedin.com/in/mahmoud-elsharawy-dev
- Email: mahmoudelsharawy92@gmail.com
