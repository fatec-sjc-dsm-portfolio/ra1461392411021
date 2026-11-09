import { useState } from 'react'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectModal from '@/components/projects/ProjectModal'
import Section from '@/components/ui/Section'
import SubsectionHeading from '@/components/ui/SubsectionHeading'
import { projects, projectsSection } from '@/data/projects'
import type { Project, ProjectType } from '@/types'

const groups: { type: ProjectType; title: string }[] = [
  { type: 'academic', title: projectsSection.academicTitle },
  { type: 'professional', title: projectsSection.professionalTitle },
]

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section id="projects" title={projectsSection.title}>
      <div className="flex flex-col gap-16">
        {groups.map(({ type, title }) => {
          const items = projects.filter((p) => p.type === type)
          if (items.length === 0) return null

          return (
            <div key={type}>
              <SubsectionHeading>{title}</SubsectionHeading>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((project) => (
                  <li key={project.id}>
                    <ProjectCard project={project} onOpen={setSelected} />
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
