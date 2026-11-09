import { technologies, type TechKey } from '@/data/technologies'
import type { Technology } from '@/types'

export default function TechTag({ tech }: { tech: TechKey }) {
  const { label, icon: Icon }: Technology = technologies[tech]

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-bright-purple/25 px-2.5 py-1 text-[10px] font-bold tracking-wider text-zinc-100 uppercase">
      {Icon && <Icon aria-hidden className="size-3" />}
      {label}
    </span>
  )
}

export function TechTagList({ items, className }: { items: TechKey[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ''}`}>
      {items.map((tech) => (
        <li key={tech}>
          <TechTag tech={tech} />
        </li>
      ))}
    </ul>
  )
}
