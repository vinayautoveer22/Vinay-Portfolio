import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Bike,
  CarTaxiFront,
  Truck,
  Car,
  Tractor,
  Clapperboard,
  Images,
  Film,
  Megaphone,
  Play,
  Expand,
  X,
  Utensils,
} from 'lucide-react'

import SectionHeader from './SectionHeader'
import Carousel from './Carousel'
import { portfolioData } from '../data/portfolioData'

const icons = {
  'two-wheeler': Bike,
  'three-wheeler': CarTaxiFront,
  'ashok-leyland': Truck,
  nissan: Car,
  tractor: Tractor,
  'brand-films': Clapperboard,
  'meta-ads': Megaphone,
  'indraj-menu': Utensils,
}

const imagesFor = (category) => {
  const files = category.files || Array.from(
    { length: category.images || 0 },
    (_, index) => `${category.folder}-${String(index + 1).padStart(2, '0')}.webp`
  )

  return files.map((file) => {
    return {
      type: 'image',
      src: `./ai-images/${category.folder}/${file}`,
      thumb: `./ai-images/${category.folder}/thumbs/${file}`,
    }
  })
}

const videosFor = (category) =>
  (category.videos || []).map((file) => ({
    type: 'video',
    src: `./ai-videos/${file}`,
    poster: `./ai-videos/posters/${file.replace(/\.mp4$/i, '.webp')}`,
  }))

function getTargetRect(type) {
  const maxWidth = window.innerWidth * 0.82
  const maxHeight = window.innerHeight * 0.78

  const ratio = type === 'video' ? 9 / 16 : 4 / 5

  let width = maxHeight * ratio
  let height = maxHeight

  if (width > maxWidth) {
    width = maxWidth
    height = width / ratio
  }

  return {
    width,
    height,
    left: (window.innerWidth - width) / 2,
    top: (window.innerHeight - height) / 2,
  }
}

export default function CreativeGallery() {
  const categories = portfolioData.gallery || []

  const [activeId, setActiveId] = useState(categories[0]?.id || '')
  const [viewer, setViewer] = useState(null)
  const [animatedRect, setAnimatedRect] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const closeTimerRef = useRef(null)

  const active =
    categories.find((category) => category.id === activeId) || categories[0] || {
      id: '',
      folder: '',
      images: 0,
      files: [],
      videos: [],
    }

  const Icon = icons[active.id] || Images

  const media = {
    images: imagesFor(active),
    videos: videosFor(active),
  }

  const totals = categories.reduce(
    (acc, category) => ({
      images: acc.images + (category.images || 0),
      videos: acc.videos + (category.videos?.length || 0),
    }),
    {
      images: 0,
      videos: 0,
    }
  )

  const selectCategory = (id) => {
    setActiveId(id)
    setViewer(null)
  }

  const openViewer = (event, kind, index) => {
    const sourceRect = event.currentTarget.getBoundingClientRect()
    const item = media[kind][index]

    const startRect = {
      left: sourceRect.left,
      top: sourceRect.top,
      width: sourceRect.width,
      height: sourceRect.height,
    }

    setViewer({
      kind,
      index,
      item,
      sourceRect: startRect,
    })

    setAnimatedRect(startRect)
    setIsOpen(false)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimatedRect(getTargetRect(item.type))
        setIsOpen(true)
      })
    })
  }

  const closeViewer = useCallback(() => {
    if (!viewer) return

    setIsOpen(false)

    setAnimatedRect(viewer.sourceRect)

    clearTimeout(closeTimerRef.current)

    closeTimerRef.current = setTimeout(() => {
      setViewer(null)
      setAnimatedRect(null)
    }, 460)
  }, [viewer])

  useEffect(() => {
    if (!viewer) return

    const oldBodyOverflow = document.body.style.overflow
    const oldHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeViewer()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = oldBodyOverflow
      document.documentElement.style.overflow = oldHtmlOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [viewer, closeViewer])

  useEffect(() => {
    return () => {
      clearTimeout(closeTimerRef.current)
    }
  }, [])

  if (!categories.length) return null

  const selectedKind = viewer?.kind
  const selectedIndex = viewer?.index

  return (
    <>
      <section
        id="ai-creative"
        className="relative py-20 lg:py-24"
      >
        <div className="orb w-[420px] h-[420px] -left-48 top-32 bg-brand-500/10" />

        <div className="orb w-[340px] h-[340px] -right-36 bottom-10 bg-violet-500/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Creative Portfolio"
            title="Campaign creatives &"
            highlight="AI films."
            description={`${totals.images} ad creatives and ${totals.videos} AI videos organised by brand. Browse the categories and click any piece to preview it.`}
          />

          {/* CATEGORY TABS */}

          <div className="mt-9 lg:mt-10 flex">
            <div
              className="segmented"
              role="tablist"
              aria-label="Creative categories"
            >
              {categories.map((category) => {
                const TabIcon = icons[category.id] || Images

                const total =
                  (category.images || 0) +
                  (category.videos?.length || 0)

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={category.id === active.id}
                    onClick={() => selectCategory(category.id)}
                  >
                    <TabIcon size={15} />

                    <span>{category.label}</span>

                    <span className="count">
                      {total}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ACTIVE CATEGORY */}

          <div
            key={active.id}
            className="mt-7 fade-up"
            role="tabpanel"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-line">
              <div className="flex items-center gap-3">
                <span className="icon-tile w-11 h-11 rounded-xl">
                  <Icon size={20} />
                </span>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">
                    {active.label}
                  </h3>

                  <p className="mt-0.5 text-xs sm:text-sm text-ink-3">
                    {active.brand}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.images > 0 && (
                  <span className="chip chip-brand px-3 py-1.5 gap-1.5">
                    <Images size={12} />
                    {active.images} Creatives
                  </span>
                )}

                {active.videos?.length > 0 && (
                  <span className="chip px-3 py-1.5 gap-1.5">
                    <Film size={12} />

                    {active.videos.length}{' '}

                    {active.videos.length === 1
                      ? 'Video'
                      : 'Videos'}
                  </span>
                )}
              </div>
            </div>

            {/* MEDIA */}

            <div className="mt-8 space-y-10 lg:space-y-12">
              {/* IMAGES */}

              {media.images.length > 0 && (
                <Carousel
                  label="Ad Creatives"
                  icon={Images}
                  count={media.images.length}
                >
                  {media.images.map((item, index) => {
                    const hidden =
                      selectedKind === 'images' &&
                      selectedIndex === index

                    return (
                      <button
                        key={item.src}
                        type="button"
                        onClick={(event) =>
                          openViewer(event, 'images', index)
                        }
                        aria-label={`Open ${active.label} creative ${
                          index + 1
                        }`}
                        className={`
                          media-tile
                          group
                          w-[62%]
                          sm:w-[38%]
                          md:w-[30%]
                          lg:w-[23%]
                          aspect-[4/5]
                          transition-opacity
                          duration-150
                          ${hidden ? 'opacity-0' : 'opacity-100'}
                        `}
                      >
                        <img
                          src={item.thumb}
                          alt={`${active.label} creative ${
                            index + 1
                          }`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />

                        <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/20 border border-white/25 backdrop-blur-md text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <Expand size={15} />
                        </span>
                      </button>
                    )
                  })}
                </Carousel>
              )}

              {/* VIDEOS */}

              {media.videos.length > 0 && (
                <Carousel
                  label="AI Videos"
                  icon={Film}
                  count={media.videos.length}
                >
                  {media.videos.map((item, index) => {
                    const hidden =
                      selectedKind === 'videos' &&
                      selectedIndex === index

                    return (
                      <button
                        key={item.src}
                        type="button"
                        onClick={(event) =>
                          openViewer(event, 'videos', index)
                        }
                        aria-label={`Play ${active.label} video ${
                          index + 1
                        }`}
                        className={`
                          media-tile
                          group
                          w-[52%]
                          sm:w-[32%]
                          md:w-[24%]
                          lg:w-[18.6%]
                          aspect-[9/16]
                          transition-opacity
                          duration-150
                          ${hidden ? 'opacity-0' : 'opacity-100'}
                        `}
                      >
                        <img
                          src={item.poster}
                          alt={`${active.label} video ${
                            index + 1
                          }`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />

                        <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />

                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgb(0_0_0/0.7)] transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:border-brand-400">
                            <Play
                              size={19}
                              fill="currentColor"
                              className="ml-0.5"
                            />
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SHARED-ELEMENT / FLIP VIEWER
      ================================================================ */}

      {viewer && animatedRect && createPortal((
        <>
          {/* Background dim */}

          <div
            className="fixed inset-0 z-[99990] bg-slate-950/55 backdrop-blur-[6px]"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 420ms ease',
            }}
            onMouseDown={closeViewer}
          />

          {/* Animated media */}

          <div
            className="fixed z-[99999]"
            style={{
              left: animatedRect.left,
              top: animatedRect.top,
              width: animatedRect.width,
              height: animatedRect.height,

              transition:
                'left 460ms cubic-bezier(0.22,1,0.36,1), top 460ms cubic-bezier(0.22,1,0.36,1), width 460ms cubic-bezier(0.22,1,0.36,1), height 460ms cubic-bezier(0.22,1,0.36,1), border-radius 460ms ease',

              borderRadius: isOpen ? '22px' : '18px',

              boxShadow: isOpen
                ? '0 35px 90px rgba(0,0,0,0.45)'
                : '0 12px 30px rgba(0,0,0,0.18)',

              overflow: 'visible',
            }}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close preview"
              className="
                absolute
                -top-4
                -right-4
                z-30
                w-11
                h-11
                rounded-full
                bg-white
                text-slate-900
                border
                border-slate-200
                shadow-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
              "
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen
                  ? 'scale(1)'
                  : 'scale(0.7)',
                transition:
                  'opacity 250ms ease 180ms, transform 250ms ease 180ms',
              }}
            >
              <X size={19} />
            </button>

            {/* IMAGE */}

            {viewer.item.type === 'image' && (
              <img
                src={viewer.item.src}
                alt="Creative preview"
                draggable="false"
                className="
                  block
                  w-full
                  h-full
                  object-cover
                  rounded-[inherit]
                "
              />
            )}

            {/* VIDEO */}

            {viewer.item.type === 'video' && (
              <video
                src={viewer.item.src}
                poster={viewer.item.poster}
                preload="auto"
                controls={isOpen}
                autoPlay
                playsInline
                className="
                  block
                  w-full
                  h-full
                  object-cover
                  rounded-[inherit]
                  bg-black
                "
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </>
      ), document.body)}
    </>
  )
}
