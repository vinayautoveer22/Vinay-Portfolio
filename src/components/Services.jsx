import { Target, Search, Megaphone, Share2, Video, Globe, ArrowUpRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

const iconMap = { Target, Search, Megaphone, Share2, Video, Globe }

/**
 * Services Component
 * Glass service cards with a hover glow, followed by a call to action.
 */
export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="orb w-[480px] h-[480px] -right-52 top-20 bg-violet-500/12" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I Do"
          title="Digital services built"
          highlight="to perform."
          description="From paid advertising and lead generation to creative production, social media and websites — I build digital systems focused on real business outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-16">
          {portfolioData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Target

            return (
              <a key={service.id} href="#contact" className="card group overflow-hidden min-h-[330px] p-7 lg:p-8 flex flex-col">
                {/* Hover glow */}
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-brand-500/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start justify-between">
                  <span className="icon-tile w-14 h-14 rounded-2xl transition-transform duration-500 group-hover:scale-105">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-bold text-ink-3 tracking-widest tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative mt-7">
                  <span className="chip">{service.category}</span>
                  <h3 className="mt-4 text-2xl font-bold text-ink">{service.name}</h3>
                  <p className="mt-3 text-sm text-ink-2 leading-7">{service.description}</p>
                </div>

                <div className="relative mt-auto pt-6 flex items-center justify-between border-t border-line">
                  <span className="text-sm font-semibold text-ink-2 group-hover:text-brand-600 transition-colors">Discuss this service</span>
                  <span className="w-9 h-9 rounded-full border border-line bg-white/70 flex items-center justify-center text-ink-2 transition-all duration-300 group-hover:bg-brand-500 group-hover:border-brand-400 group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
