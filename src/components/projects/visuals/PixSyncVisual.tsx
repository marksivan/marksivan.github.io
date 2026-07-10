import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PixSyncVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full p-6" aria-hidden>
      <svg viewBox="0 0 400 280" className="h-full w-full">
        {/* Central service */}
        <rect x="170" y="110" width="60" height="60" rx="8" fill="#181b22" stroke="rgba(46,196,160,0.4)" strokeWidth="1" />
        <text x="200" y="145" textAnchor="middle" fill="#8a93a5" fontSize="8" fontFamily="monospace">Sync</text>

        {/* Device left */}
        <rect x="30" y="90" width="50" height="90" rx="6" fill="#111318" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="38" y="105" width="34" height="50" rx="2" fill="#181b22" />

        {/* Device right */}
        <rect x="320" y="90" width="50" height="90" rx="6" fill="#111318" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="328" y="105" width="34" height="50" rx="2" fill="#181b22" />

        {/* Connection lines */}
        <line x1="80" y1="135" x2="170" y2="140" stroke="rgba(46,196,160,0.2)" strokeWidth="1" />
        <line x1="230" y1="140" x2="320" y2="135" stroke="rgba(46,196,160,0.2)" strokeWidth="1" />

        {/* Animated signals */}
        {!reduced && (
          <>
            <circle r="3" fill="#4f9cf9">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M80,135 L170,140 L230,140 L320,135" />
            </circle>
            <circle r="3" fill="#4f9cf9" opacity="0.5">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M320,135 L230,140 L170,140 L80,135" />
            </circle>
          </>
        )}

        {/* PIX key labels */}
        <text x="55" y="200" textAnchor="middle" fill="#5c6474" fontSize="7" fontFamily="monospace">Device A</text>
        <text x="345" y="200" textAnchor="middle" fill="#5c6474" fontSize="7" fontFamily="monospace">Device B</text>
      </svg>
    </div>
  )
}
