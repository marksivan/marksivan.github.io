import type { ReactNode } from 'react'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
