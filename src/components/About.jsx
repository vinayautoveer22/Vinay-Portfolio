import { Target, Film, Globe, Check, MapPin } from 'lucide-react'
import SectionHeader from './SectionHeader'

/**
 * About Component
 * Short bio with key strengths on the left, three focus-area cards on the right.
 */
export default function About() {
  const pillars = [
    {
      title: 'Performance & Paid Advertising',
      category: 'Paid Media',
      description: 'Executing Meta Ads and Google Ads campaigns tailored for maximum CTR, minimal CPC, and consistent lead pipelines.',
      icon: Target,
    },
    {
      title: 'AI Creatives & Short Video',
      category: 'Content',
      description: 'Creating AI-powered visuals and editing engaging Instagram Reels with CapCut that capture attention and build authority.',
      icon: Film,
    },
    {
      title: 'Websites & Landing Pages',
      category: 'CRO & Web',
      description: 'Building and maintaining responsive WordPress websites and product landing pages optimized for fast loading and sales conversions.',
      icon: Globe,
    },
  ]

  const highlights = [
    '2+ years of hands-on digital & performance marketing experience',
    'Specialized in automotive dealership campaigns (Nissan, Bajaj, Leyland)',
    'End-to-end multi-brand social media calendar planning & publishing',
    'AI tool mastery: ChatGPT, Claude, Gemini, and AI video generators',
    'Conversion tracking, lead generation funnels, and reporting',
  ]

  const numbers = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Brands Managed' },
    { value: '100+', label: 'Creatives Made' },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Building campaigns,"
          highlight="content & digital experiences that perform."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-16">
          {/* Bio */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
              Helping brands grow through
              <span className="text-gradient"> performance marketing, creative content,</span> and practical digital strategies.
            </h3>

            <div className="mt-4 inline-flex items-center gap-1.5 chip">
              <MapPin size={13} className="text-accent" />
              Delhi, India
            </div>

            <p className="mt-6 text-lg text-ink-2 leading-relaxed">
              From Meta Ads and Google Ads to AI creatives, websites and lead generation, I build marketing systems that
              combine creativity, strategy and measurable results.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
              {numbers.map((n) => (
                <div key={n.label} className="card p-4 sm:p-5 text-center">
                  <div className="text-3xl font-extrabold font-display text-gradient">{n.value}</div>
                  <p className="text-xs sm:text-sm text-ink-2 mt-1">{n.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-ink-2 text-base leading-relaxed">
              Having managed digital strategies for dealerships like <strong className="text-ink font-semibold">BA Nissan</strong>,{' '}
              <strong className="text-ink font-semibold">AutoVeer Group</strong>,{' '}
              <strong className="text-ink font-semibold">Choudhary Tractor</strong>, and{' '}
              <strong className="text-ink font-semibold">Ashok Leyland</strong>, I understand how to bridge paid advertising with
              organic community trust.
            </p>

            <div className="mt-8 glass p-6 sm:p-7">
              <div className="text-sm font-semibold text-ink mb-4">Key strengths</div>
              <ul className="space-y-3.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full brand-mark flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink-2 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Focus areas */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="card p-6 sm:p-7 flex gap-5">
                  <span className="icon-tile w-12 h-12">
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="chip chip-brand">{pillar.category}</span>
                      <span className="text-xs font-bold text-ink-3 tabular-nums">0{i + 1}</span>
                    </div>
                    <h4 className="mt-3 text-lg sm:text-xl font-bold text-ink">{pillar.title}</h4>
                    <p className="mt-2 text-sm text-ink-2 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}