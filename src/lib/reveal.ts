import type { CSSProperties } from 'react'

/**
 * Delays an element's reveal animation by its position in a list,
 * so items slide in one after another. Use with `data-reveal`.
 */
export function stagger(index: number, step = 100): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
}
