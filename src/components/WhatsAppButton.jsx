import { FaWhatsapp } from 'react-icons/fa'
import { whatsappUrl } from '../data/profile.js'

const MESSAGE = "Hi Mahmoud, I saw your portfolio and I'd like to talk about a project"

// Floating WhatsApp button, visible on every part of the page. The scroll-to-top
// button (ScrollArrow) sits right above it.
function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 size-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white flex items-center justify-center shadow-lg shadow-black/30 transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
    >
      <FaWhatsapp className="text-[30px]" aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
