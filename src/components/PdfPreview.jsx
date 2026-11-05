import { useEffect, useRef, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

GlobalWorkerOptions.workerSrc = pdfWorkerUrl

export default function PdfPreview({ file, title, thumbnail = false }) {
  const containerRef = useRef(null)
  const canvasRefs = useRef([])
  const [containerWidth, setContainerWidth] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
    if (!containerWidth) return undefined

    let cancelled = false
    const loadingTask = getDocument(file)

    setLoading(true)
    setError('')
    setPageCount(0)

    const renderDocument = async () => {
      const pdf = await loadingTask.promise
      if (cancelled) return

      const pagesToRender = thumbnail ? 1 : pdf.numPages
      setPageCount(pagesToRender)

      for (let pageNumber = 1; pageNumber <= pagesToRender; pageNumber += 1) {
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

        await page.render({ canvasContext: context, viewport }).promise
      }

      if (!cancelled) setLoading(false)
    }

    renderDocument().catch((previewError) => {
      if (cancelled) return
      setError(previewError.message || 'This PDF could not be previewed.')
      setLoading(false)
    })

    return () => {
      cancelled = true
      loadingTask.destroy()
    }
  }, [containerWidth, file, thumbnail])

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
          {loading && (
            <span className="sr-only">Loading {title} preview</span>
          )}
        </>
      )}
    </div>
  )
}
