import { Award, ExternalLink, FileText } from 'lucide-react'
import SectionHeader from './SectionHeader'

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
                  <iframe
                    src={`${certificate.file}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={`${certificate.title} certificate preview`}
                    loading="lazy"
                    className="w-full h-full border-0 pointer-events-none"
                  />
                )}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-brand-600">
                <Award size={16} />
                <span>{certificate.issuer || certificate.format}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-ink">{certificate.title}</h3>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View certificate
                <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
