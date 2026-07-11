export interface SocialLink {
  id: string
  label: string
  href: string
  icon: 'github' | 'linkedin'
}

export interface NavItem {
  id: string
  label: string
  path: string
}

export interface ProjectLink {
  type: 'github' | 'live' | 'professional'
  label: string
  href?: string
}

export interface ProjectCaseStudy {
  overview: string
  problem: string
  role: string
  approach: string
  challenges: string
  outcome: string
}

export interface Project {
  id: string
  slug: string
  category: string
  title: string
  description: string
  highlights: string[]
  technologies: string[]
  links: ProjectLink[]
  visual: 'pix-sync' | 'storystack' | 'smart-clerk' | 'trivia' | 'flixster'
  screenshot?: string
  imageHref?: string
  caseStudyHref?: string
  layout: 'left' | 'right'
  brands?: ('meta' | 'whatsapp')[]
  caseStudy?: ProjectCaseStudy
}

export interface ExperienceItem {
  id: string
  organization: string
  role: string
  location?: string
  period?: string
  highlights: string[]
  type: 'work' | 'education'
  brands?: ('meta' | 'whatsapp')[]
}

export interface EducationItem {
  id: string
  school: string
  degree: string
  location: string
  period: string
  href: string
  logo: string
  highlights: string[]
}

export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface Principle {
  id: string
  title: string
  description: string
}

export interface HobbyPhoto {
  id: string
  src: string
  alt: string
  caption?: string
}

export interface Hobby {
  id: string
  name: string
  description: string
  photos: HobbyPhoto[]
}
