'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQ = [
  {
    q: '¿Qué incluye exactamente?',
    a: 'Una invitación digital completa, con URL propia, hasta 10 secciones personalizables (hero, countdown, itinerario, RSVP, dress code, regalos, galería, música, mensaje, historia de amor), libro de firmas, galería colaborativa y mesa de invitados con QR. Tu invitación vive online hasta 3 días después del evento (puedes descargar firmas y fotos antes).',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Plan Lanzamiento: 5 días hábiles. Plan Estándar: 3-5 días hábiles. El plazo empieza a correr desde que nos entregas toda la información (nombres, fecha, fotos, textos). Si tu evento es urgente, podemos trabajar entrega exprés con costo adicional.',
  },
  {
    q: '¿Puedo pedir cambios después de verla?',
    a: 'Sí. Plan Lanzamiento incluye 2 revisiones. Plan Estándar incluye revisiones ilimitadas hasta tu aprobación. Cambios estructurales mayores que impliquen rediseño completo pueden cotizarse por separado.',
  },
  {
    q: '¿Qué pasa con mis fotos y datos?',
    a: 'Las fotos se guardan en almacenamiento privado seguro (Vercel Blob). Nunca se comparten ni se usan sin tu permiso. Los datos de tus invitados (firmas, RSVPs) solo tú los puedes ver desde el panel admin. Consulta el Aviso de Privacidad para detalles.',
  },
  {
    q: '¿Funciona en WhatsApp?',
    a: 'Sí. Está pensada específicamente para abrir desde WhatsApp. Carga rápido, se ve perfecta en iPhone y Android, y se comparte con un tap. Probada en el navegador in-app de WhatsApp.',
  },
  {
    q: '¿Qué pasa 3 días después del evento?',
    a: 'La invitación se elimina permanentemente — con todas sus firmas, fotos y datos de invitados. Antes de ese momento te enviamos un enlace para que descargues en PDF el libro de firmas y un ZIP con todas las fotos subidas por los invitados. Es responsabilidad tuya hacer la descarga a tiempo. Esta política mantiene costos bajos y protege la privacidad de los invitados a largo plazo.',
  },
  {
    q: '¿Hacen invitaciones de XV años y fiestas infantiles?',
    a: 'Sí. Tenemos modo específico de XV años con secciones nuevas (padrinos, corte de honor) y paletas rosa, violeta, coquette y Y2K. Las fiestas infantiles están próximamente. El precio es el mismo que la invitación de boda.',
  },
  {
    q: '¿Dan factura?',
    a: 'Actualmente operamos como persona física y no emitimos CFDI (factura fiscal). Los pagos se reciben vía transferencia o depósito bancario. Si tu empresa requiere factura obligatoriamente, avísanos antes de contratar para evaluar alternativas.',
  },
  {
    q: '¿Qué pasa si cancelo?',
    a: 'Si cancelas antes de que empecemos a diseñar y dentro de las 72 horas posteriores al pago, reembolso completo del 100%. Si ya empezamos el trabajo, reembolso del 50%. Una vez entregada la invitación no hay reembolso.',
  },
  {
    q: '¿Usan mis invitaciones como ejemplo público?',
    a: 'Solo si tú lo autorizas. Al contratar te preguntamos si estás de acuerdo en que la invitación aparezca en nuestro portafolio público (templateguy.mx). Si prefieres privacidad, marcas que no y respetamos esa decisión. Puedes cambiar de opinión escribiendo a binomecreative@gmail.com.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 border-t border-black/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">FAQ</p>
          <h2
            className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            Preguntas <span className="italic">frecuentes.</span>
          </h2>
        </div>

        <ul className="divide-y divide-black/5 border-y border-black/5">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left hover:bg-neutral-50 transition-colors px-2 -mx-2 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-[#0A0A0A] tracking-tight">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      'w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-400 transition-transform duration-300',
                      isOpen && 'rotate-45'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  )}
                >
                  <p className="text-sm text-neutral-600 leading-relaxed pr-8">{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
