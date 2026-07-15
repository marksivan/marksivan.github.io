import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'

const cardHover = {
  y: -4,
  borderColor: 'rgba(46, 196, 160, 0.35)',
  boxShadow: '0 16px 32px -20px rgba(0, 0, 0, 0.45)',
}

export function Education() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="education" ariaLabel="Education">
      <div className="mb-10 max-w-2xl">
        <p className="text-mono mb-3 text-accent">Education</p>
        <h2 className="text-display text-[clamp(2rem,5vw,3rem)] font-bold text-text-primary">
          Where I study
        </h2>
      </div>

      <motion.ul
        className="space-y-4"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        {education.map((item) => (
          <motion.li key={item.id} variants={fadeUp}>
            <motion.article
              whileHover={reduced ? undefined : cardHover}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border bg-bg-surface p-5 transition-colors md:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 transition-opacity hover:opacity-80"
                  aria-label={`${item.school} (opens in new tab)`}
                >
                  <img
                    src={item.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover"
                  />
                </a>

                <div className="min-w-0 flex-1">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-lg font-semibold text-text-primary transition-colors hover:text-accent"
                  >
                    {item.school}
                    <ExternalLink size={14} className="text-text-muted" aria-hidden />
                  </a>
                  <p className="mt-1 text-sm text-text-secondary">{item.degree}</p>
                  <p className="mt-2 text-mono text-[0.6rem] text-text-muted">
                    {[item.location, item.period].filter(Boolean).join(' · ')}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  )
}
