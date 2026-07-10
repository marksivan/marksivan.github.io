import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const books = [
  { x: 60, y: 80, color: '#a855f7', title: 'Book A' },
  { x: 180, y: 60, color: '#c084fc', title: 'Book B' },
  { x: 300, y: 90, color: '#f472b6', title: 'Book C' },
  { x: 120, y: 180, color: '#fb923c', title: 'Book D' },
  { x: 260, y: 170, color: '#38bdf8', title: 'Book E' },
]

const readers = [
  { x: 80, y: 240 },
  { x: 200, y: 250 },
  { x: 320, y: 240 },
]

export function StoryStackVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-accent-muted via-bg-surface to-bg-elevated p-4" aria-hidden>
      <svg viewBox="0 0 400 300" className="h-full w-full">
        {books.map((book, i) => (
          <g key={i}>
            <motion.rect
              x={book.x}
              y={book.y}
              width="40"
              height="56"
              rx="3"
              fill="#1e1b28"
              stroke={book.color}
              strokeWidth="1.5"
              strokeOpacity="0.8"
              animate={reduced ? {} : { y: [book.y, book.y - 4, book.y] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: 'easeInOut' }}
            />
            <text x={book.x + 20} y={book.y + 32} textAnchor="middle" fill={book.color} fontSize="6" fontFamily="monospace">
              {book.title}
            </text>
          </g>
        ))}

        <path d="M200,250 Q140,160 80,108" fill="none" stroke="rgba(168,85,247,0.45)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M200,250 Q200,150 180,88" fill="none" stroke="rgba(244,114,182,0.45)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M200,250 Q260,160 300,118" fill="none" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="4 4" />

        {readers.map((r, i) => (
          <circle key={i} cx={r.x} cy={r.y} r="8" fill="#15131c" stroke={['#a855f7', '#f472b6', '#38bdf8'][i]} strokeWidth="1.5" />
        ))}
      </svg>
    </div>
  )
}
