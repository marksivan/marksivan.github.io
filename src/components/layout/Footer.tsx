import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { personal } from '@/data/personal'
import { socialLinks } from '@/data/socialLinks'
import { assetPath } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()
  const github = socialLinks.find((l) => l.id === 'github')
  const linkedin = socialLinks.find((l) => l.id === 'linkedin')

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-text-primary">
            {personal.name}
          </p>
          <p className="mt-1 text-sm text-text-muted">
            © {year} · Designed and built by Mark
          </p>
        </div>
        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent"
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
              className="text-text-secondary transition-colors hover:text-accent"
              aria-label={linkedin.label}
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          <a
            href={assetPath(personal.resumePath)}
            className="text-mono text-[0.65rem] text-text-secondary transition-colors hover:text-accent"
          >
            Résumé
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-mono text-[0.65rem] text-text-secondary transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp size={14} aria-hidden />
            Top
          </a>
        </div>
      </div>
    </footer>
  )
}
