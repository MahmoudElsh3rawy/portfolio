import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.jpg'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs } from 'react-icons/si'

const sentences = [
  'Full Stack Web Developer',
  'Clean & Scalable Code',
  'React.js & Node.js Expert',
  'On-time Project Delivery',
  'Design & craft beautiful websites',
  'That solve your business problems',
]

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex]
    let timer

    if (!isDeleting) {
      if (displayText.length < currentSentence.length) {
        timer = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length - 1))
        }, 40)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false)
          setSentenceIndex((prev) => (prev + 1) % sentences.length)
        }, 0)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, sentenceIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="flex-1 text-left">
          <div className="mb-4">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Hello our valued customers
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">I'm Mahmoud </span>
            <span className="text-blue-400">Elsharawy</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 min-h-[36px]">
            {displayText}
            <span className="text-blue-400 animate-pulse">|</span>
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            A Web Developer who builds fast, clean, and user-friendly
            applications — from landing pages to full stack platforms.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-bold transition-all hover:scale-105"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500 opacity-30 animate-spin"
              style={{ animationDuration: '20s' }}
            ></div>
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-blue-500">
              <img
                src={profileImg}
                alt="Mahmoud Elsharawy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 left-0 bg-gray-800 border border-blue-500 p-2 rounded-full">
              <FaReact
                className="text-blue-400 text-2xl animate-spin"
                style={{ animationDuration: '8s' }}
              />
            </div>
            <div className="absolute top-1/2 -right-8 bg-gray-800 border border-white p-2 rounded-full">
              <SiNextdotjs className="text-white text-2xl" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-gray-800 border border-green-500 p-2 rounded-full">
              <FaNodeJs className="text-green-400 text-2xl" />
            </div>
            <div className="absolute -top-2 right-0 bg-gray-800 border border-green-700 p-2 rounded-full">
              <SiMongodb className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
