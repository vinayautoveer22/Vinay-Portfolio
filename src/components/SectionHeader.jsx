/**
 * Shared section heading: glass eyebrow pill, title (highlight words in the
 * accent gradient), optional lead text, and an optional control on the right.
 */
export default function SectionHeader({ eyebrow, title, highlight, description, children }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-bold text-ink leading-[1.1]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
        {description && <p className="mt-5 text-base sm:text-lg text-ink-2 leading-relaxed">{description}</p>}
      </div>
      {children}
    </div>
  )
}
