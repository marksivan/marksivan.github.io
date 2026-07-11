import { GithubIcon } from '@/components/ui/SocialIcons'
import { projects } from '@/data/projects'
import { ProjectShowcaseItem } from '@/components/projects/ProjectShowcaseItem'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

interface WorkProps {
  featuredOnly?: boolean
  showMoreProjects?: boolean
}

export function Work({ featuredOnly = false, showMoreProjects = false }: WorkProps) {
  const featured = projects.filter((project) => project.featured)
  const remaining = projects.filter((project) => !project.featured)
  const visibleProjects = featuredOnly ? featured : projects

  return (
    <SectionWrapper id="work" ariaLabel="Projects" wide>
      <div className="mb-12 max-w-2xl md:mb-16">
        <p className="text-mono mb-3 text-accent">Work</p>
        <h2 className="text-display text-[clamp(2rem,5vw,3.25rem)] font-bold text-text-primary">
          Projects
        </h2>
      </div>

      {visibleProjects.map((project, index) => (
        <ProjectShowcaseItem key={project.id} project={project} index={index} compact />
      ))}

      {featuredOnly && showMoreProjects && remaining.length > 0 && (
        <div className="mt-24 border-t border-border pt-16 md:mt-32">
          <h3 className="text-display mb-10 text-2xl font-bold text-text-primary md:mb-12">
            More projects
          </h3>
          {remaining.map((project, index) => (
            <ProjectShowcaseItem key={project.id} project={project} index={index} compact />
          ))}
        </div>
      )}

      <div className="mt-16 text-center">
        <a
          href="https://github.com/marksivan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <GithubIcon size={16} />
          More on GitHub
        </a>
      </div>
    </SectionWrapper>
  )
}
