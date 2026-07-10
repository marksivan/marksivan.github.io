import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const symptoms = ['Fever', 'Cough', 'Fatigue']
const followUps: Record<string, string[]> = {
  Fever: ['Duration?', 'Severity?'],
  Cough: ['Productive?', 'Duration?'],
  Fatigue: ['Onset?', 'Impact on daily activities?'],
}

export function SmartClerkVisual() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="relative h-full w-full p-6" aria-hidden>
      <div className="rounded-lg border border-border bg-bg-elevated p-4">
        <p className="text-mono mb-3 text-[0.6rem] text-text-muted">Encounter workspace</p>
        <p className="mb-4 text-xs text-text-secondary">Structured symptom capture</p>

        <div className="flex flex-wrap gap-2">
          {symptoms.map((s) => (
            <button
              key={s}
              type="button"
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                active === s
                  ? 'border-accent/50 bg-accent-muted text-accent'
                  : 'border-border text-text-secondary hover:border-border-strong'
              }`}
              onMouseEnter={() => !reduced && setActive(s)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === s ? null : s)}
            >
              {s}
            </button>
          ))}
        </div>

        {active && (
          <motion.div
            className="mt-4 border-l-2 border-accent/30 pl-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: reduced ? 0.01 : 0.3 }}
          >
            <p className="text-mono mb-2 text-[0.55rem] text-accent">Follow-up</p>
            {followUps[active]?.map((q) => (
              <p key={q} className="text-xs text-text-secondary">
                → {q}
              </p>
            ))}
          </motion.div>
        )}

        <div className="mt-4 rounded border border-dashed border-border p-3">
          <p className="text-mono text-[0.55rem] text-text-muted">Draft plan (editable)</p>
        </div>
      </div>
    </div>
  )
}
