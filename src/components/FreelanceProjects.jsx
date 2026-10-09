import { Expand, ArrowUpRight } from 'lucide-react'
import Lightbox from './Lightbox'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'
import { useState } from 'react'

function FreelanceProjectCard({ project, index, whatsappUrl }) {
  const variants = project.variants || [{ name: 'Default', swatch: '#242424', images: project.images || [] }]
  const [activeVariantIndex, setActiveVariantIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const activeVariant = variants[activeVariantIndex]
  const images = activeVariant?.images || []
  const active = images[activeImage]

  return (
    <article className="glass ring-gradient overflow-hidden rounded-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="bg-[#e9dcc7] p-3 sm:p-4 lg:col-span-7 lg:p-5">
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="group relative block h-[460px] w-full overflow-hidden rounded-[20px] bg-[#e2d1b8] sm:h-[560px] lg:h-[620px]"
            aria-label={`Open ${project.name} image gallery`}
          >
            {active && (
              <img
                key={active.src}
                src={active.src}
                alt={active.alt}
                className="h-full w-full object-contain p-1 transition-transform duration-700 group-hover:scale-[1.015]"
              />
            )}
            <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/85 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#29251f] backdrop-blur-md">
              {String(index + 1).padStart(2, '0')} &nbsp; CLIENT PROJECT
            </span>
            {active && (
              <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-3.5 py-2 text-[11px] font-medium text-white backdrop-blur-md">
                <Expand size={13} className="mr-1.5 inline-block" />
                View full gallery
              </span>
            )}
            <span className="absolute bottom-4 right-4 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-semibold tabular-nums text-[#29251f] backdrop-blur-md">
              {String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </button>

          <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(imageIndex)}
                aria-label={`Show ${image.label}`}
                aria-current={imageIndex === activeImage}
                className={`group relative h-[78px] overflow-hidden rounded-xl border-2 bg-[#e2d1b8] transition sm:h-[102px] ${
                  imageIndex === activeImage
                    ? 'border-[#ad8250] shadow-[0_4px_18px_-8px_rgb(53_36_18/0.6)]'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {image.label.toLowerCase().includes('campaign') && (
                  <span className="absolute inset-x-0 bottom-0 bg-black/60 px-1 py-1 text-[9px] font-medium text-white">
                    Campaign
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-5 lg:p-12">
          <span className="chip chip-brand w-fit uppercase tracking-[0.14em] text-[10px]">
            {project.category}
          </span>
          <h3 className="mt-5 text-3xl font-bold leading-[1.05] text-ink sm:text-4xl lg:text-[2.6rem]">
            {project.name}
          </h3>
          {project.collection && (
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-300">
              {project.collection}
              <span className="mx-2 text-ink-3">/</span>
              {activeVariant.name} Floral Kurti
            </p>
          )}
          <div className="mt-7">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-3">
              Choose a colour
            </p>
            <div className="flex flex-wrap gap-2">
              {variants.map((variant, variantIndex) => (
                <button
                  key={variant.name}
                  type="button"
                  onClick={() => {
                    setActiveVariantIndex(variantIndex)
                    setActiveImage(0)
                  }}
                  aria-pressed={variantIndex === activeVariantIndex}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
                    variantIndex === activeVariantIndex
                      ? 'border-white/35 bg-white/10 text-white'
                      : 'border-white/10 bg-black/15 text-ink-2 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full border border-black/20 shadow-sm"
                    style={{ backgroundColor: variant.swatch }}
                  />
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-2">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.services?.map((service) => (
              <span key={service} className="chip">
                {service}
              </span>
            ))}
          </div>

          <div className="mt-9 border-t border-line pt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-3"
            >
              Discuss a Project
              <ArrowUpRight size={16} />
            </a>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-ink-3">
              {images.length} visuals <span className="mx-1">Â·</span> {variants.length} colour options
            </p>
          </div>
        </div>
      </div>

      {isGalleryOpen && images.length > 0 && (
        <Lightbox
          items={images.map((image) => ({ type: 'image', src: image.src, thumb: image.src }))}
          index={activeImage}
          label={`${project.name} Â· ${project.collection || 'Freelance Project'}`}
          onIndex={setActiveImage}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </article>
  )
}

export default function FreelanceProjects() {
  const projects = portfolioData.freelanceProjects || []

  if (!projects.length) return null

  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent('Hi Akshay, I would like to discuss a freelance project.')}`

  return (
    <section id="freelance" className="relative py-24 lg:py-32">
      <div className="orb w-[420px] h-[420px] -right-40 top-28 bg-amber-400/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Freelance Projects"
          title="Independent work,"
          highlight="made for brands."
          description="A closer look at creative projects made for freelance clients."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <FreelanceProjectCard
              key={project.id}
              project={project}
              index={index}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
