import { Hobbies } from '@/components/sections/Hobbies'
import { Principles } from '@/components/sections/Principles'
import { PageLayout } from '@/components/layout/PageLayout'

export function InterestsPage() {
  return (
    <PageLayout>
      <div className="pt-24">
        <Hobbies />
        <Principles />
      </div>
    </PageLayout>
  )
}
