import { useState } from 'react'
import { motion } from 'framer-motion'
import { hobbies } from '@/data/hobbies'
import { WhirlBackground } from '@/components/ui/WhirlBackground'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

function PhotoPlaceholder({ alt, caption }: { alt: string; caption?: string }) {
  return (
    <div
      className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-bg-elevated p-4 text-center"
      role="img"
      aria-label={alt}
    >
      <div className="mb-2 h-8 w-8 rounded-full border border-border-strong" aria-hidden />
      <p className="text-mono text-[0.55rem] text-text-muted">
        {caption ?? 'Add your photo'}
      </p>
      <p className="mt-1 text-mono text-[0.5rem] text-text-muted/60">
        public/images/photography/
      </p>
    </div>
  )
}

export function Hobbies() {
  const reduced = useReducedMotion()
  const [activeHobby, setActiveHobby] = useState(hobbies[0].id)
  const hobby = hobbies.find((h) => h.id === activeHobby) ?? hobbies[0]

  return (
    <SectionWrapper id="hobbies" ariaLabel="Hobbies and interests">
      <div className="relative">
        <WhirlBackground variant="section" />

        <AnimatedHeading
        eyebrow="Beyond code"
        title="Hobbies & interests"
        subtitle="The things that keep me curious outside of engineering."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {hobbies.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setActiveHobby(h.id)}
            className={cn(
              'rounded-full border px-5 py-2.5 text-sm transition-colors min-h-[44px]',
              activeHobby === h.id
                ? 'border-accent/30 bg-accent-muted text-accent'
                : 'border-border text-text-secondary hover:text-text-primary',
            )}
          >
            {h.name}
          </button>
        ))}
      </div>

      <motion.div
        key={hobby.id}
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.01 : 0.4 }}
      >
        <p className="mb-8 max-w-2xl text-text-secondary leading-relaxed">
          {hobby.description}
        </p>

        {hobby.photos.length > 0 && (
          <motion.div
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {hobby.photos.map((photo) => (
              <motion.figure key={photo.id} variants={fadeUp} className="group">
                <PhotoPlaceholder alt={photo.alt} caption={photo.caption} />
                {photo.caption && (
                  <figcaption className="mt-2 text-mono text-[0.55rem] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    {photo.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </motion.div>
        )}
      </motion.div>
      </div>
    </SectionWrapper>
  )
}
