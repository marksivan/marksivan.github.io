import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PixSyncVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-accent-muted via-bg-surface to-bg-elevated p-6" aria-hidden>
      <svg viewBox="0 0 400 280" className="h-full w-full">
        <rect x="170" y="110" width="60" height="60" rx="8" fill="#1e1b28" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="200" y="145" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace" fontWeight="600">Sync</text>

        <rect x="30" y="90" width="50" height="90" rx="6" fill="#15131c" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="38" y="105" width="34" height="50" rx="2" fill="#1e1b28" />

        <rect x="320" y="90" width="50" height="90" rx="6" fill="#15131c" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="328" y="105" width="34" height="50" rx="2" fill="#1e1b28" />

        <line x1="80" y1="135" x2="170" y2="140" stroke="rgba(168,85,247,0.55)" strokeWidth="1.5" />
        <line x1="230" y1="140" x2="320" y2="135" stroke="rgba(168,85,247,0.55)" strokeWidth="1.5" />

        {!reduced && (
          <>
            <circle r="3.5" fill="#a855f7">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M80,135 L170,140 L230,140 L320,135" />
            </circle>
            <circle r="3.5" fill="#c084fc" opacity="0.7">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M320,135 L230,140 L170,140 L80,135" />
            </circle>
          </>
        )}

        <text x="55" y="200" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="600">Primary</text>
        <text x="345" y="200" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="600">Companion</text>
      </svg>
    </div>
  )
}
