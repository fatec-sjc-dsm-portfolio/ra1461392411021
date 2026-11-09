import { navLinks, site } from '@/data/site'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto grid max-w-xl grid-cols-[1fr_auto_1fr] items-center rounded-full px-6 py-2.5">
        <a href="#home" className="font-mono text-lg font-bold tracking-tight" aria-label={site.name}>
          {site.initials}
        </a>

        <ul className="flex items-center gap-2 sm:gap-4">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                title={label}
                className="flex size-9 items-center justify-center rounded-full text-zinc-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none"
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>

        {/* Empty column keeps the icons centered in the pill. */}
        <span />
      </nav>
    </header>
  )
}
