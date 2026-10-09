import WhatsAppIcon from './WhatsAppIcon'
import { portfolioData } from '../data/portfolioData'

/**
 * Floating WhatsApp Button Component
 * Fixed at the bottom-right; expands to show a label on larger screens.
 */
export default function WhatsAppButton() {
  const cleanPhone = portfolioData.contact.phone.replace(/[^0-9]/g, '')
  const message = encodeURIComponent(portfolioData.contact.whatsappMessage)
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Akshay on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 z-40 flex items-center gap-3 p-2 sm:pr-5 rounded-full text-ink backdrop-blur-2xl border shadow-[0_18px_40px_-16px_rgb(0_0_0/0.65)] hover:border-[#25d366]/50 transition-colors"
    >
      <span className="relative w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center shrink-0">
        <WhatsAppIcon size={22} color="#ffffff" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] ring-2 ring-white" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-sm font-semibold">Chat with me</span>
        <span className="text-[11px] font-medium text-ink-3">Usually replies fast</span>
      </span>
    </a>
  )
}
