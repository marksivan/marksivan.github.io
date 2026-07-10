import { cn } from '@/lib/utils'

const foundationSvgs: Record<string, { viewBox: string; path: string; color: string }> = {
  'Data structures': {
    viewBox: '0 0 24 24',
    color: '#a855f7',
    path: 'M12 3 L4 8 L4 16 L12 21 L20 16 L20 8 Z M12 8 L8 10.5 L8 13.5 L12 16 L16 13.5 L16 10.5 Z',
  },
  Algorithms: {
    viewBox: '0 0 24 24',
    color: '#c084fc',
    path: 'M4 6 H10 V12 H4 Z M14 6 H20 V12 H14 Z M9 14 H15 V20 H9 Z M4 16 L10 12 M14 12 L20 16',
  },
  'Distributed synchronization': {
    viewBox: '0 0 24 24',
    color: '#8b5cf6',
    path: 'M6 12 A3 3 0 1 1 6 12 M12 6 A3 3 0 1 1 12 6 M18 12 A3 3 0 1 1 18 12 M12 18 A3 3 0 1 1 12 18 M8 10 L10 8 M14 8 L16 10 M16 14 L14 16 M10 16 L8 14',
  },
  Databases: {
    viewBox: '0 0 24 24',
    color: '#7c3aed',
    path: 'M4 6 C4 4 8 3 12 3 C16 3 20 4 20 6 V8 C20 10 16 11 12 11 C8 11 4 10 4 8 Z M4 12 V14 C4 16 8 17 12 17 C16 17 20 16 20 14 V12 M4 18 V20 C4 22 8 23 12 23 C16 23 20 22 20 20 V18',
  },
  'Computer architecture': {
    viewBox: '0 0 24 24',
    color: '#a78bfa',
    path: 'M7 7 H17 V17 H7 Z M9 9 H15 V11 H9 Z M9 13 H12 V15 H9 Z M14 13 H15 V15 H14 Z M4 9 H6 M4 12 H6 M18 9 H20 M18 12 H20 M9 4 V6 M12 4 V6 M15 4 V6 M9 18 V20 M12 18 V20 M15 18 V20',
  },
  'Artificial intelligence': {
    viewBox: '0 0 24 24',
    color: '#d8b4fe',
    path: 'M12 4 A2 2 0 1 1 12 4 M6 10 A2 2 0 1 1 6 10 M18 10 A2 2 0 1 1 18 10 M12 16 A2 2 0 1 1 12 16 M8 10 L10 12 M14 12 L16 10 M10 14 L12 16 M14 14 L12 16',
  },
}

interface FoundationIconProps {
  name: string
  size?: number
  className?: string
}

export function FoundationIcon({ name, size = 20, className }: FoundationIconProps) {
  const icon = foundationSvgs[name]

  if (!icon) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <path d={icon.path} fill="none" stroke={icon.color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export function isFoundationSkill(name: string): boolean {
  return name in foundationSvgs
}
