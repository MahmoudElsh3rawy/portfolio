function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Mahmoud Elsharawy
        </h1>
        <h2 className="text-2xl text-blue-400 mb-6">Full Stack Developer</h2>
        <p className="text-gray-400 text-lg">
          Specializing in React.js & Node.js
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
