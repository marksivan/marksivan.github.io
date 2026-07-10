import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface WhirlBackgroundProps {
  className?: string
  variant?: 'hero' | 'section'
}

export function WhirlBackground({ className, variant = 'section' }: WhirlBackgroundProps) {
  const reduced = useReducedMotion()

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <svg
        className={cn(
          'absolute opacity-40',
          variant === 'hero' ? '-right-20 top-0 h-[120%] w-[70%]' : '-right-32 top-1/2 h-[80%] w-[55%] -translate-y-1/2',
          !reduced && 'animate-whirl-drift',
        )}
        viewBox="0 0 400 600"
        fill="none"
      >
        <path
          d="M50 300 Q120 80 280 120 T380 280 Q300 480 120 420 T50 300"
          stroke="url(#whirlGrad1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M80 320 Q160 140 300 180 T360 340 Q260 520 100 460 T80 320"
          stroke="url(#whirlGrad1)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M30 280 Q100 60 260 100 T360 260 Q280 460 100 400 T30 280"
          stroke="url(#whirlGrad2)"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />
        <defs>
          <linearGradient id="whirlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="whirlGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {variant === 'hero' && (
        <svg
          className={cn(
            'absolute -left-24 bottom-0 h-[60%] w-[45%] opacity-25',
            !reduced && 'animate-whirl-drift-reverse',
          )}
          viewBox="0 0 300 400"
          fill="none"
        >
          <path
            d="M20 200 Q80 40 200 80 T280 200 Q200 360 60 320 T20 200"
            stroke="#a855f7"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      )}
    </div>
  )
}
