import { LuLayers, LuMousePointerClick, LuSquareTerminal } from 'react-icons/lu'
import type { HighLevelAbility, SkillCategory } from '@/types'

export const skillsSection = {
  title: 'Habilidades',
}

export const highLevelAbilities: HighLevelAbility[] = [
  {
    title: 'Design de interfaces centrado no usuário',
    description:
      'Pesquisa, prototipação e criação de interfaces intuitivas e acessíveis, do wireframe ao protótipo de alta fidelidade, sempre partindo das necessidades reais de quem vai usar.',
    icon: LuMousePointerClick,
  },
  {
    title: 'Planejamento de arquitetura de software',
    description:
      'Definição da estrutura de sistemas escaláveis e de fácil manutenção: organização em camadas, modelagem de dados e escolha das tecnologias adequadas a cada problema.',
    icon: LuLayers,
  },
  {
    title: 'Desenvolvimento full stack de ponta a ponta',
    description:
      'Transformação de designs e arquiteturas em aplicações funcionais, integrando front-end, back-end e banco de dados com código limpo e testado.',
    icon: LuSquareTerminal,
  },
]

/** Items are keys from data/technologies.ts — add new technologies there first. */
export const skillCategories: SkillCategory[] = [
  { title: 'Linguagens', items: ['python', 'javascript', 'typescript', 'java'] },
  { title: 'Frontend', items: ['react', 'nextjs', 'tailwind', 'css', 'reactnative'] },
  { title: 'Backend', items: ['nodejs', 'django', 'nestjs', 'fastapi'] },
  { title: 'Banco de dados', items: ['mysql', 'postgresql', 'mongodb'] },
  { title: 'Ferramentas', items: ['docker', 'aws', 'git', 'figma'] },
]
