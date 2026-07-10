interface NetworkFallbackProps {
  className?: string
}

export function NetworkFallback({ className }: NetworkFallbackProps) {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4f9cf9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4f9cf9" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Connection lines */}
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
            stroke="rgba(46,196,160,0.15)"
            strokeWidth="1"
          />
        ))}
        {/* Nodes */}
        {[
          [100, 200, 6],
          [250, 120, 5],
          [250, 280, 5],
          [400, 200, 8],
          [500, 150, 4],
          [500, 250, 4],
        ].map(([cx, cy, r], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={(r as number) * 3} fill="url(#nodeGlow)" />
            <circle
              cx={cx}
              cy={cy}
              r={r as number}
              fill="#181b22"
              stroke="rgba(46,196,160,0.5)"
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Animated signal dots via CSS */}
        <circle r="2" fill="#4f9cf9" opacity="0.8">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M100,200 L250,120 L400,200 L500,150"
          />
        </circle>
        <circle r="2" fill="#4f9cf9" opacity="0.6">
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
