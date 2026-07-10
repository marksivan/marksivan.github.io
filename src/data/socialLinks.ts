import type { SocialLink } from '@/types'
import { personal } from './personal'

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub profile',
    href: 'https://github.com/marksivan',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn profile',
    href: 'https://linkedin.com/in/mark-sivan/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Send email',
    href: `mailto:${personal.email}`,
    icon: 'email',
  },
  {
    id: 'resume',
    label: 'View résumé',
    href: personal.resumePath,
    icon: 'resume',
  },
]
