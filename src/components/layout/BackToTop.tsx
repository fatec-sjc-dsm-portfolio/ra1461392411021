import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'
import { cn } from '@/lib/cn'

/** Floating button in the bottom-right corner that scrolls back to the top. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0 })}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'glass bg-bright-purple/50! fixed cursor-pointer right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 hover:border-bright-purple/70 focus-visible:ring-2 focus-visible:ring-bright-purple focus-visible:outline-none sm:right-8 sm:bottom-8',
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <LuArrowUp className="size-5" />
    </button>
  )
}
