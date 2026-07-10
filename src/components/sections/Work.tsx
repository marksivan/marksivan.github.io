import { GithubIcon } from '@/components/ui/SocialIcons'
import { projects } from '@/data/projects'
import { ProjectShowcaseItem } from '@/components/projects/ProjectShowcaseItem'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

export function Work() {
  return (
    <SectionWrapper id="work" ariaLabel="Selected work" wide>
      <AnimatedHeading
        eyebrow="Selected work"
        title="Projects where systems meet people"
        subtitle="From payment synchronization to adaptive learning — work that connects complex infrastructure to clear experiences."
      />
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
