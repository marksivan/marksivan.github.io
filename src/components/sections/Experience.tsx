import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { education } from '@/data/education'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

const cardHover = {
  y: -4,
  borderColor: 'rgba(46, 196, 160, 0.35)',
  boxShadow: '0 16px 32px -20px rgba(0, 0, 0, 0.45)',
}

function ExperienceCard({
  children,
  className,
  reduced,
}: {
  children: React.ReactNode
  className?: string
  reduced: boolean
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={reduced ? undefined : cardHover}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'border border-border bg-bg-surface p-5 transition-colors md:p-6',
        className,
      )}
    >
      {children}
    </motion.article>
  )
}

export function Experience() {
  const reduced = useReducedMotion()
  const williams = education[0]

  return (
    <SectionWrapper id="experience" ariaLabel="Experience">
      <div className="mb-10 max-w-2xl">
        <p className="text-mono mb-3 text-accent">Experience</p>
        <h2 className="text-display text-[clamp(2rem,5vw,3rem)] font-bold text-text-primary">
          Where I&apos;ve built
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          From campus support to payment infrastructure at Meta, with a computer science foundation
          at Williams College.
        </p>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
      >
        {experience.map((item) => (
          <ExperienceCard key={item.id} reduced={reduced}>
            <p className="text-mono text-[0.65rem] text-accent">Work</p>
            {item.brands && item.brands.length > 0 && (
              <div className="mt-3 flex gap-2">
                {item.brands.map((brand) => (
                  <BrandLogo key={brand} brand={brandIcons[brand]} size={20} />
                ))}
              </div>
            )}
            <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
              {item.organization}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{item.role}</p>
            {(item.location || item.period) && (
              <p className="mt-2 text-mono text-[0.6rem] text-text-muted">
                {[item.location, item.period].filter(Boolean).join(' · ')}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {item.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </ExperienceCard>
        ))}

        {williams && (
          <ExperienceCard reduced={reduced}>
            <p className="text-mono text-[0.65rem] text-accent">Education</p>
            <a
              href={williams.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2"
            >
              <img
                src={williams.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
            </a>
            <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
              <a
                href={williams.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                {williams.school}
                <ExternalLink size={14} className="text-text-muted" aria-hidden />
              </a>
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{williams.degree}</p>
            <p className="mt-2 text-mono text-[0.6rem] text-text-muted">
              {[williams.location, williams.period].filter(Boolean).join(' · ')}
            </p>
            <ul className="mt-4 space-y-2">
              {williams.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </ExperienceCard>
        )}
      </motion.div>
    </SectionWrapper>
  )
}
