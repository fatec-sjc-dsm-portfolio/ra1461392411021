import resumePdf from '@/assets/docs/resume.pdf'
import profilePhoto from '@/assets/images/profile.jpg'
import type { TimelineItem } from '@/types'

export const about = {
  title: 'Sobre mim',

  photo: profilePhoto,
  photoAlt: 'Foto de Karen Gonçalves',

  bio: [
    'Olá! Sou Karen, estudante de Desenvolvimento de Software Multiplataforma, atualmente no sexto semestre da graduação. Sou apaixonada por tecnologia e desenvolvimento de software, com experiência principalmente em React e Python.',
    'Busco constantemente aprimorar minhas habilidades, explorar novas tecnologias e desenvolver soluções escaláveis e eficientes que contribuam para resolver problemas reais.',
  ],

  interestsLabel: 'Interesses:',
  interests: ['Arte', 'Música', 'Jogos'],

  resume: {
    label: 'Ver Currículo',
    url: resumePdf,
  },

  educationTitle: 'Formação',
  experienceTitle: 'Experiência',
}

export const education: TimelineItem[] = [
  {
    title: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
    organization: 'FATEC Prof. Jessen Vidal',
    period: '2024 - atualmente',
    description:
      'Curso superior de tecnologia voltado ao desenvolvimento de sistemas web, mobile e desktop. Ao longo da formação, desenvolvi diversos projetos de Aprendizagem por Projetos Integrados (API), criando soluções para problemas reais em parceria com empresas parceiras da FATEC.',
  },
  {
    title: 'Técnica em Desenvolvimento de Sistemas',
    organization: 'ETEC Professora Ilza Nascimento Pintus',
    period: '2020 - 2023',
    description:
      'Curso técnico direcionado à lógica de programação, ao desenvolvimento de sistemas e a banco de dados. Formação que proporcionou a base para minha entrada no mercado de tecnologia e o ingresso na graduação em Desenvolvimento de Software Multiplataforma (DSM).',
  },
]

export const experience: TimelineItem[] = [
  {
    title: 'Desenvolvedora de Software Júnior',
    organization: 'Autaza',
    period: '2024 - atualmente',
    description:
      'Atuação no planejamento, prototipação e desenvolvimento full-stack de novas funcionalidades para os produtos da empresa, incluindo o desenvolvimento de uma solução de gerenciamento de licenças com impacto em todo o ecossistema de produtos da organização. Responsável também pelo suporte contínuo e pela customização de soluções tecnológicas, garantindo o atendimento às necessidades específicas dos clientes.',
  },
]
