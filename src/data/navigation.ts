import type { NavItem } from '@/types'
import { personal } from '@/data/personal'

export const navigation: NavItem[] = [
  { id: 'work', label: 'Work', hash: 'work' },
  { id: 'experience', label: 'Experience', hash: 'experience' },
  { id: 'about', label: 'About', hash: 'about' },
  { id: 'contact', label: 'Contact', hash: 'contact' },
  { id: 'resume', label: 'Résumé', href: personal.resumeUrl, external: true },
]

export const sectionIds = ['work', 'experience', 'about', 'skills', 'contact'] as const
