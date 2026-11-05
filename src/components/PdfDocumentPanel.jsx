import { Download, ExternalLink, FileText } from 'lucide-react'

export default function PdfDocumentPanel({ title, href, description = 'PDF document', downloadLabel = 'Download' }) {
  return (
    <div className="pdf-document-panel flex min-h-0 min-w-0 flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center sm:p-8">
      <div className="flex w-full max-w-md flex-col items-center">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
          <FileText size={28} strokeWidth={1.7} />
        </span>
        <p className="text-sm font-medium text-white/60">{description}</p>
        <h3 className="mt-2 break-words text-xl font-semibold text-white sm:text-2xl">{title}</h3>
        <div className="mt-6 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-h-11 justify-center px-5 py-3"
          >
            <ExternalLink size={16} />
            <span>Open PDF</span>
          </a>
          <a href={href} download className="btn btn-glass min-h-11 justify-center px-5 py-3">
            <Download size={16} />
            <span>{downloadLabel}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
