import { useState, useEffect } from 'react'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Mahmoud Elsharawy'

  useEffect(() => {
    const startTyping = () => {
      setDisplayText('')
      let index = 0
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 100)
    }

    startTyping()
    const repeatTimer = setInterval(startTyping, 5000)

    return () => clearInterval(repeatTimer)
  }, [])

  const firstPart = displayText.slice(0, 7)
  const secondPart = displayText.slice(7)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <div className="mb-6">
          <span className="text-blue-400 text-lg font-medium tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight min-h-[80px]">
          <span className="text-white">{firstPart}</span>
          <span className="text-blue-400">{secondPart}</span>
          <span className="text-blue-400 animate-pulse">|</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Specializing in React.js & Node.js — Building modern web applications
          that make a difference.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
