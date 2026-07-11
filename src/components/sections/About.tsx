import { motion } from 'framer-motion'
import { personal } from '@/data/personal'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { duration, easing } from '@/lib/motion'

export function About() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="about" ariaLabel="About Mark">
      <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-14 lg:gap-20">
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, ease: easing.smooth }}
        >
          <ProfilePhoto />
          <div className="mt-3 h-20 w-px bg-border md:h-28" aria-hidden />
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.reveal, ease: easing.smooth, delay: reduced ? 0 : 0.1 }}
        >
          <p className="text-mono mb-3 text-accent">About</p>
          <h2 className="text-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] text-text-primary">
            Building software with clarity and care
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-text-secondary">
            <p>
              I&apos;m {personal.name}, a {personal.title.toLowerCase()} studying computer science
              at {personal.education.school}. I care about systems that stay reliable under real
              constraints: linked devices, production codebases, and interfaces people actually use.
            </p>
            <p>
              Recently, I interned on WhatsApp Payments at Meta, working across Android companion
              sync and WhatsApp Web. Outside of internships, I build full-stack products, developer
              tools, and prototypes that let me explore how software feels in practice, not just in
              theory.
            </p>
            <p>
              I&apos;m looking for software engineering opportunities where I can keep learning
              from strong teams while contributing to meaningful, well-built systems.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
