import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { getProjectBySlug, getAdjacentProjects } from '@/data/projects'
import { ProjectVisual } from '@/components/projects/ProjectVisual'
import { Tag } from '@/components/ui/Tag'
import { Footer } from '@/components/layout/Footer'
import { getBasePath } from '@/lib/utils'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const base = getBasePath()

  if (!project) {
    return <Navigate to={`${base}/`} replace />
  }

  const { prev, next } = getAdjacentProjects(project.slug)
  const { caseStudy: cs } = project

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
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to={`${base}/`}
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <span className="font-display text-sm font-bold text-text-primary">MST</span>
        </div>
      </header>

      <main className="container section-padding">
        <p className="text-mono text-accent">{project.category}</p>
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
              to={`${base}/project/${prev.slug}`}
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
              to={`${base}/project/${next.slug}`}
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
