import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { FoundationIcon, isFoundationSkill } from '@/lib/foundationIcons'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const cardHover = {
  y: -4,
  borderColor: 'rgba(46, 196, 160, 0.35)',
  boxShadow: '0 16px 32px -20px rgba(0, 0, 0, 0.45)',
}

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id)
  const reduced = useReducedMotion()
  const activeGroup = skillGroups.find((g) => g.id === active) ?? skillGroups[0]

  return (
    <SectionWrapper id="skills" ariaLabel="Skills and toolkit">
      <div className="relative">
        <AnimatedHeading
          eyebrow="Toolkit"
          title="How I build"
        />

        <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr] lg:gap-8">
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={active === group.id}
              aria-controls={`panel-${group.id}`}
              onClick={() => setActive(group.id)}
              className={cn(
                'shrink-0 border px-3 py-2.5 text-left text-sm transition-colors min-h-[44px]',
                active === group.id
                  ? 'border-accent bg-accent-muted text-accent'
                  : 'border-border text-text-secondary hover:border-border-strong hover:text-text-primary',
              )}
            >
              <span className="text-mono text-[0.65rem]">{group.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          id={`panel-${activeGroup.id}`}
          role="tabpanel"
          aria-label={activeGroup.label}
          whileHover={reduced ? undefined : cardHover}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="surface-elevated self-start border border-border p-4 transition-colors md:p-5"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: reduced ? 0.01 : 0.3 }}
            >
              <h3 className="text-mono mb-4 text-accent">{activeGroup.label}</h3>
              <div
                className={cn(
                  'flex flex-wrap gap-2',
                  activeGroup.id === 'foundations' && 'gap-3',
                )}
              >
                {activeGroup.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className={cn(
                      'inline-flex items-center gap-2 border border-border bg-bg-surface text-sm text-text-primary',
                      activeGroup.id === 'foundations' ? 'px-4 py-2.5' : 'px-3 py-2',
                    )}
                    initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: reduced ? 0 : i * 0.03 }}
                  >
                    {isFoundationSkill(skill) ? (
                      <span className="flex h-7 w-7 items-center justify-center border border-accent/20 bg-accent-muted">
                        <FoundationIcon name={skill} size={18} />
                      </span>
                    ) : (
                      <SkillIcon name={skill} size={16} />
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
