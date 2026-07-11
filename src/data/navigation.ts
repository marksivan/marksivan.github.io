import type { NavItem } from '@/types'

export const navigation: NavItem[] = [
  { id: 'about', label: 'About', hash: 'about' },
  { id: 'work', label: 'Work', hash: 'work' },
  { id: 'experience', label: 'Experience', hash: 'experience' },
  { id: 'contact', label: 'Contact', hash: 'contact' },
]

export const sectionIds = ['about', 'work', 'experience', 'skills', 'contact'] as const
