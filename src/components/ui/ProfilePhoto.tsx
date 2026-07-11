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
          'profile-photo-frame flex items-center justify-center border border-border bg-profile',
          className,
        )}
        role="img"
        aria-label="Profile photo placeholder"
      >
        <User size={36} className="text-text-muted" strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'profile-photo-frame overflow-hidden border border-border bg-profile',
        className,
      )}
    >
      <img
        src={PROFILE_IMAGE}
        alt="Mark Tamakloe"
        width={220}
        height={280}
        className="h-full w-full object-contain object-bottom"
        onError={() => setMissing(true)}
      />
    </div>
  )
}
