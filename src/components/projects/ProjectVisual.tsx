import { useState } from 'react'
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
  const [screenshotFailed, setScreenshotFailed] = useState(false)
  const Visual = visualMap[project.visual]

  if (project.screenshot && !screenshotFailed) {
    return (
      <div className="h-full min-h-[200px] w-full overflow-hidden rounded-lg border border-border bg-bg-surface">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          onError={() => setScreenshotFailed(true)}
        />
      </div>
    )
  }

  return (
    <div className="h-full min-h-[200px] w-full overflow-hidden rounded-xl border border-border bg-bg-surface">
      <Visual />
    </div>
  )
}
