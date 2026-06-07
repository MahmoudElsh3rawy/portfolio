function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center text-6xl flex-shrink-0">
            👨‍💻
          </div>
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Full Stack Developer with 3+ years of experience building
              web applications using React.js, Node.js, and MongoDB. I'm
              passionate about writing clean code and creating seamless user
              experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in Alexandria, Egypt. Available for freelance work and open
              to new opportunities.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <span className="text-3xl font-bold text-blue-400">3+</span>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-blue-400">10+</span>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-blue-400">5+</span>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
