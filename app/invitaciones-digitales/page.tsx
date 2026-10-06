import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import EventTabs from '@/components/EventTabs'
import Features from '@/components/Features'
import Showcase from '@/components/Showcase'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Invitaciones digitales — Template Guy',
  description:
    'Diseñamos invitaciones digitales editoriales para bodas, XV años y fiestas infantiles. Mobile-first, pensadas para WhatsApp.',
}

export default function InvitacionesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="eventos" className="py-24 border-t border-black/5">
          <EventTabs />
        </section>
        <Features />
        <Showcase />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
