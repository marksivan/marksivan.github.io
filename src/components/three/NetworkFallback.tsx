import { useTheme } from '@/hooks/useTheme'

interface NetworkFallbackProps {
  className?: string
}

export function NetworkFallback({ className }: NetworkFallbackProps) {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const line = isLight ? 'rgba(26,155,127,0.45)' : 'rgba(46,196,160,0.4)'
  const nodeFill = isLight ? '#fffdf8' : '#121821'
  const nodeStroke = isLight ? 'rgba(26,155,127,0.7)' : 'rgba(46,196,160,0.75)'
  const signal = isLight ? '#0f7664' : '#5eead4'
  const glow = isLight ? '#1a9b7f' : '#2ec4a0'

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glow} stopOpacity="0.35" />
            <stop offset="100%" stopColor={glow} stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [100, 200, 250, 120],
          [100, 200, 250, 280],
          [250, 120, 400, 200],
          [250, 280, 400, 200],
          [400, 200, 500, 150],
          [400, 200, 500, 250],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={line}
            strokeWidth="1.5"
          />
        ))}
        {[
          [100, 200, 7],
          [250, 120, 6],
          [250, 280, 6],
          [400, 200, 9],
          [500, 150, 5],
          [500, 250, 5],
        ].map(([cx, cy, r], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={(r as number) * 3} fill="url(#nodeGlow)" />
            <circle
              cx={cx}
              cy={cy}
              r={r as number}
              fill={nodeFill}
              stroke={nodeStroke}
              strokeWidth="1.5"
            />
          </g>
        ))}
        <circle r="2.5" fill={signal} opacity="0.9">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M100,200 L250,120 L400,200 L500,150"
          />
        </circle>
        <circle r="2.5" fill={signal} opacity="0.7">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M100,200 L250,280 L400,200 L500,250"
          />
        </circle>
      </svg>
    </div>
  )
}
