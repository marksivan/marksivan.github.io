import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'
import { ProjectVisual } from './ProjectVisual'
import { Tag } from '@/components/ui/Tag'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn, getBasePath } from '@/lib/utils'
import { fadeUp } from '@/lib/motion'

interface ProjectShowcaseItemProps {
  project: Project
  index: number
}

export function ProjectShowcaseItem({ project, index }: ProjectShowcaseItemProps) {
  const reduced = useReducedMotion()
  const isReversed = project.layout === 'right'

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
      <div className={cn('order-2', isReversed ? 'lg:order-1' : 'lg:order-2')}>
        <motion.div
          whileHover={reduced ? {} : { scale: 1.01, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectVisual project={project} />
        </motion.div>
      </div>

      <div className={cn('order-1', isReversed ? 'lg:order-2' : 'lg:order-1')}>
        <p className="text-mono mb-3 text-accent">{project.category}</p>
        <h3 className="text-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-tight text-text-primary">
          {project.title}
        </h3>
        <p className="mt-4 text-text-secondary leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.links.map((link) => {
            if (link.type === 'professional') {
              return (
                <span
                  key={link.label}
                  className="text-mono text-[0.65rem] text-text-muted"
                >
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
          <Link
            to={`${getBasePath()}/project/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Case study
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
