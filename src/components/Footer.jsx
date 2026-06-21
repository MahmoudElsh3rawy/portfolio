function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl">Mahmoud Elsharawy</p>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>
          <p className="text-gray-500 text-sm italic">
            A developer who adapts, learns, and delivers — whatever the stack.
          </p>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Mahmoud Elsharawy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
