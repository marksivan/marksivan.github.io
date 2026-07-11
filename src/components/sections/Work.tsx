import { GithubIcon } from '@/components/ui/SocialIcons'
import { projects } from '@/data/projects'
import { ProjectShowcaseItem } from '@/components/projects/ProjectShowcaseItem'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

export function Work() {
  return (
    <SectionWrapper id="work" ariaLabel="Projects" wide>
      <h2 className="text-display mb-12 text-[clamp(2rem,5vw,3.25rem)] font-bold text-text-primary md:mb-16">
        Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectShowcaseItem key={project.id} project={project} index={index} />
      ))}
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
