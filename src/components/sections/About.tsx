import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'
import { WhirlBackground } from '@/components/ui/WhirlBackground'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { duration, easing } from '@/lib/motion'

export function About() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="about" ariaLabel="About Mark">
      <div className="relative flex min-h-[55vh] items-center">
        <WhirlBackground variant="section" />

        <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14 lg:gap-20">
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, ease: easing.smooth }}
          >
            <ProfilePhoto />
            <div className="mt-3 h-20 w-px bg-accent md:h-28" aria-hidden />
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: duration.reveal, ease: easing.smooth, delay: reduced ? 0 : 0.1 }}
          >
            <h1 className="text-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.08] text-text-primary">
              Hello, I&apos;m{' '}
              <span className="text-accent">Mark</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              I grew up in Accra, Ghana, and now study computer science at Williams College.
              I build software that stays clear, reliable, and useful when real people depend on it.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
