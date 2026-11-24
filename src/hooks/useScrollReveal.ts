import { useEffect } from 'react'

/**
 * Watches every `[data-reveal]` element on the page. It's marked
 * `data-revealed` (starting its slide-in, see index.css) each time it scrolls
 * into view, and unmarked once it's completely off screen, so the animation
 * replays whenever you scroll back to it.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    // Show once the element is a little way into the viewport…
    const enter = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) (entry.target as HTMLElement).dataset.revealed = ''
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    // …but only reset it when it's fully out of view, so it doesn't flicker at the edge.
    const exit = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) delete (entry.target as HTMLElement).dataset.revealed
      }
    })

    elements.forEach((el) => {
      enter.observe(el)
      exit.observe(el)
    })

    return () => {
      enter.disconnect()
      exit.disconnect()
    }
  }, [])
}
