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

function App() {
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
