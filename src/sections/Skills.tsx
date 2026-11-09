import Section from '@/components/ui/Section'
import { skillCategories, skillsSection } from '@/data/skills'
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

export default function Skills() {
  return (
    <div className="bg-linear-to-b from-background to-dark-turquoise">
      <Section id="skills" title={skillsSection.title} className="pb-32">
        <dl className="flex flex-col gap-14">
          {skillCategories.map(({ title, items }) => (
            <div key={title} className="grid items-center gap-6 md:grid-cols-[13rem_1fr] md:gap-8">
              <dt className="font-mono text-sm font-bold tracking-[0.15em] uppercase md:text-center">
                {title}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-10 gap-y-7">
                  {items.map((tech) => (
                    <li key={tech}>
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
