import { useEffect, useRef, useState } from 'react'
import { AlertTriangle, LoaderCircle } from 'lucide-react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

GlobalWorkerOptions.workerSrc = pdfWorkerUrl

export default function PdfPreview({ file, title, thumbnail = false }) {
  const containerRef = useRef(null)
  const canvasRefs = useRef([])
  const [containerWidth, setContainerWidth] = useState(0)
  const [pdf, setPdf] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const pageCount = pdf ? (thumbnail ? 1 : pdf.numPages) : 0

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
      if (!cancelled) setPdf(loadedPdf)
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
      for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber)
        if (cancelled) return

        const canvas = canvasRefs.current[pageNumber - 1]
        if (!canvas) continue

        const baseViewport = page.getViewport({ scale: 1 })
        const availableWidth = Math.max(1, containerWidth - 24)
        const scale = Math.min(availableWidth / baseViewport.width, thumbnail ? 2 : 1.5)
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
  }, [containerWidth, pageCount, pdf, thumbnail])

  return (
    <div
      ref={containerRef}
      className={`pdf-preview min-w-0 ${thumbnail ? 'h-full w-full' : 'w-full flex-1 overflow-y-auto'}`}
      aria-label={`${title} PDF preview`}
      aria-busy={loading}
    >
      {error ? (
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
          <div className={`flex flex-col items-center ${thumbnail ? 'h-full justify-center gap-2' : 'gap-4 p-3 sm:p-5'}`}>
            {Array.from({ length: pageCount }, (_, index) => (
              <canvas
                key={`${file}-${index + 1}`}
                ref={(canvas) => {
                  canvasRefs.current[index] = canvas
                }}
                className="max-w-full bg-white shadow-sm"
                aria-label={`${title}, page ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
