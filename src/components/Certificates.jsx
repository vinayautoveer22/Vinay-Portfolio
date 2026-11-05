import { useEffect, useState } from 'react'
import { Award, Eye, FileText, X } from 'lucide-react'
import SectionHeader from './SectionHeader'
import PdfDocumentPanel from './PdfDocumentPanel'

const certificates = [
  {
    title: 'AI Essentials 2026',
    file: '/certificates/ai-essentials-2026.pdf',
    format: 'PDF certificate',
  },
  {
    title: 'Graphic Design Essentials',
    file: '/certificates/graphic-design-essentials.pdf',
    format: 'PDF certificate',
  },
  {
    title: 'Marketing with Canva',
    file: '/certificates/marketing-with-canva.pdf',
    format: 'PDF certificate',
  },
  {
    title: 'Scale Creative Campaigns',
    file: '/certificates/scale-creative-campaigns.pdf',
    format: 'PDF certificate',
  },
  {
    title: 'Google Ads',
    file: '/certificates/google-ads.pdf',
    format: 'PDF certificate',
  },
  {
    title: 'Digital Marketing Certified',
    issuer: 'HubSpot Academy',
    file: '/certificates/hubspot-digital-marketing.png',
    format: 'Image certificate',
    image: true,
  },
]

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  useEffect(() => {
    if (!activeCertificate) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveCertificate(null)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeCertificate])

  return (
    <section id="certificates" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certificates"
          title="Learning backed by"
          highlight="recognized credentials."
          description="A selection of certificates in AI, design, digital marketing, and advertising."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="card h-full p-5 sm:p-6 flex flex-col">
              <div className="h-40 rounded-2xl bg-white/70 border border-line flex items-center justify-center overflow-hidden">
                {certificate.image ? (
                  <img
                    src={certificate.file}
                    alt={`${certificate.title} from ${certificate.issuer}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white/[0.04] text-ink-2">
                    <FileText size={28} strokeWidth={1.7} aria-hidden="true" />
                    <span className="text-sm font-medium">PDF certificate</span>
                    <span className="text-xs text-ink-3">Tap below to open</span>
                  </div>
                )}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-brand-600">
                <Award size={16} />
                <span>{certificate.issuer || certificate.format}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-ink">{certificate.title}</h3>

              <button
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View certificate
                <Eye size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeCertificate && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-[#08090b]/65 text-white backdrop-blur-md fade-in"
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCertificate.title} certificate preview`}
        >
          <div
            className="flex items-center justify-between gap-4 px-4 pt-4 sm:px-8 sm:pt-6"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-white">{activeCertificate.title}</h2>
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="arrow-btn !border-white/20 !bg-black/45 !text-white hover:!bg-black/70"
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-24 sm:py-6">
            {activeCertificate.image ? (
              <img
                src={activeCertificate.file}
                alt={`${activeCertificate.title} from ${activeCertificate.issuer}`}
                onClick={(event) => event.stopPropagation()}
                className="max-h-full max-w-full rounded-2xl border border-white bg-white object-contain shadow-2xl"
              />
            ) : (
              <PdfDocumentPanel
                title={activeCertificate.title}
                href={activeCertificate.file}
                description={activeCertificate.format}
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
