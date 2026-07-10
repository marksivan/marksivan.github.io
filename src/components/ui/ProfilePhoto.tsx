import { useState } from 'react'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROFILE_IMAGE = '/images/profile.jpg'

interface ProfilePhotoProps {
  className?: string
}

export function ProfilePhoto({ className }: ProfilePhotoProps) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div
        className={cn(
          'flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-border-strong bg-bg-elevated',
          className,
        )}
        role="img"
        aria-label="Profile photo placeholder"
      >
        <User size={32} className="text-text-muted" strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <img
      src={PROFILE_IMAGE}
      alt="Mark Tamakloe"
      width={112}
      height={112}
      className={cn('h-28 w-28 rounded-full border-2 border-border object-cover', className)}
      onError={() => setMissing(true)}
    />
  )
}
