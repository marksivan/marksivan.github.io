import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { duration, easing } from '@/lib/motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0.01 : duration.normal, ease: easing.smooth }}
      onAnimationComplete={() => onComplete()}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-6">
        <svg
          width="80"
          height="48"
          viewBox="0 0 80 48"
          fill="none"
          aria-hidden
          className="overflow-visible"
        >
          <motion.circle
            cx="12"
            cy="24"
            r="4"
            fill="#4f9cf9"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduced ? 0 : 0.1, duration: reduced ? 0.01 : 0.3 }}
          />
          <motion.circle
            cx="40"
            cy="24"
            r="4"
            fill="#4f9cf9"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduced ? 0 : 0.25, duration: reduced ? 0.01 : 0.3 }}
          />
          <motion.circle
            cx="68"
            cy="24"
            r="4"
            fill="#4f9cf9"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduced ? 0 : 0.4, duration: reduced ? 0.01 : 0.3 }}
          />
          <motion.line
            x1="16"
            y1="24"
            x2="36"
            y2="24"
            stroke="#4f9cf9"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: reduced ? 0 : 0.5, duration: reduced ? 0.01 : 0.4 }}
          />
          <motion.line
            x1="44"
            y1="24"
            x2="64"
            y2="24"
            stroke="#4f9cf9"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: reduced ? 0 : 0.7, duration: reduced ? 0.01 : 0.4 }}
          />
        </svg>
        <motion.p
          className="text-mono text-[0.65rem] text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.9, duration: 0.3 }}
        >
          Connecting systems
        </motion.p>
      </div>
    </motion.div>
  )
}
