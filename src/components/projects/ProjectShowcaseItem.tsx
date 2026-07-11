import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/types'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { ProjectVisual } from './ProjectVisual'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/motion'

const brandLinks = {
  meta: 'https://www.meta.com/',
  whatsapp: 'https://www.whatsapp.com/',
} as const

interface ProjectShowcaseItemProps {
  project: Project
  index: number
  compact?: boolean
}

export function ProjectShowcaseItem({ project, index, compact = false }: ProjectShowcaseItemProps) {
  const reduced = useReducedMotion()
  const isReversed = project.layout === 'right'
  const imageOnLeft = isReversed
  const hingeOrigin = imageOnLeft ? 'left center' : 'right center'
  const hoverRotateY = imageOnLeft ? 10 : -10
  const highlights = compact ? project.highlights.slice(0, 3) : project.highlights

  const visual = (
    <ProjectVisual project={project} />
  )

  const imageFrame = (
    <div className="perspective-[1400px]">
      <motion.div
        className="rounded-lg will-change-transform"
        style={{ transformOrigin: hingeOrigin, transformStyle: 'preserve-3d' }}
        whileHover={
          reduced
            ? undefined
            : {
                rotateY: hoverRotateY,
                rotateX: imageOnLeft ? -1.5 : 1.5,
                boxShadow: '0 24px 48px -16px rgba(0, 0, 0, 0.45)',
              }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {project.imageHref ? (
          <a
            href={project.imageHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`Open ${project.title}`}
          >
            {visual}
          </a>
        ) : (
          visual
        )}
      </motion.div>
    </div>
  )

  return (
    <motion.article
      className={cn(
        'grid items-center gap-8 md:gap-12 lg:grid-cols-2',
        index > 0 && 'mt-24 md:mt-32',
      )}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
    >
      <div className={cn('order-2 overflow-visible', isReversed ? 'lg:order-1' : 'lg:order-2')}>
        {imageFrame}
      </div>

      <div className={cn('order-1', isReversed ? 'lg:order-2' : 'lg:order-1')}>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <p className="text-mono text-accent">{project.category}</p>
          {project.brands?.map((b) => (
            <a
              key={b}
              href={brandLinks[b]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={brandIcons[b].title}
            >
              <BrandLogo brand={brandIcons[b]} size={20} className="p-1.5 transition-colors hover:border-accent/30" />
            </a>
          ))}
        </div>
        <h3 className="text-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-tight text-text-primary">
          {project.title}
        </h3>
        <p className="mt-4 text-text-secondary leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 text-mono text-[0.6rem] text-text-secondary"
            >
              <SkillIcon name={t} size={12} />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.links.map((link) => {
            if (link.type === 'professional') {
              return (
                <span key={link.label} className="text-mono text-[0.65rem] text-text-muted">
                  {link.label}
                </span>
              )
            }
            const isGithub = link.type === 'github'
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent/80"
              >
                {isGithub ? <GithubIcon size={14} /> : <ExternalLink size={14} />}
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}
