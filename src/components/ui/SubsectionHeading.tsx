import { LuCircleChevronRight } from 'react-icons/lu'

interface SubsectionHeadingProps {
  children: string
}

/** Smaller heading with a circled chevron, e.g. "› FORMAÇÃO". */
export default function SubsectionHeading({ children }: SubsectionHeadingProps) {
  return (
    <h3 className="mb-8 flex items-center gap-3 font-mono text-lg font-medium tracking-[0.15em] text-zinc-100 uppercase">
      <LuCircleChevronRight aria-hidden className="size-5 shrink-0" />
      {children}
    </h3>
  )
}
