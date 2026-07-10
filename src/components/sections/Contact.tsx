import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { socialLinks } from '@/data/socialLinks'
import { ContactForm } from '@/components/ui/ContactForm'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Contact() {
  const reduced = useReducedMotion()
  const github = socialLinks.find((l) => l.id === 'github')
  const linkedin = socialLinks.find((l) => l.id === 'linkedin')

  return (
    <SectionWrapper ariaLabel="Contact">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.p className="text-mono mb-4 text-accent" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h2
          className="text-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary"
          variants={fadeUp}
        >
          Let&apos;s build something useful.
        </motion.h2>
        <motion.p className="mt-4 text-lg text-text-secondary" variants={fadeUp}>
          I&apos;m interested in software engineering opportunities, ambitious student
          projects, and conversations about technology, products, and systems.
        </motion.p>

        <motion.div className="mt-10" variants={fadeUp}>
          <ContactForm />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          variants={fadeUp}
        >
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          )}
          <Link
            to="/"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
