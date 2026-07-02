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

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Hero />
        <ScrollArrow />
      </div>
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
