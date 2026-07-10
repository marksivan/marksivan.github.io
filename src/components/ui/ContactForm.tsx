import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const formUrl = import.meta.env.VITE_CONTACT_FORM_URL

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formUrl) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(formUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!formUrl) {
    return (
      <div className="rounded-xl border border-border bg-bg-surface p-6 text-center text-sm text-text-secondary">
        <p>Contact form is being configured. Reach out via LinkedIn or GitHub in the meantime.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-4 text-left"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="contact-name" className="text-mono mb-2 block text-[0.65rem] text-text-muted">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-mono mb-2 block text-[0.65rem] text-text-muted">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-mono mb-2 block text-[0.65rem] text-text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
          placeholder="What would you like to talk about?"
        />
      </div>

      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <Button
        type="submit"
        variant="primary"
        className={cn('w-full sm:w-auto', status === 'submitting' && 'opacity-70')}
        disabled={status === 'submitting'}
      >
        <Send size={16} aria-hidden />
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-accent" role="status">
          <CheckCircle size={16} aria-hidden />
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
          <AlertCircle size={16} aria-hidden />
          Something went wrong. Try again or reach out on LinkedIn.
        </p>
      )}
    </form>
  )
}
