import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Back-to-top button, shown once the page has been scrolled past the hero.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      title="Back to top"
      className="arrow-btn fixed bottom-24 right-6 sm:bottom-6 sm:right-auto sm:left-6 z-40 w-12 h-12 shadow-[0_14px_30px_-12px_rgb(0_0_0/0.8)] fade-in"
    >
      <ArrowUp size={18} />
    </button>
  )
}
