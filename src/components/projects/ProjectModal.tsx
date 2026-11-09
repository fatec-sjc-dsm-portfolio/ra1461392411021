import type { ReactNode } from 'react'
import { FaGithub } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'
import ProjectImage from '@/components/projects/ProjectImage'
import Modal from '@/components/ui/Modal'
import { TechTagList } from '@/components/ui/TechTag'
import { projectsSection as labels } from '@/data/projects'
import type { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

function DetailBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h3 className="mb-3 text-sm font-bold tracking-[0.12em] uppercase">{title}</h3>
      {children}
    </section>
  )
}

const linkClass =
  'glass inline-flex items-center gap-3 rounded-xl px-6 py-2.5 text-sm tracking-wide transition hover:-translate-y-0.5 hover:border-bright-purple/70'

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal open={project !== null} onClose={onClose} title={project?.title ?? ''} closeLabel={labels.closeLabel}>
      {project && (
        <>
          <ProjectImage
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            className="aspect-video w-full rounded-lg"
          />

          <p className="mt-6 text-sm leading-relaxed tracking-wide text-zinc-300">
            {project.details ?? project.description}
          </p>

          <DetailBlock title={labels.contributionLabel}>
            <p className="text-sm leading-relaxed tracking-wide text-zinc-300">{project.contribution}</p>
          </DetailBlock>

          <DetailBlock title={labels.softSkillsLabel}>
            <p className="text-sm leading-relaxed tracking-wide text-zinc-300">{project.softSkills}</p>
          </DetailBlock>

          <DetailBlock title={labels.hardSkillsLabel}>
            <TechTagList items={project.technologies} />
          </DetailBlock>

          {(project.repoUrl || project.liveUrl) && (
            <div className="mt-10 flex flex-wrap justify-end gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  <LuExternalLink aria-hidden className="size-5" />
                  {labels.liveLabel}
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  <FaGithub aria-hidden className="size-5" />
                  {labels.repoLabel}
                </a>
              )}
            </div>
          )}
        </>
      )}
    </Modal>
  )
}
