import { useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'
import Services from './components/Services'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'

// The sections are rendered by React, so the browser can't jump to a #section
// in the URL (e.g. /#projects from the /card page) on its own. Scroll once
// they're on the page, then again after images load in case the layout
// shifted, unless the visitor has already scrolled away.
function useScrollToHashOnLoad() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    let landedAt = null
    const scrollToHash = () => {
      const target = document.getElementById(id)
      if (!target) return
      if (landedAt !== null && Math.abs(window.scrollY - landedAt) > 2) return
      target.scrollIntoView()
      landedAt = window.scrollY
    }
    scrollToHash()
    if (document.readyState === 'complete') return
    window.addEventListener('load', scrollToHash, { once: true })
    return () => window.removeEventListener('load', scrollToHash)
  }, [])
}

function App() {
  useScrollToHashOnLoad()

  return (
    <div>
      <Navbar />
      <main>
        <div className="relative">
          <Hero />
          <ScrollArrow />
        </div>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Services />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
