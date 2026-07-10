import type { Transition, Variants } from 'framer-motion'

export const duration = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.7,
  reveal: 0.85,
} as const

export const easing = {
  smooth: [0.22, 1, 0.36, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
}

export const stagger = {
  children: 0.08,
  fast: 0.05,
  slow: 0.12,
} as const

export const reveal = {
  distance: 28,
  distanceSmall: 16,
} as const

export const spring = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 20 },
  snappy: { type: 'spring' as const, stiffness: 260, damping: 24 },
}

export const hover = {
  scale: 1.02,
  lift: -4,
}

export const parallax = {
  strength: 0.04,
  media: 0.06,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: reveal.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.smooth },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.children, delayChildren: 0.1 },
  },
}

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
}

export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: duration.reveal, ease: easing.smooth },
  },
}

export const reducedMotionTransition: Transition = {
  duration: 0.01,
}

export function getTransition(reduced: boolean, transition?: Transition): Transition {
  if (reduced) return reducedMotionTransition
  return transition ?? { duration: duration.normal, ease: easing.smooth }
}
