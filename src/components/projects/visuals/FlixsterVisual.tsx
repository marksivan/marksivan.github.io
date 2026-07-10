import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const posters = [
  { x: 24, y: 28, w: 72, h: 108, rating: '8.4' },
  { x: 108, y: 18, w: 72, h: 108, rating: '7.9' },
  { x: 192, y: 34, w: 72, h: 108, rating: '9.1' },
  { x: 276, y: 22, w: 72, h: 108, rating: '8.0' },
]

export function FlixsterVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full p-4" aria-hidden>
      <svg viewBox="0 0 400 220" className="h-full w-full">
        <rect x="16" y="12" width="368" height="36" rx="8" fill="#15131c" stroke="rgba(255,255,255,0.08)" />
        <text x="32" y="34" fill="#a855f7" fontSize="10" fontFamily="monospace">
          Popular
        </text>
        <text x="300" y="34" fill="#6b6578" fontSize="8" fontFamily="monospace">
          Sort: Rating
        </text>

        {posters.map((poster, i) => (
          <g key={i}>
            <motion.rect
              x={poster.x}
              y={poster.y + 48}
              width={poster.w}
              height={poster.h}
              rx="6"
              fill="#1e1b28"
              stroke="rgba(168, 85, 247, 0.35)"
              strokeWidth="1"
              animate={reduced ? {} : { y: [poster.y + 48, poster.y + 44, poster.y + 48] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: 'easeInOut' }}
            />
            <rect
              x={poster.x + 8}
              y={poster.y + 56}
              width={poster.w - 16}
              height="10"
              rx="2"
              fill="rgba(168, 85, 247, 0.2)"
            />
            <text
              x={poster.x + poster.w - 10}
              y={poster.y + 64}
              textAnchor="end"
              fill="#a855f7"
              fontSize="7"
              fontFamily="monospace"
            >
              {poster.rating}
            </text>
          </g>
        ))}

        <rect x="140" y="188" width="120" height="20" rx="10" fill="rgba(168, 85, 247, 0.15)" />
        <text x="200" y="202" textAnchor="middle" fill="#a8a3b8" fontSize="8" fontFamily="monospace">
          Load more
        </text>
      </svg>
    </div>
  )
}
