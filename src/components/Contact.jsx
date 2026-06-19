import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message"
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
            {status === 'success' && (
              <p className="text-green-400">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400">Something went wrong. Try again.</p>
            )}
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
