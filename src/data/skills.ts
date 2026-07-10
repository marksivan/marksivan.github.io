import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'R', 'PHP', 'Assembly'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'AWT', 'Swing'],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'REST APIs'],
  },
  {
    id: 'mobile',
    label: 'Mobile & Systems',
    items: ['Kotlin', 'Java', 'Android', 'XMPP', 'SyncD'],
  },
  {
    id: 'foundations',
    label: 'Foundations',
    items: [
      'Data structures',
      'Algorithms',
      'Distributed synchronization',
      'Databases',
      'Computer architecture',
      'Artificial intelligence',
    ],
  },
]
