import profileImg from '../assets/profile.jpg'

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="relative flex-shrink-0 self-start mt-8">
            <div className="w-72 h-80 rounded-2xl overflow-hidden border-2 border-blue-500">
              <img
                src={profileImg}
                alt="Mahmoud Elsharawy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              I build things for the web — and I build them right.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Full Stack Developer with 3+ years of experience turning
              ideas into fast, scalable web applications. I work across the
              entire stack — building pixel-perfect UIs with React.js and robust
              APIs with Node.js and MongoDB.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I've worked with international clients on Upwork, delivering
              projects on time and with clean, maintainable code. If you need
              someone who takes ownership and communicates clearly — let's work
              together.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-400">3+</span>
                <p className="text-gray-400 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-400">10+</span>
                <p className="text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-400">5+</span>
                <p className="text-gray-400 mt-1">Happy Clients</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 inline-block"
              >
                See My Work →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
