import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  wide?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabel,
  wide = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('section-padding', className)}
    >
      <div className={wide ? 'container-wide' : 'container'}>{children}</div>
    </section>
  )
}
