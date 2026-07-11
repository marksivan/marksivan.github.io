import type { NavItem } from '@/types'

export const navigation: NavItem[] = [
  { id: 'work', label: 'Work', hash: 'work' },
  { id: 'experience', label: 'Experience', hash: 'experience' },
  { id: 'about', label: 'About', hash: 'about' },
  { id: 'contact', label: 'Contact', hash: 'contact' },
]

export const sectionIds = ['work', 'experience', 'about', 'skills', 'contact'] as const
