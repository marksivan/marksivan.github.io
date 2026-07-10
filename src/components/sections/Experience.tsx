import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '@/data/experience'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { WhirlBackground } from '@/components/ui/WhirlBackground'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function Experience() {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const signalY = useTransform(scrollYProgress, [0, 1], ['0%', '95%'])

  return (
    <SectionWrapper ariaLabel="Experience">
      <div className="relative">
        <WhirlBackground variant="section" />

        <AnimatedHeading
          eyebrow="Experience"
          title="A path through systems and support"
          subtitle="From campus technology support to payment infrastructure at scale."
        />

        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden
          />
          {/* Animated progress line */}
          <motion.div
            className="absolute top-0 left-[7px] w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-transparent md:left-1/2 md:-translate-x-px"
            style={{ height: reduced ? '100%' : lineHeight }}
            aria-hidden
          />
          {/* Traveling signal */}
          {!reduced && (
            <motion.div
              className="absolute left-[3px] z-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(168,85,247,0.6)] md:left-1/2 md:-translate-x-1/2"
              style={{ top: signalY }}
              aria-hidden
            />
          )}

          <motion.ol
            className="relative space-y-12 md:space-y-20"
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {experience.map((item, i) => (
              <motion.li
                key={item.id}
                className={cn(
                  'relative grid gap-4 md:grid-cols-2 md:gap-12',
                  i % 2 === 0 ? 'md:text-right' : '',
                )}
                variants={fadeUp}
                whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                initial={reduced ? {} : { opacity: 0.6, x: i % 2 === 0 ? -24 : 24 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute left-0 top-1 z-10 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg-primary md:left-1/2 md:-translate-x-1/2"
                  whileInView={reduced ? {} : { scale: [0.8, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  aria-hidden
                />

                <motion.div
                  className={cn(
                    'surface pl-8 md:pl-0 md:bg-transparent md:border-0 md:p-0',
                    i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12',
                  )}
                  whileHover={reduced ? {} : { y: -2 }}
                >
                  <p className="text-mono text-[0.65rem] text-accent">Work</p>
                  {item.brands && item.brands.length > 0 && (
                    <div
                      className={cn(
                        'mt-3 flex gap-2',
                        i % 2 === 0 ? 'md:justify-end' : 'md:justify-start',
                      )}
                    >
                      {item.brands.map((b) => (
                        <BrandLogo key={b} brand={brandIcons[b]} size={22} />
                      ))}
                    </div>
                  )}
                  <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
                    {item.organization}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.role}</p>
                  {(item.location || item.period) && (
                    <p className="mt-1 text-mono text-[0.6rem] text-text-muted">
                      {[item.location, item.period].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  className={cn(
                    'surface p-5 pl-8 md:pl-5',
                    i % 2 === 0 ? 'md:col-start-2 md:pl-12 md:surface-elevated' : 'md:pr-12',
                  )}
                  whileHover={reduced ? {} : { y: -2, borderColor: 'rgba(168, 85, 247, 0.25)' }}
                >
                  <ul className="space-y-2">
                    {item.highlights.map((h, hi) => (
                      <motion.li
                        key={h}
                        className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                        initial={reduced ? {} : { opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hi * 0.05 }}
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </SectionWrapper>
  )
}
