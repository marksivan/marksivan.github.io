import { About } from '@/components/sections/About'
import { Hobbies } from '@/components/sections/Hobbies'
import { Principles } from '@/components/sections/Principles'
import { PageLayout } from '@/components/layout/PageLayout'

export function AboutPage() {
  return (
    <PageLayout>
      <div className="pt-24">
        <About />
        <Hobbies />
        <Principles />
      </div>
    </PageLayout>
  )
}
