import { Contact } from '@/components/sections/Contact'
import { PageLayout } from '@/components/layout/PageLayout'

export function ContactPage() {
  return (
    <PageLayout>
      <div className="pt-24">
        <Contact />
      </div>
    </PageLayout>
  )
}
