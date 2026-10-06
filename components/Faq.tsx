'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQ = [
  {
    q: '¿Qué incluye exactamente?',
    a: 'Una invitación digital completa, con URL propia, hasta 10 secciones personalizables (hero, countdown, itinerario, RSVP, dress code, regalos, galería, música, mensaje, historia de amor), libro de firmas, galería colaborativa y mesa de invitados con QR. Tu invitación vive online para siempre.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Plan Lanzamiento: 5 días hábiles. Plan Estándar: 3-5 días. Plan Custom: según alcance, mínimo 7-10 días. Si tu boda es urgente, podemos trabajar entrega exprés con costo adicional.',
  },
  {
    q: '¿Puedo pedir cambios después de verla?',
    a: 'Sí. Plan Lanzamiento incluye 2 revisiones. Plan Estándar incluye revisiones ilimitadas hasta tu aprobación. Cambios estructurales mayores pueden tener costo según alcance.',
  },
  {
    q: '¿Qué pasa con mis fotos y datos?',
    a: 'Las fotos se guardan en almacenamiento privado seguro (Vercel Blob). Nunca se comparten ni se usan sin tu permiso. Los datos de tus invitados (firmas, RSVPs) solo tú los puedes ver desde el panel.',
  },
  {
    q: '¿Funciona en WhatsApp?',
    a: 'Sí. Está pensada específicamente para abrir desde WhatsApp. Carga rápido, se ve perfecta en iPhone y Android, y se comparte con un tap. Probado en el navegador in-app de WhatsApp.',
  },
  {
    q: '¿Puedo tener un dominio propio?',
    a: 'En Plan Lanzamiento y Estándar usamos subdominio bodas.templateguy.mx/tu-nombre. Plan Custom incluye dominio propio (ej. ana-y-pedro.com). También podemos conectar un dominio que ya tengas.',
  },
  {
    q: '¿Hacen invitaciones de XV años?',
    a: 'Sí. Tenemos modo específico XV años con secciones nuevas: padrinos, corte de honor, paletas rosa/violeta/coquette/y2k. El precio es el mismo que el plan estándar.',
  },
  {
    q: '¿Qué pasa si cancelo?',
    a: 'Si cancelas antes de que empecemos a diseñar, reembolso completo. Si ya empezamos, reembolso del 50%. Una vez entregada no hay reembolso pero puedes seguir usándola sin problema.',
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
