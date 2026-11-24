import { navLinks, site } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/cn'

const sectionIds = navLinks.map(({ href }) => href.slice(1))

export default function Header() {
  const active = useActiveSection(sectionIds)
  const progressRef = useScrollProgress<HTMLElement>()

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        ref={progressRef}
        className="glass relative mx-auto grid max-w-xl grid-cols-[1fr_auto_1fr] items-center overflow-hidden rounded-full px-6 py-2.5"
      >
        <a href="#home" className="font-mono text-lg font-bold tracking-tight" aria-label={site.name}>
          {site.initials}
        </a>

        <ul className="flex items-center gap-2 sm:gap-4">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = active === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex size-9 items-center justify-center rounded-full transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none',
                    isActive ? 'bg-bright-purple/80 text-white hover:bg-bright-purple' : 'text-zinc-300',
                  )}
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Empty column keeps the icons centered in the pill. */}
        <span />

        {/* Scroll progress along the bottom edge of the pill. */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-(--scroll-progress,0) bg-bright-purple"
        />
      </nav>
    </header>
  )
}
