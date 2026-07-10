import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'meta',
    organization: 'Meta — WhatsApp Payments',
    role: 'Software Engineering Intern',
    location: 'Menlo Park, California',
    period: 'Summer 2025',
    type: 'work',
    highlights: [
      'Built real-time synchronization for PIX keys across Android companion devices.',
      'Worked with Kotlin, Java, XMPP, and SyncD.',
      'Investigated architecture and participated in design reviews with senior engineers.',
      'Contributed to payment experiences across mobile and web surfaces.',
    ],
  },
  {
    id: 'oit',
    organization: 'Williams College OIT',
    role: 'Technology Assistant',
    location: 'Williamstown, Massachusetts',
    type: 'work',
    highlights: [
      'Supported students and faculty across Windows and macOS environments.',
      'Resolved operating-system, driver, authentication, and application problems.',
      'Assisted more than 200 students with Okta Verify enrollment and account access.',
    ],
  },
  {
    id: 'williams',
    organization: 'Williams College',
    role: 'B.A. candidate in Computer Science',
    location: 'Williamstown, Massachusetts',
    period: 'Expected June 2028',
    type: 'education',
    highlights: [
      'Data structures',
      'Algorithms',
      'Artificial intelligence',
      'Computer organization',
      'Statistics',
      'Linear algebra',
      'Discrete mathematics',
    ],
  },
]
