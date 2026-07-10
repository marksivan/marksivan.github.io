import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function Experience() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper ariaLabel="Experience and education">
      <AnimatedHeading
        eyebrow="Experience"
        title="A path through systems and support"
        subtitle="From campus technology support to payment infrastructure at scale."
      />

      <div className="relative">
        <div
          className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        <motion.ol
          className="relative space-y-12 md:space-y-16"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
            >
              <div
                className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg-primary md:left-1/2 md:-translate-x-1/2"
                aria-hidden
              />

              <div className={cn('pl-8 md:pl-0', i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12')}>
                <p className="text-mono text-[0.65rem] text-accent">
                  {item.type === 'education' ? 'Education' : 'Work'}
                </p>
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
              </div>

              <div className={cn('pl-8 md:pl-0', i % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:pr-12')}>
                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-text-secondary leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionWrapper>
  )
}
