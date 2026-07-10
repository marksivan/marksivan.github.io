import type { Project } from '@/types'
import { PixSyncVisual } from './visuals/PixSyncVisual'
import { StoryStackVisual } from './visuals/StoryStackVisual'
import { SmartClerkVisual } from './visuals/SmartClerkVisual'
import { TriviaVisual } from './visuals/TriviaVisual'
import { FlixsterVisual } from './visuals/FlixsterVisual'

const visualMap = {
  'pix-sync': PixSyncVisual,
  storystack: StoryStackVisual,
  'smart-clerk': SmartClerkVisual,
  trivia: TriviaVisual,
  flixster: FlixsterVisual,
}

interface ProjectVisualProps {
  project: Project
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.screenshot) {
    return (
      <div className="h-full min-h-[200px] w-full overflow-hidden rounded-xl border border-border bg-bg-surface">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    )
  }

  const Visual = visualMap[project.visual]
  return (
    <div className="h-full min-h-[200px] w-full overflow-hidden rounded-xl border border-border bg-bg-surface">
      <Visual />
    </div>
  )
}
