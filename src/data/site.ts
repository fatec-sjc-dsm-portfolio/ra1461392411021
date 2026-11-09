import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuCodeXml, LuFolders, LuMail, LuUser } from 'react-icons/lu'
import type { NavLink, SocialLink } from '@/types'

export const site = {
  name: 'Karen Gonçalves',
  initials: 'KG',
  email: 'karencssgoncalves@gmail.com',
}

export const hero = {
  greeting: 'Olá! Me chamo',
  rolePrefix: 'Sou',
  role: 'Desenvolvedora de Software',
  scrollHint: 'Desça para explorar',
}

export const navLinks: NavLink[] = [
  { label: 'Sobre', href: '#about', icon: LuUser },
  { label: 'Projetos', href: '#projects', icon: LuFolders },
  { label: 'Habilidades', href: '#skills', icon: LuCodeXml },
]

const github: SocialLink = { label: 'GitHub', href: 'https://github.com/karengoncalves8', icon: FaGithub }
const linkedin: SocialLink = { label: 'LinkedIn', href: 'https://linkedin.com/in/karen-cgoncalves', icon: FaLinkedin }
const email: SocialLink = { label: 'E-mail', href: `mailto:${site.email}`, icon: LuMail }

export const socialLinks: SocialLink[] = [github, linkedin, email]

export const footer = {
  socialLinks: [github, linkedin, email] satisfies SocialLink[],
  copyright: `© ${new Date().getFullYear()}, ${site.name}`,
}
