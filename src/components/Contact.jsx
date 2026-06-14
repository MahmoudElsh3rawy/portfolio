function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Contact Me
        </h2>
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
