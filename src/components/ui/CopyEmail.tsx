import { useState, useCallback } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CopyEmailProps {
  email: string
  className?: string
}

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }, [email])

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-primary transition-colors hover:border-accent/40 min-h-[44px]',
        className,
      )}
      aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${email}`}
    >
      {copied ? (
        <>
          <Check size={16} className="text-accent" aria-hidden />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} aria-hidden />
          <span>{email}</span>
        </>
      )}
    </button>
  )
}
