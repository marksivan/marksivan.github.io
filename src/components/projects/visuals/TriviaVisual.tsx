import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const tiers = [
  { label: 'Hard', y: 40, color: '#f472b6', fill: 'rgba(244, 114, 182, 0.15)' },
  { label: 'Medium', y: 110, color: '#fb923c', fill: 'rgba(251, 146, 60, 0.15)' },
  { label: 'Easy', y: 180, color: '#a855f7', fill: 'rgba(168, 85, 247, 0.15)' },
]

export function TriviaVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-accent-muted via-bg-surface to-bg-elevated p-6" aria-hidden>
      <svg viewBox="0 0 400 260" className="h-full w-full">
        {tiers.map((tier, i) => (
          <g key={tier.label}>
            <rect
              x="40"
              y={tier.y}
              width="320"
              height="50"
              rx="6"
              fill={tier.fill}
              stroke={tier.color}
              strokeWidth="1"
              strokeOpacity="0.35"
            />
            <text x="56" y={tier.y + 30} fill={tier.color} fontSize="9" fontFamily="monospace" fontWeight="600">
              {tier.label}
            </text>
            <motion.rect
              x="140"
              y={tier.y + 10}
              width="80"
              height="30"
              rx="4"
              fill="#1e1b28"
              stroke={tier.color}
              strokeWidth="1.5"
              strokeOpacity="0.7"
              animate={
                reduced
                  ? {}
                  : {
                      x: [140, 140 + (i === 1 ? 60 : i === 0 ? -40 : 0)],
                      y: [tier.y + 10, (tiers[Math.max(0, i - 1)] ?? tier).y + 10],
                    }
              }
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.5, ease: 'easeInOut' }}
            />
          </g>
        ))}
        <text x="200" y="250" textAnchor="middle" fill="#a855f7" fontSize="7" fontFamily="monospace">
          Adaptive difficulty via heaps
        </text>
      </svg>
    </div>
  )
}
