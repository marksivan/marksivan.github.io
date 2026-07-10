import { motion } from 'framer-motion'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ProfilePlaceholder } from '@/components/ui/ProfilePlaceholder'
import { personal } from '@/data/personal'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function About() {
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="about" ariaLabel="About Mark">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ProfilePlaceholder />
          {/* Route visual: Accra → Williams */}
          <div className="mt-6 rounded-xl border border-border bg-bg-surface p-4" aria-hidden>
            <svg viewBox="0 0 300 60" className="w-full">
              <line x1="30" y1="30" x2="270" y2="30" stroke="rgba(46,196,160,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="30" cy="30" r="5" fill="#111318" stroke="#2ec4a0" strokeWidth="1" />
              <circle cx="270" cy="30" r="5" fill="#111318" stroke="#2ec4a0" strokeWidth="1" />
              <text x="30" y="52" textAnchor="middle" fill="#5c6474" fontSize="7" fontFamily="monospace">Accra</text>
              <text x="270" y="52" textAnchor="middle" fill="#5c6474" fontSize="7" fontFamily="monospace">Williams</text>
              <circle r="2" fill="#2ec4a0">
                <animateMotion dur="4s" repeatCount="indefinite" path="M30,30 L270,30" />
              </circle>
            </svg>
          </div>
        </motion.div>

        <div>
          <AnimatedHeading
            eyebrow="About"
            title="From Accra to systems that serve people"
          />
          <motion.div
            className="space-y-4 text-text-secondary leading-relaxed"
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp}>
              I grew up in Accra, Ghana, and now study computer science at Williams
              College. I&apos;m interested in software that has to do more than simply
              work—it must remain understandable, reliable, and useful when real people
              depend on it.
            </motion.p>
            <motion.p variants={fadeUp}>
              My projects have taken me from payment synchronization and social platforms
              to adaptive learning systems and clinical workflow tools. Across them,
              I&apos;m most energized by turning complicated systems into experiences
              that feel clear.
            </motion.p>
            <motion.p variants={fadeUp}>
              I care about teaching and mentorship, and I&apos;ve supported STEM students
              through tutoring and campus technology assistance. Outside of class, I&apos;m
              curious about algorithms, human-centered product design, basketball, and
              photography.
            </motion.p>
          </motion.div>

          <motion.dl
            className="mt-8 grid grid-cols-2 gap-4"
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { label: 'Education', value: `${personal.education.school}` },
              { label: 'Degree', value: personal.education.degree },
              { label: 'Graduation', value: personal.education.graduation },
              { label: 'Based in', value: personal.location.current },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <dt className="text-mono text-[0.6rem] text-text-muted">{item.label}</dt>
                <dd className="mt-1 text-sm text-text-primary">{item.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </SectionWrapper>
  )
}
