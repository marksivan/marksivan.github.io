import { useState } from 'react'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROFILE_IMAGE = '/images/profile.png'

interface ProfilePhotoProps {
  className?: string
}

export function ProfilePhoto({ className }: ProfilePhotoProps) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div
        className={cn(
          'flex h-32 w-32 items-center justify-center rounded-full border border-border bg-profile',
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
    <div
      className={cn(
        'h-32 w-32 overflow-hidden rounded-full border border-border bg-profile',
        className,
      )}
    >
      <img
        src={PROFILE_IMAGE}
        alt="Mark Tamakloe"
        width={128}
        height={128}
        className="h-full w-full scale-[1.18] object-cover object-[56%_40%]"
        onError={() => setMissing(true)}
      />
    </div>
  )
}
