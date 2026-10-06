import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ComingSoonPage from '@/components/ComingSoonPage'

export const metadata: Metadata = {
  title: 'Portafolio & Mini-sitios — Template Guy',
  description:
    'Mini-sitios editoriales, Linktrees premium y brand kits para pequeños negocios y freelancers.',
}

export default function PortafolioPage() {
  return (
    <>
      <Nav />
      <ComingSoonPage
        eyebrow="Mini-sitios · Linktrees · Brand kits"
        title="Pequeños sitios con"
        italicTail="mucho carácter."
        description="One-pagers editoriales para fotógrafos, chefs, freelancers y pequeños negocios que quieren verse bien sin pagar precios de agencia. Y Linktrees que ya no se vean como Linktree."
        features={[
          'Portafolio fotógrafo',
          'Menú de restaurante',
          'Freelance one-pager',
          'Linktree editorial',
          'Brand kit completo',
          'Casos de estudio',
        ]}
      />
      <Footer />
    </>
  )
}
