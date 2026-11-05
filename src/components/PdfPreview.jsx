import { useEffect, useRef, useState } from 'react'
import { AlertTriangle, ChevronLeft, ChevronRight, LoaderCircle, Minus, Plus, X } from 'lucide-react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

GlobalWorkerOptions.workerSrc = pdfWorkerUrl

export default function PdfPreview({
  file,
  title,
  thumbnail = false,
  pageNumber = 1,
  viewer = false,
  onClose,
}) {
  const containerRef = useRef(null)
  const canvasRefs = useRef([])
  const [containerWidth, setContainerWidth] = useState(0)
  const [pdf, setPdf] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const pageCount = pdf ? (thumbnail ? (pageNumber <= pdf.numPages ? 1 : 0) : pdf.numPages) : 0
  const canvasPages = thumbnail
    ? [pageNumber]
    : viewer
      ? [activePage]
      : Array.from({ length: pageCount }, (_, index) => index + 1)

  const getCanvas = (index) => canvasRefs.current[index]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const resizeObserver = new ResizeObserver(() => {
      setContainerWidth(container.clientWidth)
    })
    resizeObserver.observe(container)
    setContainerWidth(container.clientWidth)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    const loadingTask = getDocument(file)

    loadingTask.promise.then((loadedPdf) => {
      if (!cancelled) {
        setPdf(loadedPdf)
        setActivePage(1)
      }
    }).catch((previewError) => {
      if (cancelled) return
      setError(previewError.message || 'This PDF could not be previewed.')
      setLoading(false)
    })

    return () => {
      cancelled = true
      loadingTask.destroy()
    }
  }, [file])

  useEffect(() => {
    if (!pdf || !containerWidth) return undefined

    let cancelled = false
    const renderTasks = []

    const renderPages = async () => {
      const pagesToRender = thumbnail
        ? [pageNumber]
        : viewer
          ? [activePage]
          : Array.from({ length: pdf.numPages }, (_, index) => index + 1)

      for (let index = 0; index < pagesToRender.length; index += 1) {
        const page = await pdf.getPage(pagesToRender[index])
        if (cancelled) return

        const canvas = getCanvas(index)
        if (!canvas) continue

        const baseViewport = page.getViewport({ scale: 1 })
        const availableWidth = Math.max(1, containerWidth - 24)
        const scale = Math.min(availableWidth / baseViewport.width, thumbnail ? 2 : 1.5) * (viewer ? zoom : 1)
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
        const viewport = page.getViewport({ scale: scale * pixelRatio })
        const context = canvas.getContext('2d', { alpha: false })

        if (!context) {
          throw new Error('Your browser could not create a PDF preview canvas.')
        }

        canvas.width = Math.ceil(viewport.width)
        canvas.height = Math.ceil(viewport.height)
        canvas.style.width = `${viewport.width / pixelRatio}px`
        canvas.style.height = `${viewport.height / pixelRatio}px`

        const renderTask = page.render({ canvasContext: context, viewport })
        renderTasks.push(renderTask)
        await renderTask.promise
      }

      if (!cancelled) setLoading(false)
    }

    renderPages().catch((previewError) => {
      if (cancelled) return
      setError(previewError.message || 'This PDF could not be previewed.')
      setLoading(false)
    })

    return () => {
      cancelled = true
      renderTasks.forEach((renderTask) => renderTask.cancel())
    }
  }, [containerWidth, pdf, thumbnail, viewer, zoom, activePage, pageNumber])

  const canvasContent = error ? (
    <div className="flex min-h-32 flex-col items-center justify-center gap-2 p-4 text-center text-sm text-rose-200">
      <AlertTriangle size={20} aria-hidden="true" />
      <span>{error}</span>
    </div>
  ) : (
    <>
      {loading && pageCount === 0 && (
        <div className="flex h-full min-h-32 flex-col items-center justify-center gap-2 text-sm text-ink-3">
          <LoaderCircle size={22} className="animate-spin" aria-hidden="true" />
          <span>Loading {title} preview…</span>
        </div>
      )}
      <div className={`flex ${viewer ? 'min-h-full justify-center p-3 sm:p-6' : 'flex-col items-center gap-4 p-3 sm:p-5'}`}>
        {canvasPages.map((visiblePage, index) => (
          <canvas
            key={`${file}-${visiblePage}`}
            ref={(canvas) => {
              canvasRefs.current[index] = canvas
            }}
            className={`${viewer ? 'shrink-0 bg-white shadow-2xl' : 'max-w-full bg-white shadow-sm'}`}
            aria-label={`${title}, page ${visiblePage}`}
          />
        ))}
      </div>
    </>
  )

  if (viewer) {
    return (
      <div className="flex h-full min-h-0 min-w-0 flex-col bg-[#1f1f1f] text-white" aria-label={`${title} PDF viewer`}>
        <div className="flex min-h-12 shrink-0 items-center gap-1 border-b border-white/10 bg-[#252525] px-1.5 sm:h-14 sm:gap-2 sm:px-3">
          <span id="cv-preview-title" className="min-w-0 flex-1 truncate pl-1 text-xs font-medium sm:pl-2 sm:text-sm">{title}</span>
          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              onClick={() => setActivePage((page) => Math.max(1, page - 1))}
              disabled={activePage <= 1}
              className="flex h-10 w-10 items-center justify-center rounded text-white/80 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="min-w-11 px-1 text-center text-xs tabular-nums sm:min-w-[5.5rem] sm:text-sm">
              {pageCount ? `${activePage} / ${pageCount}` : '— / —'}
            </span>
            <button
              type="button"
              onClick={() => setActivePage((page) => Math.min(pageCount, page + 1))}
              disabled={!pageCount || activePage >= pageCount}
              className="flex h-10 w-10 items-center justify-center rounded text-white/80 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <span className="mx-1 h-6 w-px shrink-0 bg-white/15" aria-hidden="true" />
          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              onClick={() => setZoom((value) => Math.max(0.75, Math.round((value - 0.25) * 100) / 100))}
              disabled={zoom <= 0.75}
              className="flex h-10 w-10 items-center justify-center rounded text-white/80 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Zoom out"
            >
              <Minus size={17} />
            </button>
            <span className="hidden min-w-10 text-center text-xs tabular-nums min-[380px]:block sm:min-w-12 sm:text-sm">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoom((value) => Math.min(2.5, Math.round((value + 0.25) * 100) / 100))}
              disabled={zoom >= 2.5}
              className="flex h-10 w-10 items-center justify-center rounded text-white/80 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Zoom in"
            >
              <Plus size={17} />
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20"
            aria-label="Close CV preview"
            title="Close preview"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1">
          {pdf && (
            <aside className="hidden w-24 shrink-0 flex-col gap-3 overflow-y-auto bg-[#252525] p-3 sm:flex md:w-36">
              {Array.from({ length: pageCount }, (_, index) => {
                const thumbnailPage = index + 1
                return (
                  <button
                    key={thumbnailPage}
                    type="button"
                    onClick={() => setActivePage(thumbnailPage)}
                    className={`flex shrink-0 flex-col items-center gap-1.5 rounded p-1.5 text-xs ${
                      activePage === thumbnailPage ? 'bg-[#3d3d3d] text-white ring-1 ring-blue-400' : 'text-white/70 hover:bg-white/10'
                    }`}
                    aria-label={`Go to page ${thumbnailPage}`}
                    aria-current={activePage === thumbnailPage ? 'page' : undefined}
                  >
                    <span className="flex aspect-[210/297] w-full items-center justify-center overflow-hidden bg-white">
                      <PdfPreview file={file} title={title} thumbnail pageNumber={thumbnailPage} />
                    </span>
                    <span>{thumbnailPage}</span>
                  </button>
                )
              })}
            </aside>
          )}
          <div
            ref={containerRef}
            className="pdf-preview min-h-0 min-w-0 flex-1 overflow-auto bg-[#303030]"
            aria-label={`${title} pages`}
            aria-busy={loading}
          >
            {canvasContent}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`pdf-preview min-w-0 ${thumbnail ? 'h-full w-full' : 'w-full flex-1 overflow-y-auto'}`}
      aria-label={`${title} PDF preview`}
      aria-busy={loading}
    >
      {canvasContent}
    </div>
  )
}
