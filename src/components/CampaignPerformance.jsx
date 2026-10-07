import { useEffect, useMemo, useRef, useState } from 'react'
import { Activity, BarChart3, MousePointerClick, Target } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

const numberFormat = new Intl.NumberFormat('en-IN')
const moneyFormat = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})

function costContext(campaign) {
  if (campaign.objective === 'Reach') return 'Per 1,000 people reached'
  if (campaign.objective === 'Messaging') return 'Per conversation started'
  if (campaign.objective === 'Calls') return 'Per call placed'
  return 'Per lead'
}

function MetricCard({ label, value, detail, icon: Icon, accent }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-3">{label}</span>
        <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${accent}`}>
          <Icon size={15} />
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold tabular-nums text-ink sm:text-[1.7rem]">{value}</p>
      <p className="mt-1 text-xs text-ink-3">{detail}</p>
    </div>
  )
}

export default function CampaignPerformance() {
  const campaigns = portfolioData.campaignSnapshots || []
  const [selectedId, setSelectedId] = useState('nissan-tekton-lead')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const selected = campaigns.find((campaign) => campaign.id === selectedId) || campaigns[0]
  const leadCampaigns = useMemo(
    () => campaigns
      .filter((campaign) => campaign.objective === 'Lead generation')
      .sort((a, b) => b.results - a.results)
      .slice(0, 6),
    [campaigns]
  )

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setIsVisible(true)
      return undefined
    }

    const element = sectionRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  if (!campaigns.length || !selected) return null

  const otherClicks = Math.max(0, selected.allClicks - selected.linkClicks)
  const linkShare = selected.allClicks ? selected.linkClicks / selected.allClicks : 0
  const maxLeads = Math.max(...leadCampaigns.map((campaign) => campaign.results), 1)

  return (
    <section id="campaign-results" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="orb -left-44 top-32 h-[440px] w-[440px] bg-cyan-500/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Campaign Results"
          title="The numbers behind"
          highlight="the campaigns."
          description="Selected Meta Ads results across automotive, hospitality and hiring campaigns."
        />

        <div className="glass ring-gradient mt-12 overflow-hidden rounded-[30px] p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                <Activity size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Meta Ads campaign snapshots</p>
                <p className="mt-1 text-xs text-ink-3">{campaigns.length} campaigns Â· account results as reported</p>
              </div>
            </div>
            <label className="flex flex-col gap-2 sm:min-w-[280px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3">Explore a campaign</span>
              <select
                value={selectedId}
                onChange={(event) => setSelectedId(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#17191e] px-3.5 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
              >
                {campaigns.map((campaign) => (
                  <option key={campaign.id} value={campaign.id}>{campaign.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div key={selected.id} className="mt-6 fade-up">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${selected.status === 'Active' ? 'bg-emerald-400' : 'bg-slate-400'}`} />
              <span className="text-sm font-semibold text-ink">{selected.name}</span>
              <span className="chip !px-2.5 !py-1 text-[10px]">{selected.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <MetricCard label={selected.resultType} value={numberFormat.format(selected.results)} detail="Reported results" icon={Target} accent="bg-brand-400/10 text-brand-300" />
              <MetricCard label="Reach" value={numberFormat.format(selected.reach)} detail={`Frequency ${selected.frequency.toFixed(2)}`} icon={Activity} accent="bg-cyan-400/10 text-cyan-200" />
              <MetricCard label="Impressions" value={numberFormat.format(selected.impressions)} detail={`${numberFormat.format(selected.linkClicks)} link clicks`} icon={BarChart3} accent="bg-violet-400/10 text-violet-200" />
              <MetricCard label="Cost per result" value={moneyFormat.format(selected.costPerResult)} detail={costContext(selected)} icon={MousePointerClick} accent="bg-amber-400/10 text-amber-200" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-2xl border border-white/[0.08] bg-[#101216]/75 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Lead results by campaign</p>
                  <p className="mt-1 text-xs text-ink-3">Highest reported lead counts Â· select a bar to inspect</p>
                </div>
                <BarChart3 size={18} className="shrink-0 text-cyan-200" />
              </div>
              <div className="mt-6 space-y-4">
                {leadCampaigns.map((campaign, index) => (
                  <button
                    key={campaign.id}
                    type="button"
                    onClick={() => setSelectedId(campaign.id)}
                    className="group block w-full text-left"
                    aria-label={`Inspect ${campaign.name}: ${campaign.results} leads`}
                  >
                    <div className="mb-1.5 flex items-center justify-between gap-4 text-xs">
                      <span className={`truncate transition-colors ${campaign.id === selectedId ? 'text-cyan-200' : 'text-ink-2 group-hover:text-white'}`}>
                        {campaign.name}
                      </span>
                      <span className="shrink-0 font-semibold tabular-nums text-ink">{numberFormat.format(campaign.results)}</span>
                    </div>
                    <span className="block h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
                      <span
                        className={`block h-full rounded-full bg-gradient-to-r from-brand-400 to-cyan-300 transition-[width] duration-[1200ms] ease-out ${campaign.id === selectedId ? 'brightness-125' : ''}`}
                        style={{
                          width: isVisible ? `${Math.max(3, (campaign.results / maxLeads) * 100)}%` : '0%',
                          transitionDelay: `${index * 90}ms`,
                        }}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#101216]/75 p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-ink">Click breakdown</p>
                <p className="mt-1 text-xs text-ink-3">{selected.name}</p>
              </div>
              <div className="my-4 flex flex-1 items-center justify-center">
                <div className="relative h-44 w-44">
                  <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90 overflow-visible">
                    <circle cx="60" cy="60" r="44" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="12" />
                    <circle
                      cx="60" cy="60" r="44" fill="none" stroke="url(#click-share-gradient)" strokeWidth="12" strokeLinecap="round"
                      strokeDasharray={`${isVisible ? 276.46 * linkShare : 0} 276.46`}
                      className="transition-[stroke-dasharray] duration-[1400ms] ease-out"
                    />
                    <defs>
                      <linearGradient id="click-share-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#5b8fff" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold tabular-nums text-ink">{Math.round(linkShare * 100)}%</span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-3">link clicks</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 border-t border-line pt-4">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="flex items-center gap-2 text-ink-2"><i className="h-2.5 w-2.5 rounded-full bg-cyan-300" /> Link clicks</span>
                  <span className="font-semibold tabular-nums text-ink">{numberFormat.format(selected.linkClicks)}</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="flex items-center gap-2 text-ink-2"><i className="h-2.5 w-2.5 rounded-full bg-white/20" /> Other clicks</span>
                  <span className="font-semibold tabular-nums text-ink">{numberFormat.format(otherClicks)}</span>
                </div>
                <p className="pt-1 text-[10px] leading-4 text-ink-3">Other clicks = all clicks minus link clicks, from the supplied report.</p>
              </div>
            </div>
          </div>

          <details className="group mt-5 rounded-2xl border border-white/[0.08] bg-[#101216]/55">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-ink marker:hidden">
              <span>Explore all {campaigns.length} campaign snapshots</span>
              <span className="text-xs font-medium text-cyan-200 transition-transform group-open:rotate-180">âŒ„</span>
            </summary>
            <div className="max-w-full overflow-x-auto border-t border-line">
              <table className="w-full min-w-[760px] text-left text-xs">
                <thead className="text-[10px] uppercase tracking-[0.12em] text-ink-3">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Campaign</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 text-right font-semibold">Results</th>
                    <th className="px-4 py-3 text-right font-semibold">Reach</th>
                    <th className="px-4 py-3 text-right font-semibold">Link clicks</th>
                    <th className="px-5 py-3 text-right font-semibold">Cost / result</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-t border-white/[0.06] transition-colors hover:bg-white/[0.035]">
                      <td className="px-5 py-3.5 font-medium text-ink">{campaign.name}</td>
                      <td className="px-4 py-3.5 text-ink-3">{campaign.status}</td>
                      <td className="px-4 py-3.5 text-right tabular-nums text-ink">{numberFormat.format(campaign.results)} <span className="text-ink-3">{campaign.resultType}</span></td>
                      <td className="px-4 py-3.5 text-right tabular-nums text-ink-2">{numberFormat.format(campaign.reach)}</td>
                      <td className="px-4 py-3.5 text-right tabular-nums text-ink-2">{numberFormat.format(campaign.linkClicks)}</td>
                      <td className="px-5 py-3.5 text-right tabular-nums text-ink">{moneyFormat.format(campaign.costPerResult)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <p className="mt-5 text-[11px] leading-5 text-ink-3">
            Campaign-level figures transcribed from the supplied Ads Manager screenshots. Reporting periods vary by campaign, so figures are shown individually and are not added together.
          </p>
        </div>
      </div>
    </section>
  )
}
