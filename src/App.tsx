import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/navigation/Navigation'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { ProjectPage } from '@/pages/ProjectPage'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scrollToSection } from '@/lib/scroll'

function SectionRedirect({ section }: { section: string }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
    requestAnimationFrame(() => scrollToSection(section, 'auto'))
  }, [navigate, section])

  return null
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<SectionRedirect section="work" />} />
      <Route path="/experience" element={<SectionRedirect section="experience" />} />
      <Route path="/about" element={<SectionRedirect section="about" />} />
      <Route path="/interests" element={<Navigate to="/" replace />} />
      <Route path="/education" element={<SectionRedirect section="experience" />} />
      <Route path="/skills" element={<SectionRedirect section="skills" />} />
      <Route path="/contact" element={<SectionRedirect section="contact" />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [navVisible, setNavVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const redirect = new URLSearchParams(window.location.search).get('p')
    if (redirect) {
      const path = redirect.split('#')[0]
      window.history.replaceState(null, '', path)
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
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <Navigation visible={navVisible || !loading} />

      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
