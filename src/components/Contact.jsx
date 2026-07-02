import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

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
    <section id="contact" className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Have a project in mind? Let's talk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card - Contact Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm">
                Reach out to me through any of these channels
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* Email */}

              <a
                href="mailto:mahmoudelsharawy92@gmail.com"
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <FaEnvelope className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">
                      mahmoudelsharawy92@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone 1 */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <FaPhone className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Primary</p>
                    <p className="text-white text-sm font-medium">
                      +201157229382
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/201157229382"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  WhatsApp
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <FaPhone className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Secondary</p>
                    <p className="text-white text-sm font-medium">
                      +201226034294
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/201226034294"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white text-sm font-medium">
                    Alexandria, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              I'll get back to you as soon as possible
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-blue-500 focus:outline-none"
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
                  className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-blue-500 focus:outline-none resize-none"
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
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-3 rounded-lg transition-all"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
