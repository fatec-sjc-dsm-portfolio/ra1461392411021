# Portfólio — Karen Gonçalves

Portfólio pessoal de página única, com seções de apresentação, sobre mim, projetos e habilidades.

Feito com **React**, **Vite**, **TypeScript** e **Tailwind CSS**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19 ou superior** (recomendado: versão LTS mais recente)
- npm (já vem junto com o Node.js)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Como rodar o projeto

1. **Clone o repositório**

   ```bash
   git clone https://github.com/fatec-sjc-dsm-portfolio/ra1461392411021.git
   cd ra1461392411021
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal (normalmente <http://localhost:5173>).

   As alterações no código aparecem automaticamente na página, sem precisar recarregar.

## Scripts disponíveis

| Comando           | O que faz                                                          |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento                               |
| `npm run build`   | Verifica os tipos e gera a versão de produção na pasta `dist/`     |
| `npm run preview` | Serve localmente a versão gerada pelo `build`, para testá-la       |
| `npm run lint`    | Analisa o código em busca de erros e más práticas (Oxlint)         |

## Estrutura de pastas

```
src/
├── assets/          Imagens, logos e o currículo (PDF)
├── components/
│   ├── layout/      Header (navbar) e Footer
│   ├── projects/    Card, modal e imagem dos projetos
│   └── ui/          Componentes reutilizáveis (Section, Modal, TechTag...)
├── data/            Todo o conteúdo do site (textos, links, projetos, habilidades)
├── sections/        Seções da página: Hero, About, Projects, Skills
├── types/           Tipos TypeScript
├── App.tsx          Monta a página com as seções
└── index.css        Tailwind, cores, fontes, animações e efeito de vidro
```

## Editando o conteúdo

Todo o texto do site fica na pasta `src/data/`, então não é preciso mexer nos componentes:

| Arquivo           | Conteúdo                                                        |
| ----------------- | --------------------------------------------------------------- |
| `site.ts`         | Nome, e-mail, textos do topo, links da navbar e redes sociais   |
| `about.ts`        | Sobre mim, foto, currículo, formação e experiência              |
| `projects.ts`     | Projetos acadêmicos e profissionais                             |
| `skills.ts`       | Categorias e tecnologias da seção de habilidades                |
| `technologies.ts` | Lista de tecnologias (nome, ícone e logo) usada no site inteiro |

### Adicionando imagens ou arquivos

1. Coloque o arquivo em `src/assets/` (por exemplo, `src/assets/images/MeuProjeto.png`).
2. Importe-o no topo do arquivo de dados:

   ```ts
   import meuProjetoImg from '@/assets/images/MeuProjeto.png'
   ```

3. Use a importação no lugar do caminho: `image: meuProjetoImg`.

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) e [Devicon](https://devicon.dev/) para ícones e logos
- Fontes [Inter](https://fonts.google.com/specimen/Inter) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)
