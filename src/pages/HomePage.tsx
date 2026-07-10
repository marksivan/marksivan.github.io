import { About } from '@/components/sections/About'
import { PageLayout } from '@/components/layout/PageLayout'

export function HomePage() {
  return (
    <PageLayout>
      <div className="pt-24">
        <About />
      </div>
    </PageLayout>
  )
}
