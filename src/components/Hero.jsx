import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Download, ExternalLink, Eye, Sparkles, Target, TrendingUp, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import PdfPreview from './PdfPreview'
import { portfolioData } from '../data/portfolioData'

/**
 * Hero Component
 * Introduction, primary calls to action, key stats and portrait on a glass stage.
 */
export default function Hero() {
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false)
  const previewHistoryKey = useRef(null)
  const cvUrl = './Vinay%20Kumar%20Resume.pdf'
  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(portfolioData.contact.whatsappMessage)}`

  useEffect(() => {
    if (!isCvPreviewOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsCvPreviewOpen(false)
    }
    const closeOnBack = () => {
      previewHistoryKey.current = null
      setIsCvPreviewOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    const historyKey = `cv-preview-${Date.now()}`
    previewHistoryKey.current = historyKey
    window.history.pushState(
      { ...window.history.state, portfolioPreviewKey: historyKey },
      '',
      window.location.href
    )
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('popstate', closeOnBack)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('popstate', closeOnBack)
      if (previewHistoryKey.current === historyKey) {
        previewHistoryKey.current = null
        if (window.history.state?.portfolioPreviewKey === historyKey) window.history.back()
      }
    }
  }, [isCvPreviewOpen])

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">

      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 fade-up">
            <span className="status-pill">Available for selected freelance projects</span>

            <h1 className="mt-7 text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-extrabold text-ink leading-[1.02]">
              Hi, I'm <span className="text-gradient">{portfolioData.name}</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl font-semibold text-ink font-display leading-snug">
              {portfolioData.heroTitle}
            </p>

            <p className="hero-tagline mt-3 text-sm sm:text-base font-medium leading-relaxed">
              {portfolioData.tagline}
            </p>

            <p className="hero-summary mt-5 text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl">
              {portfolioData.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#ai-creative" className="btn btn-primary px-7 py-4">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>
              <button type="button" onClick={() => setIsCvPreviewOpen(true)} className="btn btn-glass px-7 py-4">
                <Eye size={16} />
                <span>Preview CV</span>
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass px-7 py-4">
                <WhatsAppIcon size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {portfolioData.stats.map((item) => (
                <div key={item.label} className="card p-4 sm:p-5 flex flex-col">
                  <dt className="order-2 mt-1.5 text-sm font-semibold text-ink">{item.label}</dt>
                  <dd className="order-1 text-3xl sm:text-[2.1rem] font-extrabold font-display text-gradient leading-none">{item.value}</dd>
                  <dd className="order-3 mt-1 text-xs text-ink-3">{item.hint}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex justify-center fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="hero-character-stage relative w-full max-w-[460px] aspect-square">
              <div className="absolute inset-6 rounded-[40px] glass ring-gradient" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-brand-400/35 via-violet-400/30 to-sky-300/30 blur-3xl" />
              <img
                src="./character.webp"
                alt="Vinay Kumar"
                width="880"
                height="880"
                fetchPriority="high"
                className="hero-character relative w-full h-full object-contain p-6 drop-shadow-[0_30px_40px_rgb(15_23_42/0.22)]"
              />

              <div className="absolute top-10 -left-2 sm:-left-8 glass rounded-2xl p-3 pr-4 flex items-center gap-3">
                <span className="icon-tile w-10 h-10 rounded-xl">
                  <TrendingUp size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-medium text-ink-3">Paid Media ROI</div>
                  <div className="text-sm font-semibold text-ink whitespace-nowrap">Meta & Google Ads</div>
                </div>
              </div>

              <div className="absolute bottom-14 -right-2 sm:-right-6 glass rounded-2xl p-3 pr-4 flex items-center gap-3">
                <span className="icon-tile w-10 h-10 rounded-xl">
                  <Sparkles size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-medium text-ink-3">AI Content</div>
                  <div className="text-sm font-semibold text-ink whitespace-nowrap">Reels & Creatives</div>
                </div>
              </div>

              <div className="absolute -bottom-2 left-8 glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5">
                <Target size={16} className="text-accent" />
                <span className="text-xs font-semibold text-ink whitespace-nowrap">Lead Generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {isCvPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[#08090b]/80 p-2 backdrop-blur-md sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsCvPreviewOpen(false)
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-preview-title"
        >
          <div className="mx-auto flex h-full min-h-0 w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#11111b] shadow-2xl sm:rounded-2xl">
            <PdfPreview
              file={cvUrl}
              title="Vinay Kumar Resume"
              viewer
              onClose={() => setIsCvPreviewOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}
