function About() {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              From idea to deployment — I build it all.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a Full Stack Developer with 3+ years of experience turning
              ideas into fast, scalable web applications. I work across the
              entire stack — building pixel-perfect UIs with React.js and robust
              APIs with Node.js and MongoDB.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked with international clients on Upwork, delivering
              projects on time and with clean, maintainable code. If you need
              someone who takes ownership and communicates clearly — let's work
              together.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 text-center"
            >
              See My Work
            </a>

            <a
              href="/MahmoudElsharawyCV.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
