import atmosImg from '@/assets/images/Atmos.png'
import beeOnTimeImg from '@/assets/images/BeeOnTime.png'
import cloudStockImg from '@/assets/images/CloudStock.png'
import smartFarmImg from '@/assets/images/SmartFarm.png'
import vereditoImg from '@/assets/images/Veredito.png'
import surfaceImg from '@/assets/images/Surface.png'
import type { Project } from '@/types'

export const projectsSection = {
  title: 'Projetos',
  academicTitle: 'Acadêmicos',
  professionalTitle: 'Profissionais',
  contributionLabel: 'Contribuição pessoal',
  softSkillsLabel: 'Soft skills',
  hardSkillsLabel: 'Hard skills',
  repoLabel: 'Ver projeto',
  liveLabel: 'Ver online',
  repoIconLabel: 'Repositório no GitHub',
  closeLabel: 'Fechar',
}

/**
 * Add a project by copying an entry.
 * `type` decides whether it shows under "Acadêmicos" or "Profissionais".
 * Images: put the file in src/assets/images/, import it at the top, and use the import as `image`.
 */
export const projects: Project[] = [
  {
    id: 'smart-farm',
    title: 'SmartFarm',
    type: 'academic',
    category: 'Website',
    description:
      'Desenvolvimento de uma plataforma web para monitorar as condições ambientais de estufas inteligentes por meio da coleta de dados em tempo real e gráficos interativos, substituindo processos manuais de análise de dados.',
    contribution:
      'Responsável pelo desenvolvimento do frontend e pelo protótipo inicial da aplicação. Dei suporte à equipe com HTML e CSS e contribuí para o desenvolvimento do backend, implementando rotas de API para recuperar os dados utilizados na visualização dos gráficos.',
    softSkills:
      'Colaboração em equipe, comunicação clara e didática, compartilhamento de conhecimento, proatividade no aprendizado de novas tecnologias, adaptabilidade a diferentes níveis de conhecimento técnico e gestão de tempo.',
    technologies: [
      'python',
      'flask',
      'html',
      'css',
      'mysql',
    ],
    image: smartFarmImg,
    repoUrl: 'https://github.com/SkyFlyTeam/SmartFarm',
  },
  {
    id: 'cloud-stock',
    title: 'CloudStock',
    type: 'academic',
    category: 'Website',
    description:
      'Desenvolvimento de um sistema web de gerenciamento de estoque projetado para automatizar o cadastro de produtos e fornecedores, a movimentação de estoque, a geração de relatórios e as notificações automáticas, aprimorando o controle de inventário e a eficiência operacional.',
    contribution:
      'Responsável pelo desenvolvimento tanto do frontend quanto do backend. Participei da modelagem do banco de dados e das discussões sobre os requisitos, além de implementar funcionalidades essenciais, incluindo um sistema de notificações utilizando triggers de banco de dados e WebSockets.',
    softSkills:
      'Colaboração em equipe e compartilhamento de conhecimento, comunicação transparente por meio de reuniões diárias, proatividade na resolução de problemas, desenvolvimento de componentes reutilizáveis, organização, gestão de tempo e adaptabilidade a demandas urgentes.',
    technologies: [
      'typescript',
      'react',
      'nodejs',
      'express',
      'mysql'
    ],
    image: cloudStockImg,
    repoUrl: 'https://github.com/SkyFlyTeam/cloudStock',
  },
  {
    id: 'beeontime',
    title: 'BeeOnTime',
    type: 'academic',
    category: 'Website',
    description:
      'Desenvolvimento de uma plataforma moderna e responsiva de controle eletrônico de ponto, que automatiza os registros de jornada dos colaboradores, o gerenciamento de horas extras, as solicitações de folgas, o acompanhamento de férias e a geração de relatórios.',
    contribution:
      'Responsável pela modelagem do banco de dados, definição da arquitetura de microsserviços e desenvolvimento tanto do frontend quanto do backend. Implementei uma das principais funcionalidades do sistema: o registro eletrônico de ponto, incluindo o cálculo e armazenamento das horas trabalhadas pelos colaboradores. Também gerenciei o banco de dados MongoDB, garantindo a consistência e o desempenho na manipulação das informações.',
    softSkills:
      'Compartilhamento colaborativo de conhecimento, comunicação clara por meio de reuniões diárias e planejamento de sprints, proatividade na resolução de problemas, organização, gestão eficiente de tarefas, adaptabilidade às mudanças nos requisitos do cliente e comprometimento com os prazos.',
    technologies: [
      'typescript',
      'react',
      'nodejs',
      'express',
      'java',
      'springboot',
      'mongodb'
    ],
    image: beeOnTimeImg,
    repoUrl: 'https://github.com/SkyFlyTeam/beeOnTime-documentation',
  },
  {
    id: 'atmos',
    title: 'Atmos',
    type: 'academic',
    category: 'Website',
    description:
      'Desenvolvimento de uma plataforma de monitoramento meteorológico em parceria com a Tecsus, uma empresa de IoT. O sistema coleta e apresenta dados de estações meteorológicas em tempo real, fornece alertas de risco e oferece dashboards, gráficos, relatórios mensais e ferramentas administrativas para gerenciamento das estações e monitoramento de parâmetros.',
    contribution:
      'Contribuí para o desenvolvimento de funcionalidades essenciais, incluindo a geração de alertas com base nos dados coletados pelos sensores e a implementação do dashboard da aplicação. Também fui responsável pela implementação de testes de integração, garantindo que o sistema funcionasse conforme o esperado.',
    softSkills:
      'Colaboração em equipe e compartilhamento de conhecimento, comunicação eficiente por meio de reuniões diárias e planejamento de sprints, proatividade na execução de responsabilidades adicionais, adaptabilidade e comprometimento com a entrega de resultados de qualidade dentro dos prazos.',
    technologies: [
      'typescript',
      'react',
      'nodejs',
      'python',
      'arduino',
      'mongodb',
    ],
    image: atmosImg,
    repoUrl: 'https://github.com/SkyFlyTeam/Atmos-documentation',
  },
  {
    id: 'veredito',
    title: 'Veredito',
    type: 'academic',
    category: 'Aplicativo Mobile',
    description:
      'Desenvolvimento de um aplicativo mobile voltado para magistrados e suas equipes, com o objetivo de automatizar a análise de petições iniciais e identificar precedentes jurídicos relevantes. A plataforma utiliza modelos de linguagem para resumir documentos, classificar precedentes por similaridade, avaliar sua aplicabilidade e gerar minutas de documentos jurídicos.',
    contribution:
      'Atuei como Product Owner pela primeira vez, sendo responsável pela comunicação direta com o cliente, levantamento e documentação dos requisitos do sistema e garantia de que a solução atendesse às necessidades apresentadas. Desenvolvi o wireframe completo da aplicação e sua identidade visual, incluindo uma logo original. Também apresentei ao time o padrão Clean Architecture para o desenvolvimento do frontend.',
    softSkills:
      'Comunicação eficiente com equipes técnicas e clientes, gerenciamento de requisitos, proatividade na pesquisa e introdução de novas tecnologias, tomada de decisões colaborativa e capacidade de transformar requisitos complexos em tarefas de desenvolvimento claras.',
    technologies: [
      'flutter',
      'dart',
      'nodejs',
      'nestjs',
      'postgresql'
    ],
    image: vereditoImg,
    repoUrl: 'https://github.com/SkyFlyTeam/veredito-documentation',
  },
  {
    id: "surface",
    title: "Surface",
    type: "professional",
    category: "Desktop",
    description: 
      "Programa destinado à detecção de não conformidades em malhas virtuais, por meio da avaliação de desvios em padrões de franjas em relação a critérios predefinidos. A aplicação permite que os usuários carreguem e sobreponham imagens de referência e imagens avaliadas, além de medir automaticamente os desvios entre as imagens e entre as franjas correspondentes nas áreas selecionadas.",
    contribution: 
      "Responsável pelo desenvolvimento do frontend e backend do software, implementando algoritmos de análise utilizando visão computacional. Também participei da definição da arquitetura do sistema e da criação de interfaces intuitivas para os usuários.",
    softSkills:
      "Colaboração em equipe, comunicação clara e objetiva, resolução de problemas complexos, proatividade na pesquisa de novas tecnologias e metodologias, adaptabilidade a mudanças nos requisitos do projeto e gestão eficiente do tempo.",
    technologies: [
      "python",
      "pyside",
      "opencv"
    ],
    image: surfaceImg,
  },
];