import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { getProjectBySlug, getAdjacentProjects } from '@/data/projects'
import { brandIcons } from '@/lib/skillIcons'
import { BrandLogo } from '@/components/ui/SkillIcon'
import { ProjectVisual } from '@/components/projects/ProjectVisual'
import { Tag } from '@/components/ui/Tag'
import { Footer } from '@/components/layout/Footer'
import { personal } from '@/data/personal'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { prev, next } = getAdjacentProjects(project.slug)
  const { caseStudy: cs } = project

  if (!cs) {
    return <Navigate to="/" replace />
  }

  const sections = [
    { title: 'Overview', content: cs.overview },
    { title: 'Problem', content: cs.problem },
    { title: 'Role', content: cs.role },
    { title: 'Technical approach', content: cs.approach },
    { title: 'Challenges', content: cs.challenges },
    { title: 'Outcome', content: cs.outcome },
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="border-b border-border bg-bg-primary/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to={{ pathname: '/', hash: 'work' }}
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
          <Link
            to="/"
            className="font-display text-base font-bold text-text-primary transition-colors hover:text-accent"
          >
            {personal.displayName}
          </Link>
        </div>
      </header>

      <main id="main-content" className="container section-padding">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-mono text-accent">{project.category}</p>
          {project.brands?.map((b) => (
            <BrandLogo key={b} brand={brandIcons[b]} size={22} className="p-1.5" />
          ))}
        </div>
        <h1 className="text-display mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-text-primary">
          {project.title}
        </h1>

        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <ProjectVisual project={project} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((link) => {
            if (link.type === 'professional') {
              return (
                <span key={link.label} className="text-mono text-[0.65rem] text-text-muted">
                  {link.label}
                </span>
              )
            }
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent"
              >
                {link.type === 'github' ? <GithubIcon size={14} /> : <ExternalLink size={14} />}
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="mt-16 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-mono mb-4 text-accent">{section.title}</h2>
              <p className="max-w-3xl text-text-secondary leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        <nav
          className="mt-20 flex items-center justify-between border-t border-border pt-8"
          aria-label="Project navigation"
        >
          {prev ? (
            <Link
              to={`/project/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} />
              <span>
                <span className="text-mono block text-[0.6rem] text-text-muted">Previous</span>
                {prev.title.slice(0, 40)}…
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/project/${next.slug}`}
              className="group flex items-center gap-2 text-right text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <span>
                <span className="text-mono block text-[0.6rem] text-text-muted">Next</span>
                {next.title.slice(0, 40)}…
              </span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>

      <Footer />
    </div>
  )
}
