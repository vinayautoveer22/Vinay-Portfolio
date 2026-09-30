import { Clapperboard, Target, TrendingUp } from 'lucide-react'
import SectionHeader from './SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Set the campaign goal',
    description: 'Align the audience, offer, and conversion action with what the business needs to achieve.',
    icon: Target,
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Build and test creative',
    description: 'Develop clear hooks, formats, and calls to action, then test variations against the same objective.',
    icon: Clapperboard,
    tone: 'violet',
  },
  {
    number: '03',
    title: 'Review and refine',
    description: 'Use available campaign data—such as leads, CTR, and cost per result—to guide the next changes.',
    icon: TrendingUp,
    tone: 'cyan',
  },
]

export default function CampaignProcess() {
  return (
    <section className="campaign-process relative py-20 lg:py-24" aria-label="How I work">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How I Work"
          title="A clear process from"
          highlight="brief to campaign."
          description="A practical workflow for planning, creating, and improving paid campaigns using clear goals and measurable signals."
        />

        <div className="campaign-process-grid mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {steps.map(({ number, title, description, icon: Icon, tone }) => (
            <article className={`campaign-step campaign-step-${tone} card p-6 sm:p-7`} key={number}>
              <div className="flex items-center justify-between">
                <span className="campaign-step-icon"><Icon size={19} /></span>
                <span className="campaign-step-number">{number}</span>
              </div>
              <h3 className="mt-7 text-lg sm:text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-2">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
