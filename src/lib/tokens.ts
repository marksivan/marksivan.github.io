export const colors = {
  bg: {
    primary: '#090a0c',
    surface: '#111318',
    elevated: '#181b22',
    overlay: 'rgba(9, 10, 12, 0.85)',
  },
  text: {
    primary: '#f4f1ea',
    secondary: '#8a93a5',
    muted: '#5c6474',
  },
  accent: {
    DEFAULT: '#4f9cf9',
    muted: 'rgba(46, 196, 160, 0.15)',
    glow: 'rgba(46, 196, 160, 0.35)',
  },
  border: {
    DEFAULT: 'rgba(255, 255, 255, 0.08)',
    strong: 'rgba(255, 255, 255, 0.14)',
  },
} as const

export const typography = {
  display: '"Syne", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const

export const spacing = {
  section: 'clamp(5rem, 12vw, 8rem)',
  container: 'min(92vw, 1200px)',
  containerWide: 'min(94vw, 1400px)',
} as const
