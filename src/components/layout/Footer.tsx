import { Link } from 'react-router-dom'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { personal } from '@/data/personal'
import { socialLinks } from '@/data/socialLinks'

export function Footer() {
  const year = new Date().getFullYear()
  const github = socialLinks.find((l) => l.id === 'github')
  const linkedin = socialLinks.find((l) => l.id === 'linkedin')

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-text-muted">
          © {year} {personal.name}
        </p>
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
          <Link
            to="/"
            className="text-mono text-[0.65rem] text-text-secondary transition-colors hover:text-accent"
          >
            Home
          </Link>
        </div>
      </div>
    </footer>
  )
}
