import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Horizontal scroll-snap carousel with glass left/right arrow buttons and a
 * progress bar. Swipe/trackpad scrolling works natively; arrows page by ~one view.
 */
export default function Carousel({ label, icon: Icon, count, children }) {
  const trackRef = useRef(null)
  const [state, setState] = useState({ canPrev: false, canNext: false, progress: 0 })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft < max - 4,
      progress: max > 0 ? el.scrollLeft / max : 1,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [update])

  const page = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  const scrollable = state.canPrev || state.canNext

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <span className="icon-tile w-10 h-10 rounded-xl">
              <Icon size={18} />
            </span>
          )}
          <div className="min-w-0">
            <div className="text-base sm:text-lg font-semibold text-ink font-display">{label}</div>
            <div className="text-xs text-ink-3">{count} {count === 1 ? 'item' : 'items'}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="arrow-btn"
            onClick={() => page(-1)}
            disabled={!state.canPrev}
            aria-label={`Previous ${label}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="arrow-btn"
            onClick={() => page(1)}
            disabled={!state.canNext}
            aria-label={`Next ${label}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div ref={trackRef} onScroll={update} className="carousel-track" tabIndex={-1}>
          {children}
        </div>

        {/* Edge fades hint that there is more to scroll */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#111214]/90 to-transparent transition-opacity ${state.canPrev ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#111214]/90 to-transparent transition-opacity ${state.canNext ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {scrollable && (
        <div className="mt-4 h-[3px] rounded-full bg-ink/[0.07] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent transition-[width] duration-300"
            style={{ width: `${Math.max(8, state.progress * 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}
