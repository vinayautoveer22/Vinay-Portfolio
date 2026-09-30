import { useEffect } from 'react'

const motionTargets = '.card, .media-tile, .campaign-step'

/** Adds a one-time reveal as content enters the viewport. */
export default function ScrollMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const targets = new WeakSet()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    )

    const observeTargets = (root) => {
      if (root instanceof Element && root.matches(motionTargets) && !targets.has(root)) {
        targets.add(root)
        root.classList.add('motion-reveal')
        observer.observe(root)
      }

      root.querySelectorAll?.(motionTargets).forEach((element) => {
        if (targets.has(element)) return
        targets.add(element)
        element.classList.add('motion-reveal')
        observer.observe(element)
      })
    }

    observeTargets(document)

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTargets(node)
        })
      })
    })
    mutationObserver.observe(document.querySelector('main') || document.body, {
      childList: true,
      subtree: true,
    })

    document.documentElement.dataset.motionReady = 'true'

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      delete document.documentElement.dataset.motionReady
    }
  }, [])

  return null
}
