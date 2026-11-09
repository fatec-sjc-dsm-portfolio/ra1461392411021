import { footer } from '@/data/site'

const craters = [
  { left: '19%', top: '72%', width: '15%', height: '70%' },
  { left: '69.5%', top: '50%', width: '7.5%', height: '30%' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-turquoise pt-6">
      <div className="relative h-36">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 aspect-square w-[max(220%,60rem)] -translate-x-1/2 rounded-full bg-[#ece6fd] shadow-[0_0_30px_rgb(236_230_253/0.25)]"
        />
        {craters.map((crater, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute rounded-[50%] bg-[#d9cdf7] shadow-[inset_0_3px_6px_rgb(36_17_76/0.08)]"
            style={crater}
          />
        ))}

        <div className="relative flex flex-col items-center pt-8">
          <ul className="flex gap-8">
            {footer.socialLinks.map(({ label, href, icon: Icon }, i) => (
              <li key={label} className="animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  title={label}
                  className="flex size-9 items-center justify-center rounded-full bg-dark-purple text-white shadow-lg shadow-dark-purple/30 transition-colors hover:bg-bright-purple"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[11px] tracking-wide text-zinc-600">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
