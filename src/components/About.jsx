function About() {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              I build things for the web — and I build them right.
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all">
              <span className="text-4xl font-bold gradient-text">3+</span>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all">
              <span className="text-4xl font-bold gradient-text">5+</span>
              <p className="text-gray-400 mt-2">Projects Completed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all">
              <span className="text-4xl font-bold gradient-text">3+</span>
              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              See My Work
            </a>

            <a
              href="/MahmoudElsharawyCV.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
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
