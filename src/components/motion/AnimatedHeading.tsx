import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function FadeIn({ children, className, delay = 0, as = 'div' }: FadeInProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ delay: reduced ? 0 : delay }}
    >
      {children}
    </Component>
  )
}

interface StaggerGroupProps {
  children: React.ReactNode
  className?: string
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function AnimatedHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: AnimatedHeadingProps) {
  const reduced = useReducedMotion()

  return (
    <motion.header
      className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      {eyebrow && (
        <motion.p
          className="text-mono mb-4 text-accent"
          variants={titleVariants}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="text-display text-[clamp(2rem,5vw,3.25rem)] font-bold text-text-primary"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 max-w-2xl text-lg text-text-secondary"
          variants={titleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  )
}
