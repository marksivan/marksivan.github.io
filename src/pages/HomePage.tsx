import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { PageLayout } from '@/components/layout/PageLayout'

export function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Work featuredOnly showMoreProjects />
      <Experience />
      <Skills />
      <Contact />
    </PageLayout>
  )
}
