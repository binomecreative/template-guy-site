import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ComingSoonPage from '@/components/ComingSoonPage'

export const metadata: Metadata = {
  title: 'Plantillas de Excel — Template Guy',
  description:
    'Planeadores de boda y XV, presupuestos, listas de invitados, control de proveedores. Listos para descargar.',
}

export default function TemplatesExcelPage() {
  return (
    <>
      <Nav />
      <ComingSoonPage
        eyebrow="Plantillas de Excel · Google Sheets"
        title="Planeadores que hacen"
        italicTail="el trabajo pesado por ti."
        description="Estamos armando una colección de plantillas editoriales para planear bodas, XV años y manejar la vida freelance. Checklists, presupuestos, listas de invitados — todo pre-diseñado y listo para editar."
        features={[
          'Planeador de boda 12 meses',
          'Presupuesto de XV',
          'Lista de invitados con RSVP',
          'Control de proveedores',
          'Timeline del evento',
          'Finanzas personales',
        ]}
      />
      <Footer />
    </>
  )
}
