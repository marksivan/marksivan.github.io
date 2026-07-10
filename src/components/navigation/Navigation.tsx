import { useEffect, useRef, useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { personal } from '@/data/personal'
import { useScrollLock } from '@/hooks/useScrollLock'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'
import { duration, easing } from '@/lib/motion'

interface NavigationProps {
  visible: boolean
}

export function Navigation({ visible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const reduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-colors duration-300',
          scrolled || menuOpen
            ? 'border-b border-border bg-bg-primary/90 backdrop-blur-md'
            : 'bg-bg-primary/40 backdrop-blur-sm',
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: reduced ? 0.01 : duration.slow, ease: easing.smooth }}
      >
        <nav
          className="container flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="font-display text-base font-bold tracking-tight text-text-primary transition-colors hover:text-accent md:text-lg"
            aria-label="Mark Tamakloe — Home"
          >
            {personal.displayName}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm transition-colors',
                      isActive(item.path)
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary',
                    )}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-bg-primary/98 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-16 items-center justify-end px-6">
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-text-primary"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-2">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-6 py-3 font-display text-2xl font-semibold text-text-primary"
                >
                  Home
                </Link>
              </motion.li>
              {navigation.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : (i + 1) * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className="block px-6 py-3 font-display text-2xl font-semibold text-text-primary"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
