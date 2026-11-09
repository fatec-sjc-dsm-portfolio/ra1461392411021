import StarField from '@/components/ui/StarField'
import { hero, site, socialLinks } from '@/data/site'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-[linear-gradient(180deg,var(--color-background)_0%,color-mix(in_oklab,var(--color-dark-turquoise)_45%,var(--color-background))_45%,color-mix(in_oklab,var(--color-dark-turquoise)_80%,var(--color-background))_75%,var(--color-background)_100%)]"
    >
      <StarField />

      <div className="relative z-10 mx-auto flex w-full flex-1 items-center justify-center px-4 pt-24">
        <div className="w-fit max-w-full">
          <p className="font-mono text-lg text-zinc-200 sm:text-xl">{hero.greeting}</p>

          <h1 className="mt-4 text-4xl font-bold tracking-[0.06em] sm:text-6xl">{site.name}</h1>

          <p className="mt-6 text-2xl tracking-[0.06em] sm:text-3xl">
            {hero.rolePrefix} <span className="text-bright-purple">{hero.role}</span>
          </p>

          <ul className="mt-10 flex gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const external = href.startsWith('http')
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="glass flex size-11 items-center justify-center rounded-xl transition hover:-translate-y-0.5 hover:border-bright-purple/70"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <a
        href="#about"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-4 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
      >
        {hero.scrollHint}
        <span className="relative h-14 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-0 animate-scroll-hint bg-linear-to-b from-transparent via-white to-transparent" />
        </span>
      </a>
    </section>
  )
}
