import Section from '@/components/ui/Section'
import { highLevelAbilities, skillCategories, skillsSection } from '@/data/skills'
import { stagger } from '@/lib/reveal'
import { technologies, type TechKey } from '@/data/technologies'
import type { Technology } from '@/types'

function Skill({ tech }: { tech: TechKey }) {
  const { label, logo, icon: Icon }: Technology = technologies[tech]

  return (
    <div className="group flex items-center gap-3">
      {logo ? (
        <img
          src={logo}
          alt=""
          loading="lazy"
          className="size-9 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
        />
      ) : (
        Icon && <Icon aria-hidden className="size-9 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span className="text-lg font-semibold tracking-wider">{label}</span>
    </div>
  )
}

function HighLevelAbilities() {
  return (
    <ul className="mb-16 grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-16">
      {highLevelAbilities.map(({ title, description, icon: Icon }, i) => (
        <li
          key={title}
          data-reveal
          style={stagger(i, 150)}
          className="glass flex flex-col gap-6 rounded-2xl px-7 py-8 transition duration-300 hover:-translate-y-1 hover:border-bright-purple/70"
        >
          <h3 className="flex items-center gap-3 font-semibold tracking-wide">
            <Icon aria-hidden className="mt-0.5 size-7 shrink-0" />
            <span>{title}</span>
          </h3>
          <p className="text-xs leading-relaxed text-zinc-100">{description}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <div className="bg-linear-to-b from-background to-dark-turquoise">
      <Section id="skills" title={skillsSection.title} className="pb-32">
        <HighLevelAbilities />
        <dl className="flex flex-col gap-14">
          {skillCategories.map(({ title, items }) => (
            <div key={title} className="grid items-center gap-6 md:grid-cols-[13rem_1fr] md:gap-8">
              <dt data-reveal="left" className="font-mono text-sm font-bold tracking-[0.15em] uppercase md:text-center">
                {title}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-10 gap-y-7">
                  {items.map((tech, i) => (
                    <li key={tech} data-reveal="right" style={stagger(i + 1, 80)}>
                      <Skill tech={tech} />
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  )
}
