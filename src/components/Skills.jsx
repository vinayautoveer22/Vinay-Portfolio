import { GraduationCap, Check } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

/**
 * Skills Component
 * Skill domains, everyday tools (with logos), and education.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="orb w-[500px] h-[500px] -right-60 top-1/3 bg-accent/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="Tools, platforms &"
          highlight="domain expertise."
          description="Performance tools, AI utilities, and conversion frameworks I use every day."
        />

        {/* Skill domains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {portfolioData.skillGroups.map((group) => (
            <div key={group.title} className="card h-full p-6">
              <span className="chip chip-brand">{group.category}</span>
              <h3 className="mt-4 text-lg font-bold text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-ink-2">
                    <Check size={15} className="text-accent shrink-0" strokeWidth={2.5} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-ink">Tools I use every day</h3>
          <p className="mt-1.5 text-sm text-ink-3">{portfolioData.tools.length} platforms across ads, analytics, AI, and content.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-7">
            {portfolioData.tools.map((tool) => (
              <div key={tool.name} className="card group h-full p-5 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white border border-line flex items-center justify-center shadow-[0_10px_24px_-14px_rgb(15_23_42/0.4)] transition-transform duration-300 group-hover:scale-110">
                  <img src={tool.icon} alt="" width="36" height="36" className="w-9 h-9 object-contain" loading="lazy" />
                </div>
                <div className="mt-3.5 text-sm font-semibold text-ink leading-tight">{tool.name}</div>
                <div className="mt-1 text-[11px] text-ink-3">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="icon-tile w-10 h-10 rounded-xl">
              <GraduationCap size={20} />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
            {portfolioData.education.map((edu) => (
              <div key={edu.qualification} className="card h-full p-6 flex flex-col">
                <span className={`chip self-start ${edu.year === 'Pursuing' ? 'chip-brand' : ''}`}>{edu.year}</span>
                <h4 className="mt-4 text-base font-bold text-ink leading-snug">{edu.qualification}</h4>
                <p className="mt-1.5 text-sm text-ink-3">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}