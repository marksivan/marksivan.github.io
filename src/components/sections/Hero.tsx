import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { socialLinks } from '@/data/socialLinks'
import { HeroVisual } from '@/components/three/HeroVisual'
import { Button } from '@/components/ui/Button'
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge'
import { useReducedMotion } from '@/hooks/useReducedMotion'
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

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroVisual
          mouseX={mouse.x}
          mouseY={mouse.y}
          className="absolute inset-0 h-full w-full opacity-50 gradient-mask-b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-transparent to-bg-primary" />
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p className="text-mono mb-6 text-accent" variants={itemVariants}>
            Software engineer · Williams College
          </motion.p>

          <motion.h1
            className="text-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.05] text-text-primary"
            variants={itemVariants}
          >
            I build systems that keep people and information connected.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary"
            variants={itemVariants}
          >
            I&apos;m Mark, a computer science student and software engineer building
            thoughtful products across payments, full-stack platforms, developer tools,
            and intelligent applications.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={itemVariants}>
            <Link to="/work">
              <Button variant="primary" magnetic>
                Explore my work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Get in touch</Button>
            </Link>
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
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.5, duration: duration.normal }}
      >
        <Link
          to="/work"
          className="text-text-muted transition-colors hover:text-accent"
          aria-label="Go to work"
        >
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: easing.inOut }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
