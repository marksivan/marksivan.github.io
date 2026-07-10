import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const books = [
  { x: 60, y: 80, color: '#4f9cf9', title: 'Book A' },
  { x: 180, y: 60, color: '#4a9eff', title: 'Book B' },
  { x: 300, y: 90, color: '#f0a030', title: 'Book C' },
  { x: 120, y: 180, color: '#e06090', title: 'Book D' },
  { x: 260, y: 170, color: '#9b7bff', title: 'Book E' },
]

const readers = [
  { x: 80, y: 240 },
  { x: 200, y: 250 },
  { x: 320, y: 240 },
]

export function StoryStackVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative h-full w-full p-4" aria-hidden>
      <svg viewBox="0 0 400 300" className="h-full w-full">
        {books.map((book, i) => (
          <g key={i}>
            <motion.rect
              x={book.x}
              y={book.y}
              width="40"
              height="56"
              rx="3"
              fill="#181b22"
              stroke={book.color}
              strokeWidth="1"
              strokeOpacity="0.5"
              animate={reduced ? {} : { y: [book.y, book.y - 4, book.y] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: 'easeInOut' }}
            />
            <text x={book.x + 20} y={book.y + 32} textAnchor="middle" fill="#5c6474" fontSize="6" fontFamily="monospace">
              {book.title}
            </text>
          </g>
        ))}

        {/* Recommendation paths */}
        <path d="M200,250 Q140,160 80,108" fill="none" stroke="rgba(46,196,160,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M200,250 Q200,150 180,88" fill="none" stroke="rgba(46,196,160,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M200,250 Q260,160 300,118" fill="none" stroke="rgba(46,196,160,0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {readers.map((r, i) => (
          <circle key={i} cx={r.x} cy={r.y} r="8" fill="#111318" stroke="rgba(46,196,160,0.4)" strokeWidth="1" />
        ))}
      </svg>
    </div>
  )
}
