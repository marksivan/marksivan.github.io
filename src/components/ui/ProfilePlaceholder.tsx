import { cn } from '@/lib/utils'

interface ProfilePlaceholderProps {
  className?: string
}

export function ProfilePlaceholder({ className }: ProfilePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-bg-elevated',
        className,
      )}
      role="img"
      aria-label="Profile photo placeholder — add your image to public/images/profile.jpg"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-border-strong">
          <span className="text-mono text-xs text-text-muted">MST</span>
        </div>
        <p className="text-mono text-[0.65rem] text-text-muted">
          Add profile photo
          <br />
          <span className="normal-case">/images/profile.jpg</span>
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
    </div>
  )
}
