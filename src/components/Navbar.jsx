import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact', special: true },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    )

    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span
            className="text-blue-400 text-3xl"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            ME
          </span>
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-all font-medium ${
                  link.special
                    ? 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition-all'
                    : activeSection === link.id
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-300 hover:text-white text-2xl p-1"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul
        className={`md:hidden flex flex-col gap-1 px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 py-4 border-t border-gray-800' : 'max-h-0'
        }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition-all font-medium ${
                link.special
                  ? 'border border-blue-500 text-blue-400 px-4 rounded-lg w-fit mt-2'
                  : activeSection === link.id
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
