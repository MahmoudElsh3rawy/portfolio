import { useEffect, useRef, useState } from 'react'
import {
  FaAddressCard,
  FaArrowTrendUp,
  FaChevronRight,
  FaCircleCheck,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaStar,
  FaUpwork,
  FaWhatsapp,
} from 'react-icons/fa6'
import profileImg from '../assets/profile.webp'
import { profile, whatsappUrl } from '../data/profile.js'
import { SITE_URL, VCARD_PATH } from '../data/site.js'
import { projects, strings } from './content.js'

const links = [
  { label: 'Upwork', icon: FaUpwork, href: profile.links.upwork },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: profile.links.linkedin },
  { label: 'GitHub', icon: FaGithub, href: profile.links.github },
  { label: 'portfolio', icon: FaGlobe, href: `${SITE_URL}/` },
]

const external = { target: '_blank', rel: 'noopener noreferrer' }

// iOS shows its native "Add Contact" sheet when the .vcf is opened directly;
// everywhere else a forced download keeps the visitor on the page.
const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

// The initial language is set on <html> by an inline script in card/index.html
const initialLang = () => (document.documentElement.lang === 'ar' ? 'ar' : 'en')

function applyLang(lang) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  try {
    localStorage.setItem('card-lang', lang)
  } catch {
    // Private mode or blocked storage: the toggle still works for this visit
  }
  const url = new URL(window.location.href)
  if (url.searchParams.has('lang')) {
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-0.5 w-fit text-[1.125em] font-bold leading-[1.4] gradient-text">
      {children}
    </h2>
  )
}

function CardPage() {
  const [lang, setLang] = useState(initialLang)
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimer = useRef()
  const t = strings[lang]
  const isArabic = lang === 'ar'

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const toggleLang = () => {
    const next = isArabic ? 'en' : 'ar'
    applyLang(next)
    setLang(next)
  }

  const showToast = () => {
    if (isIOS) return
    clearTimeout(toastTimer.current)
    setToastVisible(true)
    toastTimer.current = setTimeout(() => setToastVisible(false), 2800)
  }

  return (
    <div
      className={`min-h-screen font-card text-gray-300 px-5 pt-3 pb-8 md:px-6 md:py-14 ${
        isArabic ? 'text-[17px] leading-[1.7]' : 'text-[16px] leading-[1.6]'
      }`}
    >
      <main className="mx-auto flex max-w-[440px] flex-col gap-7">
        {/* Top row */}
        <div className="flex h-12 items-center justify-between">
          <span dir="ltr" className="px-0.5 font-logo text-[22px] leading-none text-blue-400">
            ME
          </span>
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.toggleLabel}
            lang={isArabic ? 'en' : 'ar'}
            className="flex h-12 min-w-14 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-[18px] font-arabic text-[15px] font-medium text-white transition-colors duration-150 hover:border-blue-500/50 hover:bg-white/10 active:border-blue-500 active:bg-blue-500/20 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue-400"
          >
            {t.toggle}
          </button>
        </div>

        {/* Profile */}
        <header className="-mt-2 flex flex-col items-center text-center">
          <div className="mb-5 flex size-[138px] items-center justify-center rounded-full border border-dashed border-blue-400/40">
            <div className="size-[122px] rounded-full border-2 border-blue-500 p-[3px]">
              <img
                src={profileImg}
                alt={t.name}
                width="112"
                height="112"
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-[1.625em] font-bold leading-[1.25] text-white">{t.name}</h1>
          <p className="mt-2 max-w-[320px] text-balance">{t.tagline}</p>
          <p className="mt-1 text-[0.8125em] text-gray-400">{t.meta}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              { icon: FaUpwork, iconClass: 'text-[13px] text-blue-400', label: t.jobSuccess },
              { icon: FaStar, iconClass: 'text-[11px] text-orange-400', label: t.rating },
              { icon: FaArrowTrendUp, iconClass: 'text-[12px] text-blue-400', label: t.risingTalent },
            ].map(({ icon: Icon, iconClass, label }) => (
              <span
                key={label}
                className="flex h-[30px] items-center gap-[7px] rounded-full border border-white/10 bg-white/5 px-3 text-[0.8125em]"
              >
                <Icon className={iconClass} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* Primary actions */}
        <div className="flex flex-col gap-3">
          <a
            href={VCARD_PATH}
            download={isIOS ? undefined : 'Mahmoud-Elsharawy.vcf'}
            onClick={showToast}
            className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-blue-500 font-medium text-white transition-[background-color,scale] duration-150 hover:bg-blue-600 active:scale-[.985] active:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue-400"
          >
            <FaAddressCard className="text-[20px]" aria-hidden="true" />
            {t.save}
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={whatsappUrl(t.whatsappMessage)}
              {...external}
              className="flex h-13 items-center justify-center gap-[9px] rounded-xl border border-green-500/40 bg-green-500/20 text-[0.9375em] font-medium text-green-400 transition-colors duration-150 hover:bg-green-500/30 active:bg-green-500 active:text-[#0f172a] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue-400"
            >
              <FaWhatsapp className="text-[21px]" aria-hidden="true" />
              {t.whatsapp}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-13 items-center justify-center gap-[9px] rounded-xl border border-blue-500 text-[0.9375em] font-medium text-blue-400 transition-colors duration-150 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue-400"
            >
              <FaEnvelope className="text-[18px]" aria-hidden="true" />
              {t.email}
            </a>
          </div>
        </div>

        {/* Selected work */}
        <section className="mt-2 flex flex-col gap-3">
          <SectionTitle>{t.work}</SectionTitle>
          {projects.map((project) => (
            <article
              key={project.title.en}
              className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-3 pt-3"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-white">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="250"
                  className={`size-full object-cover ${project.imagePosition}`}
                />
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-[1em] font-bold leading-[1.4] text-white">
                  {project.title[lang]}
                </h3>
                <p className="text-[0.875em] text-pretty text-gray-400">
                  {project.description[lang]}
                </p>
              </div>
              <a
                href={project.url ?? `${SITE_URL}/#projects`}
                {...(project.url ? external : {})}
                className="-mx-3 flex h-12 items-center justify-between gap-3 border-t border-white/10 px-4 text-[0.875em] font-medium text-blue-400 transition-colors duration-150 hover:bg-white/5 hover:text-[#60a5fa]"
              >
                <span className="flex items-center gap-1.5">
                  {project.url ? t.visit : t.details}
                  <span aria-hidden="true">{t.visitArrow}</span>
                </span>
                {project.url && (
                  <span dir="ltr" className="text-[0.92em] font-normal text-gray-400">
                    {new URL(project.url).hostname}
                  </span>
                )}
              </a>
            </article>
          ))}
        </section>

        {/* Links */}
        <section className="mt-2 flex flex-col gap-2">
          <div className="mb-1">
            <SectionTitle>{t.links}</SectionTitle>
          </div>
          {links.map(({ label, icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              {...external}
              className="flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 text-white transition-colors duration-150 hover:border-blue-500/50 hover:bg-white/10 active:border-blue-500"
            >
              <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-blue-500/20 text-blue-400">
                <Icon className="text-[17px]" aria-hidden="true" />
              </span>
              <span className="flex-1 text-[0.9375em] font-medium">
                {label === 'portfolio' ? t.portfolio : label}
              </span>
              <FaChevronRight
                className="text-[13px] text-gray-400 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </section>

        <footer className="flex flex-col items-center gap-1.5 pt-3 pb-1">
          <span dir="ltr" className="font-logo text-[16px] leading-[1.2] text-blue-400">
            ME
          </span>
          <span className="text-[0.75em] text-gray-400">
            © {new Date().getFullYear()} {t.name}
          </span>
        </footer>
      </main>

      <div role="status" aria-live="polite">
        {toastVisible && (
          <div className="fixed top-[76px] left-1/2 z-10 flex w-[calc(100%-40px)] max-w-[400px] -translate-x-1/2 items-center gap-3 rounded-xl border border-white/10 bg-gray-900/96 px-4 py-3.5 text-[0.875em] text-white">
            <FaCircleCheck className="shrink-0 text-[18px] text-green-400" aria-hidden="true" />
            {t.toast}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardPage
