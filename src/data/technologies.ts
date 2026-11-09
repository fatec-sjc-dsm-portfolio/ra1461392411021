import cssLogo from 'devicon/icons/css3/css3-original.svg'
import dockerLogo from 'devicon/icons/docker/docker-original.svg'
import fastapiLogo from 'devicon/icons/fastapi/fastapi-original.svg'
import gitLogo from 'devicon/icons/git/git-original.svg'
import htmlLogo from 'devicon/icons/html5/html5-original.svg'
import javaLogo from 'devicon/icons/java/java-original.svg'
import javascriptLogo from 'devicon/icons/javascript/javascript-original.svg'
import mongodbLogo from 'devicon/icons/mongodb/mongodb-original.svg'
import mysqlLogo from 'devicon/icons/mysql/mysql-original.svg'
import nestjsLogo from 'devicon/icons/nestjs/nestjs-original.svg'
import nextjsLogo from 'devicon/icons/nextjs/nextjs-original.svg'
import nodejsLogo from 'devicon/icons/nodejs/nodejs-original.svg'
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-original.svg'
import pythonLogo from 'devicon/icons/python/python-original.svg'
import reactLogo from 'devicon/icons/react/react-original.svg'
import tailwindLogo from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import typescriptLogo from 'devicon/icons/typescript/typescript-original.svg'
import figmaLogo from 'devicon/icons/figma/figma-original.svg'
import { FaAws, FaJava } from 'react-icons/fa'
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiExpress,
  SiSpringboot,
  SiArduino,
  SiDart,
  SiFlutter,
} from 'react-icons/si'
// Local copies recolored to be visible on the dark background.
import awsLogo from '@/assets/logos/aws.svg'
import djangoLogo from '@/assets/logos/django.svg'
import type { Technology } from '@/types'

/**
 * Every technology the site can show. Projects and the Skills section reference these by key.
 * - `icon`: small monochrome icon used in the project tags (optional).
 * - `logo`: full-color logo used in the Skills section (optional — falls back to `icon`).
 *   Colored logos come from the `devicon` package: node_modules/devicon/icons/<name>/.
 */
export const technologies = {
  aws: { label: 'AWS', icon: FaAws, logo: awsLogo },
  css: { label: 'CSS', icon: SiCss, logo: cssLogo },
  django: { label: 'Django', icon: SiDjango, logo: djangoLogo },
  docker: { label: 'Docker', icon: SiDocker, logo: dockerLogo },
  fastapi: { label: 'FastAPI', icon: SiFastapi, logo: fastapiLogo },
  figma: { label: 'Figma', icon: SiFigma, logo: figmaLogo },
  flask: { label: 'Flask', icon: SiFlask },
  git: { label: 'Git', icon: SiGit, logo: gitLogo },
  html: { label: 'HTML', icon: SiHtml5, logo: htmlLogo },
  java: { label: 'Java', icon: FaJava, logo: javaLogo },
  javascript: { label: 'JavaScript', icon: SiJavascript, logo: javascriptLogo },
  mongodb: { label: 'MongoDB', icon: SiMongodb, logo: mongodbLogo },
  mysql: { label: 'MySQL', icon: SiMysql, logo: mysqlLogo },
  nestjs: { label: 'NestJS', icon: SiNestjs, logo: nestjsLogo },
  nextjs: { label: 'NextJS', icon: SiNextdotjs, logo: nextjsLogo },
  nodejs: { label: 'NodeJS', icon: SiNodedotjs, logo: nodejsLogo },
  postgresql: { label: 'PostgreSQL', icon: SiPostgresql, logo: postgresqlLogo },
  python: { label: 'Python', icon: SiPython, logo: pythonLogo },
  react: { label: 'React', icon: SiReact, logo: reactLogo },
  reactnative: { label: 'React Native', icon: SiReact, logo: reactLogo },
  tailwind: { label: 'Tailwind', icon: SiTailwindcss, logo: tailwindLogo },
  typescript: { label: 'TypeScript', icon: SiTypescript, logo: typescriptLogo },
  vite: { label: 'Vite', icon: SiVite },
  express: { label: 'Express', icon: SiExpress },
  springboot: { label: 'Spring Boot', icon: SiSpringboot },
  arduino: { label: 'Arduino', icon: SiArduino },
  dart: { label: 'Dart', icon: SiDart },
  flutter: { label: 'Flutter', icon: SiFlutter },
  pyside: { label: 'PySide', icon: SiPython },
  opencv: { label: 'OpenCV', icon: SiPython },
} satisfies Record<string, Technology>

export type TechKey = keyof typeof technologies
