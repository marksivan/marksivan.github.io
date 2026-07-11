import { useEffect, useRef, useCallback, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation, sectionIds } from '@/data/navigation'
import { personal } from '@/data/personal'
import { useScrollLock } from '@/hooks/useScrollLock'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { scrollToSection } from '@/lib/scroll'
import { cn } from '@/lib/utils'
import { duration, easing } from '@/lib/motion'
import type { NavItem } from '@/types'

interface NavigationProps {
  visible: boolean
}

function isNavItemActive(item: NavItem, pathname: string, activeSection: string): boolean {
  if (item.external) return false
  if (item.hash && pathname === '/') return activeSection === item.hash
  if (item.path) {
    if (item.path === '/') return pathname === '/'
    return pathname === item.path || pathname.startsWith(`${item.path}/`)
  }
  return false
}

export function Navigation({ visible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const reduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const activeSection = useActiveSection(location.pathname === '/' ? [...sectionIds] : [])

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const handleSectionNav = useCallback(
    (event: React.MouseEvent, item: NavItem) => {
      if (!item.hash) return
      event.preventDefault()
      closeMenu()
      if (location.pathname !== '/') {
        navigate(`/#${item.hash}`)
        return
      }
      scrollToSection(item.hash, reduced ? 'auto' : 'smooth')
    },
    [closeMenu, location.pathname, navigate, reduced],
  )

  const renderNavLink = (item: NavItem, className: string) => {
    if (item.external && item.href) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {item.label}
        </a>
      )
    }

    if (item.hash) {
      return (
        <a
          href={`/#${item.hash}`}
          onClick={(event) => handleSectionNav(event, item)}
          className={className}
          aria-current={isNavItemActive(item, location.pathname, activeSection) ? 'true' : undefined}
        >
          {item.label}
        </a>
      )
    }

    return (
      <Link
        to={item.path ?? '/'}
        className={className}
        aria-current={isNavItemActive(item, location.pathname, activeSection) ? 'page' : undefined}
      >
        {item.label}
      </Link>
    )
  }

  const linkClass = (item: NavItem) =>
    cn(
      'border-b border-transparent px-1 py-2 text-sm tracking-wide transition-colors',
      isNavItemActive(item, location.pathname, activeSection)
        ? 'border-accent text-text-primary'
        : 'text-text-secondary hover:text-text-primary',
    )

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-colors duration-300',
          scrolled || menuOpen
            ? 'border-b border-border bg-bg-primary/95 backdrop-blur-md'
            : 'bg-bg-primary/60 backdrop-blur-sm',
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
            aria-label="Mark Tamakloe, Home"
          >
            {personal.displayName}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.id}>{renderNavLink(item, linkClass(item))}</li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-text-primary"
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
                className="flex h-11 w-11 items-center justify-center text-text-primary"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-4">
              {navigation.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.05 }}
                >
                  {renderNavLink(
                    item,
                    'block px-6 py-3 font-display text-2xl font-semibold text-text-primary',
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
