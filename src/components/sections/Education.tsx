import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { WhirlBackground } from '@/components/ui/WhirlBackground'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Education() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper ariaLabel="Education">
      <div className="relative">
        <WhirlBackground variant="section" />

        <AnimatedHeading
          eyebrow="Education"
          title="Where I study"
          subtitle="A liberal arts foundation with a focus on computer science and systems thinking."
        />

        <motion.ul
          className="space-y-8"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {education.map((item) => (
            <motion.li key={item.id} variants={fadeUp}>
              <article className="surface p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group shrink-0"
                    aria-label={`${item.school} (opens in new tab)`}
                  >
                    <img
                      src={item.logo}
                      alt=""
                      width={72}
                      height={72}
                      className="rounded-xl transition-transform group-hover:scale-[1.02]"
                    />
                  </a>

                  <div className="min-w-0 flex-1">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-text-primary transition-colors hover:text-accent"
                    >
                      {item.school}
                      <ExternalLink size={18} className="text-text-muted" aria-hidden />
                    </a>
                    <p className="mt-2 text-sm text-text-secondary">{item.degree}</p>
                    <p className="mt-1 text-mono text-[0.65rem] text-text-muted">
                      {[item.location, item.period].filter(Boolean).join(' · ')}
                    </p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  )
}
