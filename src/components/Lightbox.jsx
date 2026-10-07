import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-screen glass viewer for images and videos.
 * Arrow buttons, keyboard (â† â†’ Esc) and touch swipe move through `items`.
 */
export default function Lightbox({ items, index, label, onIndex, onClose }) {
  const touchX = useRef(null)
  const item = items[index]
  const total = items.length

  const go = (dir) => onIndex((index + dir + total) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndex((index - 1 + total) % total)
      if (e.key === 'ArrowRight') onIndex((index + 1) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, total, onIndex, onClose])

  // Lock page scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#08090b]/45 text-white backdrop-blur-md fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} viewer`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-8 pt-4 sm:pt-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="chip !border-white/20 !bg-black/55 !text-white backdrop-blur-lg">{label}</span>
          <span className="text-sm font-semibold text-white tabular-nums drop-shadow-md">
            {String(index + 1).padStart(2, '0')}
            <span className="text-white/65"> / {String(total).padStart(2, '0')}</span>
          </span>
        </div>
        <button type="button" onClick={onClose} className="arrow-btn !border-white/20 !bg-black/45 !text-white hover:!bg-black/70" aria-label="Close viewer">
          <X size={20} />
        </button>
      </div>

      {/* Stage */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-3 sm:px-24 py-4 sm:py-6">
        <div
          className="relative h-full w-full flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {item.type === 'video' ? (
            <video
              key={item.src}
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-2xl border border-white shadow-[0_40px_100px_-30px_rgb(15_23_42/0.5)] bg-black"
            />
          ) : (
            <img
              key={item.src}
              src={item.src}
              alt={`${label} creative ${index + 1} of ${total}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-2xl border border-white shadow-[0_40px_100px_-30px_rgb(15_23_42/0.5)] fade-in"
            />
          )}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              className="arrow-btn absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 !border-white/20 !bg-black/45 !text-white hover:!bg-black/70"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              className="arrow-btn absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 !border-white/20 !bg-black/45 !text-white hover:!bg-black/70"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="px-4 sm:px-8 pb-4 sm:pb-6" onClick={(e) => e.stopPropagation()}>
          <div className="mx-auto w-fit max-w-full flex gap-2 carousel-track">
            {items.map((it, i) => (
              <button
                key={it.src}
                type="button"
                onClick={() => onIndex(i)}
                aria-label={`Show ${i + 1}`}
                aria-current={i === index}
                className={`w-11 h-14 sm:w-12 sm:h-16 rounded-lg overflow-hidden border transition-all ${
                  i === index ? 'border-brand-400 opacity-100 ring-2 ring-brand-400/40' : 'border-white opacity-50 hover:opacity-90'
                }`}
              >
                <img src={it.thumb || it.poster} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
