import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/navigation/Navigation'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { HomePage } from '@/pages/HomePage'
import { ProjectPage } from '@/pages/ProjectPage'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function App() {
  const [loading, setLoading] = useState(true)
  const [navVisible, setNavVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    // GitHub Pages SPA redirect handler
    const redirect = new URLSearchParams(window.location.search).get('p')
    if (redirect) {
      window.history.replaceState(null, '', redirect)
    }
  }, [])

  useEffect(() => {
    if (reduced) {
      setLoading(false)
      setNavVisible(true)
      return
    }
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setNavVisible(true), 200)
    }, 1200)
    return () => clearTimeout(timer)
  }, [reduced])

  const handleLoadComplete = () => {
    setLoading(false)
    setTimeout(() => setNavVisible(true), 200)
  }

  const base = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={base === '/' ? undefined : base.replace(/\/$/, '')}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <Navigation visible={navVisible || !loading} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
