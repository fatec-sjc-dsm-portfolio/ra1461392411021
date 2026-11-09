import type { TimelineItem } from '@/types'

export default function TimelineCard({ title, organization, period, description }: TimelineItem) {
  return (
    <article className="glass rounded-xl p-5 transition-colors hover:border-bright-purple/60 sm:p-6">
      <header className="flex flex-col-reverse gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h4 className="font-semibold tracking-wide text-zinc-100">{title}</h4>
        <span className="shrink-0 text-sm font-semibold tracking-wide text-bright-purple">{period}</span>
      </header>
      <p className="mt-2 text-sm font-semibold tracking-wide text-zinc-200">{organization}</p>
      <p className="mt-4 text-sm leading-relaxed tracking-wide text-zinc-400">{description}</p>
    </article>
  )
}
