import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PixSyncVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-accent-muted via-bg-surface to-bg-elevated p-6" aria-hidden>
      <svg viewBox="0 0 400 280" className="h-full w-full">
        {/* Sync hub */}
        <rect x="168" y="108" width="64" height="64" rx="8" fill="#1e1b28" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="200" y="144" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace" fontWeight="600">Sync</text>

        {/* Primary phone */}
        <rect x="28" y="92" width="50" height="90" rx="6" fill="#15131c" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="36" y="107" width="34" height="50" rx="2" fill="#1e1b28" />

        {/* Companion phone */}
        <rect x="318" y="72" width="44" height="78" rx="6" fill="#15131c" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="325" y="86" width="30" height="44" rx="2" fill="#1e1b28" />

        {/* Companion laptop */}
        <rect x="304" y="168" width="72" height="44" rx="4" fill="#15131c" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="310" y="174" width="60" height="28" rx="2" fill="#1e1b28" />
        <rect x="298" y="212" width="84" height="6" rx="2" fill="#1e1b28" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.35" />

        {/* Connection lines */}
        <line x1="78" y1="137" x2="168" y2="140" stroke="rgba(168,85,247,0.55)" strokeWidth="1.5" />
        <line x1="232" y1="132" x2="318" y2="108" stroke="rgba(168,85,247,0.55)" strokeWidth="1.5" />
        <line x1="232" y1="148" x2="304" y2="190" stroke="rgba(168,85,247,0.55)" strokeWidth="1.5" />

        {!reduced && (
          <>
            <circle r="3.5" fill="#a855f7">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M78,137 L168,140 L232,132 L318,108" />
            </circle>
            <circle r="3.5" fill="#c084fc" opacity="0.75">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.1s" path="M78,137 L168,140 L232,148 L304,190" />
            </circle>
            <circle r="3" fill="#a855f7" opacity="0.6">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.5s" path="M304,190 L232,148 L168,140 L78,137" />
            </circle>
          </>
        )}

        <text x="53" y="200" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="600">Primary</text>
        <text x="352" y="228" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="600">Companion</text>
      </svg>
    </div>
  )
}
