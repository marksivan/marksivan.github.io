import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { socialLinks } from '@/data/socialLinks'
import { HeroVisual } from '@/components/three/HeroVisual'
import { Button } from '@/components/ui/Button'
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge'
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
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
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
      onMouseMove={handleMouseMove}
      aria-label="About Mark"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroVisual
          mouseX={mouse.x}
          mouseY={mouse.y}
          className="absolute inset-0 h-full w-full opacity-40 gradient-mask-b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary" />
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <motion.div
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={staggerContainer}
            className="order-2 max-w-3xl lg:order-1"
          >
            <motion.p className="text-mono mb-6 text-accent" variants={itemVariants}>
              Software engineer
            </motion.p>

            <motion.h1
              className="text-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.05] text-text-primary"
              variants={itemVariants}
            >
              I build systems that keep people and{' '}
              <span className="text-accent">information connected.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary"
              variants={itemVariants}
            >
              I&apos;m Mark, a computer science student at Williams College and software engineer.
              I&apos;ve worked on WhatsApp Payments at Meta, building real-time sync on Android and
              payment experiences on the web for Brazil&apos;s 140M+ user market.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={itemVariants}>
              <Button variant="primary" magnetic onClick={scrollToWork}>
                View selected work
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

            <motion.div className="mt-10" variants={itemVariants}>
              <AvailabilityBadge />
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex w-full justify-end sm:pr-2 lg:order-2 lg:w-auto lg:translate-x-8 lg:pt-2 xl:translate-x-12"
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.reveal, ease: easing.smooth, delay: reduced ? 0 : 0.2 }}
          >
            <ProfilePhoto className="h-36 w-36 md:h-40 md:w-40" />
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
