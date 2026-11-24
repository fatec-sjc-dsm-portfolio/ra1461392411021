import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in the middle of the viewport,
 * or null when none of the given sections is there (e.g. on the hero).
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    // A thin band across the middle of the screen: whichever section crosses it is "active".
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else setActive((current) => (current === entry.target.id ? null : current))
        }
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
