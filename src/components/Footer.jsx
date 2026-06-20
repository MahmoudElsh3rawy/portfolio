function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">Mahmoud Elsharawy</p>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/MahmoudElsh3rawy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mahmoud-elsharawy-dev"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://www.upwork.com/freelancers/mahmoudelsharawy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Upwork
            </a>

            <a
              href="mailto:mahmoudelsharawy92@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Mahmoud Elsharawy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
