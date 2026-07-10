import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { principles } from '@/data/principles'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Principles() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <SectionWrapper id="principles" ariaLabel="Operating principles">
      <AnimatedHeading
        eyebrow="Principles"
        title="How I approach engineering"
      />

      <div ref={ref} className="relative">
        {/* Connecting line */}
        <div className="absolute top-8 right-0 left-0 hidden h-px bg-border md:block" aria-hidden>
          <motion.div
            className="h-full bg-accent/40"
            style={{ width: reduced ? '100%' : lineWidth }}
          />
        </div>

        <motion.ol
          className="grid gap-8 md:grid-cols-3 md:gap-6"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {principles.map((p, i) => (
            <motion.li
              key={p.id}
              className="surface relative p-6 md:p-8"
              variants={fadeUp}
            >
              <span className="text-mono text-[0.6rem] text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {p.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionWrapper>
  )
}
