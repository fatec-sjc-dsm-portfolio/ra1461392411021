import type { IconType } from 'react-icons'
import type { TechKey } from '@/data/technologies'

export interface Technology {
  label: string
  icon?: IconType
  /** URL of a full-color logo (imported .svg). */
  logo?: string
}

export interface SkillCategory {
  title: string
  items: TechKey[]
}

export type ProjectType = 'academic' | 'professional'

export interface Project {
  /** Unique, URL-friendly id, e.g. 'smart-farm'. */
  id: string
  title: string
  type: ProjectType
  /** Small purple label on the card, e.g. 'Website', 'Mobile', 'API'. */
  category: string
  /** Short text shown on the card. */
  description: string
  /** Longer text for the modal. Falls back to `description` when omitted. */
  details?: string
  contribution: string
  softSkills: string
  technologies: TechKey[]
  /** Imported image, e.g. `import img from '@/assets/images/SmartFarm.png'`. */
  image?: string
  repoUrl?: string
  liveUrl?: string
}

/** An entry in the "Formação" or "Experiência" lists. */
export interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
}

export interface NavLink {
  label: string
  href: string
  icon: IconType
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}
