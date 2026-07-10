export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-surface/60 px-4 py-2 backdrop-blur-sm">
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-mono text-[0.65rem] text-text-secondary">
        Open to software engineering opportunities
      </span>
    </div>
  )
}
