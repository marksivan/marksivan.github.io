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
  const Visual = visualMap[project.visual]
  return (
    <div className="h-full min-h-[240px] w-full overflow-hidden rounded-xl border border-border bg-bg-surface">
      <Visual />
    </div>
  )
}
