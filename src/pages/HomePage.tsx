import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Experience } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Principles } from '@/components/sections/Principles'
import { Hobbies } from '@/components/sections/Hobbies'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Work />
      <Experience />
      <About />
      <Skills />
      <Principles />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}
