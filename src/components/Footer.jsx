import { portfolioData } from '../data/portfolioData'

/**
 * Footer Component
 * Closing call to action, brand blurb, sitemap, and direct contact details.
 */
export default function Footer() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Creatives', href: '#ai-creative' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const initials = portfolioData.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <footer className="relative px-3 sm:px-5 pb-5">
      <div className="max-w-7xl mx-auto glass ring-gradient rounded-[32px] overflow-hidden px-6 sm:px-10 lg:px-12 pt-14 pb-8">
        <div className="orb w-[420px] h-[420px] -top-40 -right-24 bg-brand-400/20" />
        <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full brand-mark flex items-center justify-center text-sm font-bold font-display">
                {initials}
              </span>
              <span className="text-lg font-bold text-ink font-display">{portfolioData.name}</span>
            </div>
            <p className="mt-4 text-sm text-ink-2 leading-relaxed max-w-sm">
              {portfolioData.title}. Meta Ads, Google Ads, automotive dealership campaigns, and AI creative production.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-ink">Navigate</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink-2 hover:text-brand-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-ink">Get in touch</h4>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-xs text-ink-3">Phone</dt>
                <dd className="mt-0.5">
                  <a href={`tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-ink hover:underline">
                    {portfolioData.contact.displayPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-ink-3">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${portfolioData.contact.email}`} className="font-medium text-ink hover:underline break-all">
                    {portfolioData.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-ink-3">Location</dt>
                <dd className="mt-0.5 font-medium text-ink">{portfolioData.contact.location}</dd>
              </div>
            </dl>
            <a
              href="https://www.linkedin.com/in/vinay-kumar-657440308/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Vinay Kumar on LinkedIn"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-brand-400"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-3">
          <span>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</span>
          <span>Digital Marketing · Performance · AI Creative</span>
        </div>
        </div>
      </div>
    </footer>
  )
}
