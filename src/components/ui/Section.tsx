import type { ReactNode } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  title?: string
  className?: string
  children: ReactNode
}

export default function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto max-w-5xl scroll-mt-24 px-4 py-20', className)}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </section>
  )
}
