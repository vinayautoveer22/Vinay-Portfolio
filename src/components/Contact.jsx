import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, Send } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

/**
 * Contact Component
 * Quick-contact cards on the left; an inquiry form that opens WhatsApp with a pre-filled message.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Performance Marketing',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const whatsappDirect = `https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    formData.name
      ? `Hi Akshay, my name is ${formData.name}. I am interested in ${formData.service}. Message: ${formData.message}`
      : portfolioData.contact.whatsappMessage
  )}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.open(whatsappDirect, '_blank')
  }

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value })

  const contactCards = [
    {
      href: whatsappDirect,
      external: true,
      icon: <WhatsAppIcon size={22} color="#ffffff" />,
      iconClass: '!bg-none !bg-[#25d366] !border-[#25d366] text-white',
      label: 'Fastest response',
      value: 'Chat on WhatsApp',
      hint: portfolioData.contact.displayPhone,
    },
    {
      href: `tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}`,
      icon: <Phone size={20} />,
      label: 'Call directly',
      value: portfolioData.contact.displayPhone,
      hint: 'Mon – Sat, 10 AM – 7 PM IST',
    },
    {
      href: `mailto:${portfolioData.contact.email}`,
      icon: <Mail size={20} />,
      label: 'Email',
      value: portfolioData.contact.email,
      hint: 'Reply within 24 hours',
    },
  ]

  const labelClass = 'block text-sm font-medium text-ink mb-1.5'

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="orb w-[520px] h-[520px] left-1/3 top-1/4 bg-brand-500/12" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to grow your"
          highlight="leads & ROI?"
          description="Available for performance campaigns, consulting, and brand work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-16">
          {/* Contact cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card card-interactive group p-5 flex items-center gap-4"
              >
                <span className={`icon-tile w-12 h-12 ${c.iconClass || ''}`}>{c.icon}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs font-medium text-ink-3">{c.label}</span>
                  <span className="block mt-0.5 text-base font-semibold text-ink break-all">{c.value}</span>
                  <span className="block mt-0.5 text-xs text-ink-3">{c.hint}</span>
                </span>
                <ArrowUpRight size={18} className="text-ink-3 shrink-0 transition-all group-hover:text-brand-600 group-hover:rotate-45" />
              </a>
            ))}

            <div className="glass p-5 flex items-center gap-4">
              <span className="icon-tile w-12 h-12">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs font-medium text-ink-3">Based in</span>
                <span className="block mt-0.5 text-base font-semibold text-ink">{portfolioData.contact.location}</span>
                <span className="block mt-0.5 text-xs text-ink-3">Available remotely worldwide</span>
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 glass ring-gradient rounded-[28px] p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-ink">Send a message</h3>
            <p className="mt-1.5 text-sm text-ink-3">
              Share a few details and the conversation opens on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-name" className={labelClass}>Your name</label>
                  <input id="c-name" type="text" required placeholder="Rahul Sharma" value={formData.name} onChange={update('name')} className="field" />
                </div>
                <div>
                  <label htmlFor="c-phone" className={labelClass}>Phone / WhatsApp</label>
                  <input id="c-phone" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={update('phone')} className="field" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-email" className={labelClass}>Email</label>
                  <input id="c-email" type="email" required placeholder="name@company.com" value={formData.email} onChange={update('email')} className="field" />
                </div>
                <div>
                  <label htmlFor="c-service" className={labelClass}>Service</label>
                  <select id="c-service" value={formData.service} onChange={update('service')} className="field">
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Content & Reels">Content & Reels</option>
                    <option value="WordPress & Landing Pages">WordPress & Landing Pages</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className={labelClass}>Project details</label>
                <textarea
                  id="c-message"
                  rows={4}
                  required
                  placeholder="Tell me about your brand, current challenges, and goals..."
                  value={formData.message}
                  onChange={update('message')}
                  className="field resize-y"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full py-4">
                <Send size={16} />
                <span>Send via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Opening WhatsApp with your message…</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
