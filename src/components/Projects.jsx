import { useState, useEffect, useCallback } from 'react'
import { Camera, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import SectionHeader from './SectionHeader'
import { portfolioData } from '../data/portfolioData'

function ProjectBrandVisual({ project, modal = false }) {
  const initials = project.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className={`project-brand-visual project-brand-visual--${project.visualTone || 'blue'} ${modal ? 'project-brand-visual-modal' : 'absolute inset-0'}`}>
      <div className="project-brand-orbit project-brand-orbit-one" />
      <div className="project-brand-orbit project-brand-orbit-two" />
      <div className="project-brand-content">
        <div className="project-brand-monogram">{initials}</div>
        <div className="project-brand-kicker"><Camera size={15} /> BRAND PROFILE</div>
        <div className="project-brand-name">{project.name}</div>
        <div className="project-brand-category">{project.category}</div>
        <div className="project-brand-footer">Featured in selected work</div>
      </div>
    </div>
  )
}
/**
 * Projects Component
 * Auto-advancing brand slider
 * Arrow / dot / keyboard navigation
 * Detail modal
 */
export default function Projects() {
  const projects = portfolioData.projects || []
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const previousProject = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    )
  }, [projects.length])
  const nextProject = useCallback(() => {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    )
  }, [projects.length])
  // Escape closes modal
  useEffect(() => {
    if (!selectedProject) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedProject])
  // Keyboard arrows
  useEffect(() => {
    const onKey = (event) => {
      if (selectedProject) return
      if (event.key === 'ArrowLeft') {
        previousProject()
      }
      if (event.key === 'ArrowRight') {
        nextProject()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [previousProject, nextProject, selectedProject])
  // Auto slide
  useEffect(() => {
    if (isPaused || selectedProject || projects.length <= 1) return
    const interval = setInterval(() => {
      nextProject()
    }, 6000)
    return () => clearInterval(interval)
  }, [
    isPaused,
    selectedProject,
    projects.length,
    nextProject,
  ])
  if (!projects.length) return null
  const currentProject = projects[currentIndex]
  const pad = (n) => String(n).padStart(2, '0')
  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent(
    `Hi Akshay, I am interested in discussing your portfolio project: ${
      (selectedProject || currentProject).name
    }`
  )}`
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
    >
      {/* Background Orb */}
      <div className="orb w-[460px] h-[460px] -left-40 top-24 bg-brand-500/15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================= */}
        <SectionHeader
          eyebrow="Selected Work"
          title="Brands I've"
          highlight="grown online."
          description="Real brands, real campaigns and real digital work — from performance marketing and lead generation to social media and creative production."
        >
          {/* DESKTOP ARROWS */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="arrow-btn w-12 h-12"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="arrow-btn w-12 h-12"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </SectionHeader>
        {/* =========================
            PROJECT SLIDER
        ========================= */}
        <div
          className="mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass ring-gradient overflow-hidden rounded-[32px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[560px]">
              {/* =========================
                  PROJECT IMAGE
              ========================= */}
              <div className="relative lg:col-span-7 min-h-[360px] sm:min-h-[440px] lg:min-h-0 overflow-hidden bg-brand-50">
                {currentProject.image ? (
                  <img
                    key={currentProject.id}
                    src={currentProject.image}
                    alt={`${currentProject.name} project showcase`}
                  className={`absolute inset-0 w-full h-full ${currentProject.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'} fade-in`}
                  />
                ) : (
                  <ProjectBrandVisual project={currentProject} />
                )}
                {/* Dark bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                {/* Right soft overlay */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
                {/* Slide counter */}
                <span className="absolute top-5 left-5 chip rounded-full px-3.5 py-1.5 !bg-black/60 !border-white/15 backdrop-blur-md text-white tabular-nums">
                  {pad(currentIndex + 1)}
                  <span className="mx-1 text-ink-3">
                    /
                  </span>
                  {pad(projects.length)}
                </span>
                {/* View Project Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedProject(currentProject)
                  }
                  className="absolute bottom-5 left-5 btn btn-glass px-5 py-3 text-xs"
                >
                  <Expand size={15} />
                  View Project
                </button>
                {/* MOBILE ARROWS */}
                <div className="md:hidden absolute bottom-5 right-5 flex gap-2">
                  <button
                    type="button"
                    onClick={previousProject}
                    aria-label="Previous project"
                    className="arrow-btn w-11 h-11"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextProject}
                    aria-label="Next project"
                    className="arrow-btn w-11 h-11"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              {/* =========================
                  PROJECT DETAILS
              ========================= */}
              <div className="lg:col-span-5 p-7 sm:p-9 lg:p-12 flex flex-col justify-center">
                <div
                  key={currentProject.id}
                  className="fade-up"
                >
                  {/* Category */}
                  <span className="chip chip-brand uppercase tracking-[0.14em] text-[10px]">
                    {currentProject.category}
                  </span>
                  {/* Project Name */}
                  <h3 className="mt-5 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.05] text-ink">
                    {currentProject.name}
                  </h3>
                  {/* Description */}
                  <p className="mt-5 text-base text-ink-2 leading-7">
                    {currentProject.description}
                  </p>
                  {/* Services */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {currentProject.services?.map(
                      (service) => (
                        <span
                          key={service}
                          className="chip"
                        >
                          {service}
                        </span>
                      )
                    )}
                  </div>
                </div>
                {/* =========================
                    SLIDER DOTS
                ========================= */}
                <div className="mt-10 pt-6 border-t border-line flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {projects.map(
                      (project, index) => (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() =>
                            setCurrentIndex(index)
                          }
                          aria-label={`View project ${
                            index + 1
                          }`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'w-9 bg-gradient-to-r from-brand-400 to-accent'
                              : 'w-1.5 bg-ink/15 hover:bg-ink/30'
                          }`}
                        />
                      )
                    )}
                  </div>
                  <span className="text-xs text-ink-3 whitespace-nowrap">
                    {isPaused
                      ? 'Paused'
                      : 'Auto-playing'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================
          PROJECT DETAIL MODAL
      ========================= */}
      {selectedProject && (
        <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8 bg-slate-950/75 backdrop-blur-xl fade-in"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedProject.name
            }
            onClick={(event) =>
              event.stopPropagation()
            }
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass glass-strong rounded-[28px]"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Close project"
              className="arrow-btn absolute top-5 right-5 z-20"
            >
              <X size={19} />
            </button>
            {/* Modal Image */}
              {selectedProject.image ? (
                <div className="bg-[#0b0c0f]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full max-h-[600px] object-contain"
                  />
                </div>
              ) : (
                <ProjectBrandVisual project={selectedProject} modal />
              )}
            {/* Modal Content */}
            <div className="p-7 sm:p-10">
              <span className="chip chip-brand uppercase tracking-[0.14em] text-[10px]">
                {selectedProject.category}
              </span>
              <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-ink">
                {selectedProject.name}
              </h3>
              <p className="mt-4 max-w-3xl text-base text-ink-2 leading-7">
                {selectedProject.description}
              </p>
              {/* Services */}
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.services?.map(
                  (service) => (
                    <span
                      key={service}
                      className="chip"
                    >
                      {service}
                    </span>
                  )
                )}
              </div>
              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-xs text-ink-3 uppercase tracking-wider font-semibold">
                    Want similar work?
                  </p>
                  <p className="mt-1 text-sm text-ink">
                    Let's discuss your next campaign.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3.5"
                >
                  <WhatsAppIcon
                    size={17}
                    color="#ffffff"
                  />
                  Discuss a Similar Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
