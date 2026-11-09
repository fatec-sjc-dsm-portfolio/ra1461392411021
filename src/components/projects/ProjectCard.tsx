import { FaGithub } from 'react-icons/fa'
import ProjectImage from '@/components/projects/ProjectImage'
import { TechTagList } from '@/components/ui/TechTag'
import { projectsSection } from '@/data/projects'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { title, category, description, technologies, image, repoUrl } = project

  return (
    <article className="group glass relative flex h-full flex-col rounded-2xl p-2.5 transition duration-300 hover:-translate-y-1 hover:border-bright-purple/70 has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-bright-purple">
      <div className="overflow-hidden rounded-xl">
        <ProjectImage
          src={image}
          alt={`Captura de tela do projeto ${title}`}
          className="aspect-[16/10] w-full transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-sm font-semibold tracking-wider">
            {/* The ::after stretches over the whole card, making it clickable. */}
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
            >
              {title}
            </button>
          </h4>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${projectsSection.repoIconLabel}: ${title}`}
              className="relative z-10 text-zinc-200 transition-colors hover:text-bright-purple"
            >
              <FaGithub className="size-4" />
            </a>
          )}
        </div>

        <p className="mt-3 text-xs font-bold tracking-[0.15em] text-bright-purple uppercase">{category}</p>

        <p className="mt-3 mb-4 text-xs leading-relaxed tracking-wide text-zinc-300">{description}</p>

        <TechTagList items={technologies} className="mt-auto" />
      </div>
    </article>
  )
}
