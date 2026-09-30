import { useEffect, useRef } from 'react'

/** Gentle pointer-driven motion for a character's surrounding visual stage. */
export default function usePointerParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const stage = ref.current
    if (!stage) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return undefined

    const move = (event) => {
      if (event.pointerType !== 'mouse') return
      const bounds = stage.getBoundingClientRect()
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2))
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2))

      stage.style.setProperty('--pointer-x', `${x * 12}px`)
      stage.style.setProperty('--pointer-y', `${y * 10}px`)
      stage.style.setProperty('--pointer-rotate-x', `${y * -2.5}deg`)
      stage.style.setProperty('--pointer-rotate-y', `${x * 3.5}deg`)
    }

    const reset = () => {
      stage.style.setProperty('--pointer-x', '0px')
      stage.style.setProperty('--pointer-y', '0px')
      stage.style.setProperty('--pointer-rotate-x', '0deg')
      stage.style.setProperty('--pointer-rotate-y', '0deg')
    }

    stage.addEventListener('pointermove', move, { passive: true })
    stage.addEventListener('pointerleave', reset, { passive: true })
    return () => {
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', reset)
      reset()
    }
  }, [])

  return ref
}
