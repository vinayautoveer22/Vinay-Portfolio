import { useState } from 'react'
import { Briefcase, Check, ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

/**
 * Experience Component
 * Company selector on the left, responsibilities for the selected role on the right.
 */
export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)
  const currentExp = portfolioData.experience[activeIdx]

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Work experience &"
          highlight="proven execution."
          description="2+ years delivering results across performance marketing, content, and paid media."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-16">
          {/* Company list */}
          <div className="lg:col-span-4 flex flex-col gap-3" role="tablist" aria-label="Companies">
            {portfolioData.experience.map((exp, index) => {
              const isActive = activeIdx === index
              return (
                <button
                  key={exp.company}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(index)}
                  className={`card experience-tab card-interactive text-left p-4 flex items-center gap-4 ${isActive ? 'card-active' : ''}`}
                >
                  <span
                    className={`experience-initials w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold font-display ${
                      isActive ? 'brand-mark' : 'bg-white/70 text-ink-2 border border-line'
                    }`}
                  >
                    {exp.company.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-ink truncate">{exp.company}</span>
                    <span className="block text-xs text-ink-3 mt-0.5 truncate">{exp.role}</span>
                  </span>
                  <ChevronRight size={18} className={`shrink-0 transition-transform ${isActive ? 'text-brand-600 translate-x-0.5' : 'text-ink-3'}`} />
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div key={activeIdx} className="lg:col-span-8 glass ring-gradient rounded-[28px] p-6 sm:p-10 fade-up" role="tabpanel">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-line">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                  <Briefcase size={15} />
                  <span>{currentExp.role}</span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">{currentExp.company}</h3>
              </div>
              <span className="chip chip-brand self-start text-xs px-3 py-1.5">{currentExp.period}</span>
            </div>

            <ul className="mt-7 space-y-4">
              {currentExp.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-3.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <p className="text-ink-2 text-sm sm:text-base leading-relaxed">{resp}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
