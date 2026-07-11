import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'meta',
    organization: 'Meta · WhatsApp Payments',
    role: 'Software Engineering Intern',
    location: 'Menlo Park, California',
    period: 'Summer 2026',
    type: 'work',
    brands: ['meta', 'whatsapp'],
    highlights: [
      'Built real-time synchronization for PIX keys across Android companion devices (Kotlin, Java).',
      'Designed and built the Payments Home for WhatsApp Web (React, JavaScript).',
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
]
