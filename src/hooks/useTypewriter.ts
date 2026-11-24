import { useEffect, useState } from 'react'

/**
 * Reveals `text` one character at a time. Returns the visible part and
 * whether typing has finished. Shows the full text at once when the user
 * prefers reduced motion.
 */
export function useTypewriter(text: string, { speed = 110, startDelay = 400 } = {}) {
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [count, setCount] = useState(reduceMotion ? text.length : 0)

  useEffect(() => {
    if (reduceMotion) return

    let interval: ReturnType<typeof setInterval> | undefined
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c + 1 >= text.length) clearInterval(interval)
          return Math.min(c + 1, text.length)
        })
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay, reduceMotion])

  const visible = reduceMotion ? text.length : count
  return { typed: text.slice(0, visible), done: visible >= text.length }
}
