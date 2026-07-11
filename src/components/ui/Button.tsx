import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { hover, spring } from '@/lib/motion'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  magnetic?: boolean
  children: ReactNode
  href?: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg-primary font-semibold hover:bg-accent/90 border border-accent/20',
  secondary:
    'bg-bg-elevated text-text-primary border border-border hover:border-border-strong',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  outline:
    'border border-border text-text-primary hover:border-accent/40 hover:text-accent',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', magnetic = false, className, children, href, external, ...props }, ref) => {
    const reduced = useReducedMotion()
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm transition-colors min-h-[44px] min-w-[44px]',
      variants[variant],
      className,
    )

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          whileHover={reduced || !magnetic ? undefined : { scale: hover.scale }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
          transition={spring.snappy}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={reduced || !magnetic ? undefined : { scale: hover.scale }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={spring.snappy}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
