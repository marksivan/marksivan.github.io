import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const tiers = [
  { label: 'Hard', y: 40, color: '#e06060' },
  { label: 'Medium', y: 110, color: '#f0a030' },
  { label: 'Easy', y: 180, color: '#2ec4a0' },
]

export function TriviaVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full p-6" aria-hidden>
      <svg viewBox="0 0 400 260" className="h-full w-full">
        {tiers.map((tier, i) => (
          <g key={tier.label}>
            <rect
              x="40"
              y={tier.y}
              width="320"
              height="50"
              rx="6"
              fill="#111318"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <text x="56" y={tier.y + 30} fill="#5c6474" fontSize="9" fontFamily="monospace">
              {tier.label}
            </text>
            <motion.rect
              x="140"
              y={tier.y + 10}
              width="80"
              height="30"
              rx="4"
              fill="#181b22"
              stroke={tier.color}
              strokeWidth="1"
              strokeOpacity="0.4"
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
        <text x="200" y="250" textAnchor="middle" fill="#5c6474" fontSize="7" fontFamily="monospace">
          Adaptive difficulty via heaps
        </text>
      </svg>
    </div>
  )
}
