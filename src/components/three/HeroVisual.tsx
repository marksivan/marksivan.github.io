import React, { lazy, Suspense, useState, useCallback } from 'react'
import { NetworkFallback } from './NetworkFallback'
import { useIsLowPower } from '@/hooks/useMediaQuery'

const LazyNetworkScene = lazy(() =>
  import('./NetworkScene').then((m) => ({ default: m.NetworkScene })),
)

interface HeroVisualProps {
  mouseX: number
  mouseY: number
  className?: string
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export function HeroVisual({ mouseX, mouseY, className }: HeroVisualProps) {
  const lowPower = useIsLowPower()
  const [webglFailed, setWebglFailed] = useState(false)

  const handleError = useCallback(() => setWebglFailed(true), [])

  if (lowPower || webglFailed) {
    return <NetworkFallback className={className} />
  }

  return (
    <Suspense fallback={<NetworkFallback className={className} />}>
      <ErrorBoundary onError={handleError}>
        <LazyNetworkScene className={className} mouseX={mouseX} mouseY={mouseY} />
      </ErrorBoundary>
    </Suspense>
  )
}
