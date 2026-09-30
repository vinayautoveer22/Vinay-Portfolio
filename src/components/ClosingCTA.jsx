import { ArrowUpRight, MoveUpRight, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import usePointerParallax from './usePointerParallax'

export default function ClosingCTA() {
  const characterStageRef = usePointerParallax()
  const whatsappUrl = `https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(portfolioData.contact.whatsappMessage)}`

  return (
    <section className="closing-cta relative isolate overflow-hidden" aria-labelledby="closing-title">
      <div className="closing-cta-glow closing-cta-glow-a" />
      <div className="closing-cta-glow closing-cta-glow-b" />
      <div className="closing-cta-grid" aria-hidden="true" />

      <div className="closing-cta-inner relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="closing-cta-content">
          <div className="closing-cta-kicker">
            <Sparkles size={14} />
            <span>YOUR NEXT BIG IDEA STARTS HERE</span>
          </div>

          <h2 id="closing-title" className="closing-cta-title">
            Let’s make
            <span>something grow.</span>
          </h2>

          <p className="closing-cta-copy">
            Have a campaign, a brand, or a big idea in mind? Let’s turn it into measurable momentum.
          </p>

          <div className="closing-cta-actions">
            <a className="closing-cta-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Let’s talk about your project <ArrowUpRight size={17} />
            </a>
            <a className="closing-cta-work" href="#projects">
              Explore selected work <MoveUpRight size={15} />
            </a>
          </div>
        </div>

        <div ref={characterStageRef} className="closing-cta-visual character-pointer-stage" aria-hidden="true">
          <div className="closing-cta-art">
            <img src="./character.webp" alt="" loading="lazy" />
          </div>
          <div className="closing-cta-float closing-cta-float-left">
            <span className="closing-cta-dot" />
            Performance that converts
          </div>
          <div className="closing-cta-float closing-cta-float-right">
            Creative that gets noticed <span className="closing-cta-spark">✳</span>
          </div>
        </div>
      </div>
    </section>
  )
}
