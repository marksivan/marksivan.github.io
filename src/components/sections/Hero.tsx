import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { socialLinks } from '@/data/socialLinks'
import { HeroVisual } from '@/components/three/HeroVisual'
import { Button } from '@/components/ui/Button'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scrollToSection } from '@/lib/scroll'
import { duration, easing, staggerContainer } from '@/lib/motion'
import type { Variants } from 'framer-motion'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.smooth },
  },
}

export function Hero() {
  const reduced = useReducedMotion()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMouse({ x, y })
  }, [])

  const github = socialLinks.find((l) => l.id === 'github')
  const linkedin = socialLinks.find((l) => l.id === 'linkedin')

  const scrollToWork = (event: React.MouseEvent) => {
    event.preventDefault()
    scrollToSection('work', reduced ? 'auto' : 'smooth')
  }

  const scrollToContact = (event: React.MouseEvent) => {
    event.preventDefault()
    scrollToSection('contact', reduced ? 'auto' : 'smooth')
  }

  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border"
      aria-label="About Mark"
    >
      <div className="container relative z-10 pt-24 pb-20">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-end xl:grid-cols-[1fr_minmax(0,26rem)] xl:gap-x-16">
          <motion.h1
            className="max-w-3xl text-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.05] text-text-primary lg:col-start-1 lg:row-start-1"
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={itemVariants}
          >
            Shaping the{' '}
            <span className="text-accent">digital landscape.</span>
          </motion.h1>

          <motion.div
            className="relative mx-auto lg:col-start-2 lg:row-start-1 lg:mx-0 lg:ml-auto lg:justify-self-end"
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.reveal, ease: easing.smooth, delay: reduced ? 0 : 0.15 }}
          >
            <div
              className="absolute right-full bottom-0 mr-3 h-36 w-36 sm:mr-4 sm:h-40 sm:w-40 md:h-44 md:w-44"
              onMouseMove={handleMouseMove}
            >
              <HeroVisual
                mouseX={mouse.x}
                mouseY={mouse.y}
                className="h-full w-full opacity-80"
              />
            </div>
            <ProfilePhoto className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40" />
          </motion.div>

          <motion.div
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl lg:col-start-1 lg:row-start-2"
          >
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-text-secondary"
              variants={itemVariants}
            >
              Using software engineering and data to build user-centered solutions.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={itemVariants}>
              <Button variant="primary" magnetic onClick={scrollToWork}>
                View projects
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                Get in touch
              </Button>
            </motion.div>

            <motion.div className="mt-6 flex items-center gap-4" variants={itemVariants}>
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors hover:text-accent"
                  aria-label={github.label}
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors hover:text-accent"
                  aria-label={linkedin.label}
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.5, duration: duration.normal }}
      >
        <a
          href="#work"
          onClick={scrollToWork}
          className="text-text-muted transition-colors hover:text-accent"
          aria-label="Go to work"
        >
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: easing.inOut }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
