function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400">
          © 2026 Mahmoud Elsharawy. All rights reserved.
        </p>
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
            href="https://www.linkedin.com/in/mahmoud-elsharawy-dev/"
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
    </footer>
  )
}

export default Footer
