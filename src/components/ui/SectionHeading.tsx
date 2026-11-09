interface SectionHeadingProps {
  children: string
}

/** Section title flanked by lines: ——  SOBRE MIM  ———————— */
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-14 flex items-center gap-6">
      <span aria-hidden className="h-px w-10 shrink-0 bg-white/60 sm:w-16" />
      <h2 className="shrink-0 font-mono text-lg font-medium tracking-[0.2em] text-zinc-100 uppercase">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-linear-to-r from-white/60 to-transparent" />
    </div>
  )
}
