import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { portfolioData } from '../data/portfolioData'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Creatives', href: '#ai-creative' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

/**
 * Navbar Component
 * Floating glass pill; the link for the section in view is highlighted.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Track the most recently entered section; campaign results belong to Work.
  useEffect(() => {
    const sections = [
      { id: 'about', href: '#about' },
      { id: 'services', href: '#services' },
      { id: 'projects', href: '#projects' },
      { id: 'campaign-results', href: '#projects' },
      { id: 'freelance', href: '#freelance' },
      { id: 'ai-creative', href: '#ai-creative' },
      { id: 'experience', href: '#experience' },
      { id: 'skills', href: '#skills' },
      { id: 'contact', href: '#contact' },
    ]

    const updateActiveSection = () => {
      const activationLine = window.scrollY + Math.min(200, window.innerHeight * 0.28)
      const currentSection = sections
        .map((section) => ({ ...section, top: document.getElementById(section.id)?.getBoundingClientRect().top + window.scrollY }))
        .filter((section) => Number.isFinite(section.top) && section.top <= activationLine)
        .sort((a, b) => b.top - a.top)[0]

      setActive(currentSection?.href || '')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(portfolioData.contact.whatsappMessage)}`

  const initials = portfolioData.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] lg:w-max max-w-[calc(100%-2.5rem)]">
      <div
        className={`w-full rounded-full border transition-all duration-300 backdrop-blur-2xl backdrop-saturate-150 ${
          scrolled || isOpen
            ? 'bg-white/60 border-white/80 shadow-[inset_1px_1px_0_#fff,0_20px_50px_-24px_rgb(59_110_246/0.35)]'
            : 'bg-white/35 border-white/60'
        }`}
      >
        <div className="h-[60px] pl-3 pr-2 sm:pl-4 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <span className="w-9 h-9 rounded-full brand-mark flex items-center justify-center text-sm font-bold font-display">
              {initials}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-ink font-display whitespace-nowrap">{portfolioData.name}</span>
              <span className="text-[11px] font-medium text-ink-3 whitespace-nowrap hidden sm:block">Performance Marketer</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/50 border border-line">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  active === link.href ? 'text-brand-700 bg-white shadow-[0_4px_12px_-6px_rgb(15_23_42/0.3)]' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass w-11 h-11 p-0"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={18} color="#25D366" />
            </a>
            <a href="#contact" className="btn btn-primary py-2.5">
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden arrow-btn w-11 h-11"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass glass-strong rounded-3xl p-3 fade-in">
          <nav className="flex flex-col">
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-medium ${
                  active === link.href ? 'text-brand-700 bg-brand-50' : 'text-ink-2 hover:bg-white/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-3 pt-3 mt-2 border-t border-line">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn btn-glass"
            >
              <WhatsAppIcon size={18} color="#25D366" />
              <span>WhatsApp</span>
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary">
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

