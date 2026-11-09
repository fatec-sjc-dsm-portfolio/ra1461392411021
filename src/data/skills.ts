import type { SkillCategory } from '@/types'

export const skillsSection = {
  title: 'Habilidades',
}

/** Items are keys from data/technologies.ts — add new technologies there first. */
export const skillCategories: SkillCategory[] = [
  { title: 'Linguagens', items: ['python', 'javascript', 'typescript', 'java'] },
  { title: 'Frontend', items: ['react', 'nextjs', 'tailwind', 'css', 'reactnative'] },
  { title: 'Backend', items: ['nodejs', 'django', 'nestjs', 'fastapi'] },
  { title: 'Banco de dados', items: ['mysql', 'postgresql', 'mongodb'] },
  { title: 'Ferramentas', items: ['docker', 'aws', 'git', 'figma'] },
]
