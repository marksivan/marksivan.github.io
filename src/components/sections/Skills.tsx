import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { FoundationIcon, isFoundationSkill } from '@/lib/foundationIcons'
import { WhirlBackground } from '@/components/ui/WhirlBackground'
import { AnimatedHeading } from '@/components/motion/AnimatedHeading'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id)
  const reduced = useReducedMotion()
  const activeGroup = skillGroups.find((g) => g.id === active) ?? skillGroups[0]

  return (
    <SectionWrapper ariaLabel="Skills and toolkit">
      <div className="relative">
        <WhirlBackground variant="section" />

        <AnimatedHeading
          eyebrow="Toolkit"
          title="How I build"
          subtitle="Organized by how I apply them — not by arbitrary proficiency scores."
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
                'shrink-0 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors min-h-[44px]',
                active === group.id
                  ? 'border-accent/30 bg-accent-muted text-accent'
                  : 'border-border text-text-secondary hover:border-border-strong hover:text-text-primary',
              )}
            >
              <span className="text-mono text-[0.6rem]">{group.label}</span>
              <span className="mt-0.5 block text-xs text-text-muted">
                {group.items.length} items
              </span>
            </button>
          ))}
        </div>

        <div
          id={`panel-${activeGroup.id}`}
          role="tabpanel"
          aria-label={activeGroup.label}
          className="surface-elevated self-start p-4 md:p-5"
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
                      'inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface text-sm text-text-primary',
                      activeGroup.id === 'foundations' ? 'px-4 py-2.5' : 'px-4 py-2',
                    )}
                    initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: reduced ? 0 : i * 0.03 }}
                  >
                    {isFoundationSkill(skill) ? (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/20 bg-accent-muted">
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
        </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
