import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const badges = [
  { label: '100% Job Success', color: 'text-green-400', bg: 'bg-green-500/10' },
  { label: 'Rising Talent', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: '5.0 Client Rating', color: 'text-orange-400', bg: 'bg-orange-500/10' },
]

const testimonials = [
  {
    project: 'Full-Stack Newsletter Signup Feature',
    tech: 'React · Node.js · MongoDB',
    date: 'Jul 2026',
    quote:
      'Mahmoud delivered a complete full-stack solution - React form, backend API, and database all working together smoothly. The code was clean and well-documented.',
  },
  {
    project: 'Responsive Layout Fixes for a React SaaS Landing Page',
    tech: 'React · Tailwind CSS',
    date: 'Jul 2026',
    quote:
      'Mahmoud quickly addressed all the responsiveness issues and delivered a clean, well-implemented solution.',
  },
  {
    project: 'Pricing Section Component for a React SaaS Landing Page',
    tech: 'React · Tailwind CSS',
    date: 'Jul 2026',
    quote:
      'Mahmoud did an excellent job delivering the Pricing Section component exactly as requested. The code was clean, well-structured, and easy to customize.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">What Clients Say</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Verified reviews from my clients on Upwork
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`${badge.bg} ${badge.color} text-sm font-medium px-4 py-2 rounded-full border border-white/10`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <figure
              key={item.project}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex gap-1 text-orange-400"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-500/30 text-2xl" />
              </div>
              <blockquote className="text-gray-300 leading-relaxed flex-1">
                “{item.quote}”
              </blockquote>
              <figcaption className="border-t border-white/10 pt-4">
                <p className="text-white font-medium text-sm">{item.project}</p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <SiUpwork className="text-green-400" />
                  Upwork client · {item.date} · {item.tech}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.upwork.com/freelancers/mahmoudelsharawy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            <FaExternalLinkAlt className="text-sm" />
            View my Upwork profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
