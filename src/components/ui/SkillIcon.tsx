import type { SimpleIcon } from 'simple-icons'
import { getSkillIcon } from '@/lib/skillIcons'
import { cn } from '@/lib/utils'

interface SkillIconProps {
  name: string
  size?: number
  className?: string
}

export function SkillIcon({ name, size = 18, className }: SkillIconProps) {
  const icon = getSkillIcon(name)

  if (!icon) {
    return (
      <span
        className={cn(
          'inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-border text-[0.55rem] font-mono text-text-muted',
          className,
        )}
        aria-hidden
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn('shrink-0', className)}
      aria-label={icon.title}
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}

interface BrandLogoProps {
  brand: SimpleIcon
  size?: number
  className?: string
  label?: string
}

export function BrandLogo({ brand, size = 28, className, label }: BrandLogoProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-border bg-bg-elevated p-2',
        className,
      )}
      title={label ?? brand.title}
    >
      <svg
        role="img"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-label={label ?? brand.title}
      >
        <path d={brand.path} fill={`#${brand.hex}`} />
      </svg>
    </div>
  )
}
