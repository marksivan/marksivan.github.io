import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

const brandLinks = {
  meta: 'https://www.meta.com/',
  whatsapp: 'https://www.whatsapp.com/',
} as const

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

  return (
    <SectionWrapper id="experience" ariaLabel="Experience">
      <div className="mb-10 max-w-2xl">
        <p className="text-mono mb-3 text-accent">Experience</p>
        <h2 className="text-display text-[clamp(2rem,5vw,3rem)] font-bold text-text-primary">
          Where I&apos;ve built
        </h2>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
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
                  <a
                    key={brand}
                    href={brandLinks[brand]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                    aria-label={brand === 'meta' ? 'Meta (opens in new tab)' : 'WhatsApp (opens in new tab)'}
                  >
                    <BrandLogo brand={brandIcons[brand]} size={20} />
                  </a>
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
      </motion.div>
    </SectionWrapper>
  )
}
