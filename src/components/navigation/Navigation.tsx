import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { personal } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollLock } from '@/hooks/useScrollLock'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { assetPath, cn } from '@/lib/utils'
import { duration, easing } from '@/lib/motion'

const sectionIds = navigation.map((n) => n.id)

interface NavigationProps {
  visible: boolean
}

export function Navigation({ visible }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const reduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-colors duration-300',
          scrolled || menuOpen
            ? 'border-b border-border bg-bg-primary/80 backdrop-blur-md'
            : 'bg-transparent',
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: reduced ? 0.01 : duration.slow, ease: easing.smooth }}
      >
        <nav
          className="container flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight text-text-primary"
            aria-label="Mark Sivan Tamakloe — Home"
          >
            {personal.initials}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm transition-colors',
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary',
                  )}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={assetPath(personal.resumePath)}
                className="ml-2 rounded-full border border-border px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent/40"
              >
                Résumé
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text-primary md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-bg-primary/95 backdrop-blur-lg md:hidden"
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
              {navigation.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-3 font-display text-2xl font-semibold text-text-primary"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : navigation.length * 0.05 }}
              >
                <a
                  href={assetPath(personal.resumePath)}
                  onClick={closeMenu}
                  className="mt-4 inline-block rounded-full border border-accent/30 px-6 py-3 text-sm text-accent"
                >
                  Résumé
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
