import { useState } from 'react'
import { ArrowUpRight, Expand } from 'lucide-react'
import Lightbox from './Lightbox'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

export default function FreelanceProjects() {
  const projects = portfolioData.freelanceProjects || []
  const [activeProject, setActiveProject] = useState(null)

  if (!projects.length) return null

  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent('Hi Vinay, I would like to discuss a freelance project.')}`

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
            <article
              key={project.id}
              className="glass ring-gradient overflow-hidden rounded-[32px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[540px]">
                <div className="relative lg:col-span-7 min-h-[420px] sm:min-h-[520px] lg:min-h-0 overflow-hidden bg-[#e9dcc7]">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} ${project.collection || 'campaign'} creative`}
                      className={`absolute inset-0 h-full w-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
                    />
                  )}
                  <span className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#27231e] backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} &nbsp; CLIENT PROJECT
                  </span>
                  {project.image && (
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="btn btn-glass absolute bottom-5 left-5 px-5 py-3 text-xs"
                      aria-label={`View ${project.name} campaign image`}
                    >
                      <Expand size={15} />
                      View Creative
                    </button>
                  )}
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-5 lg:p-12">
                  <span className="chip chip-brand w-fit uppercase tracking-[0.14em] text-[10px]">
                    {project.category}
                  </span>
                  <h3 className="mt-5 text-3xl font-bold leading-[1.05] text-ink sm:text-4xl lg:text-[2.6rem]">
                    {project.name}
                  </h3>
                  {project.collection && (
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-amber-300">
                      {project.collection} Collection
                    </p>
                  )}
                  <p className="mt-5 text-base leading-7 text-ink-2">
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <Lightbox
          items={[{ type: 'image', src: activeProject.image }]}
          index={0}
          label={activeProject.name}
          onIndex={() => {}}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}

