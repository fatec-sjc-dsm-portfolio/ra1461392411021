import { useState } from 'react'
import { LuSparkles } from 'react-icons/lu'
import Section from '@/components/ui/Section'
import SubsectionHeading from '@/components/ui/SubsectionHeading'
import TimelineCard from '@/components/ui/TimelineCard'
import { about, education, experience } from '@/data/about'
import { site } from '@/data/site'
import type { TimelineItem } from '@/types'

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-48 shrink-0 sm:w-52">
      {/* Offset outline frame behind the photo */}
      <span
        aria-hidden
        className="absolute inset-0 translate-x-4 translate-y-5 rounded-lg border border-white/70"
      />
      {failed ? (
        <div className="glass relative flex aspect-[7/8] w-full items-center justify-center rounded-lg font-mono text-4xl font-bold">
          {site.initials}
        </div>
      ) : (
        <img
          src={about.photo}
          alt={about.photoAlt}
          onError={() => setFailed(true)}
          className="relative aspect-[7/8] w-full rounded-lg object-cover"
        />
      )}
    </div>
  )
}

function TimelineList({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <SubsectionHeading>{title}</SubsectionHeading>
      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`}>
            <TimelineCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" title={about.title}>
      <div className="grid items-center gap-14 md:grid-cols-[auto_1fr] md:gap-20 md:px-6">
        <ProfilePhoto />

        <div className="flex flex-col">
          <div className="space-y-5 leading-relaxed tracking-wide text-zinc-200">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 flex items-center gap-3 tracking-wide text-zinc-200">
            <LuSparkles aria-hidden className="size-5 shrink-0 text-white" />
            <span>
              <strong className="font-semibold text-white">{about.interestsLabel}</strong>{' '}
              {about.interests.join(', ')}
            </span>
          </p>

          <a
            href={about.resume.url}
            target="_blank"
            rel="noreferrer"
            className="glass mt-10 self-center rounded-lg px-6 py-2 tracking-wide transition hover:-translate-y-0.5 hover:border-bright-purple/70"
          >
            {about.resume.label}
          </a>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-16">
        <TimelineList title={about.educationTitle} items={education} />
        <TimelineList title={about.experienceTitle} items={experience} />
      </div>
    </Section>
  )
}
