import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Lanzamiento',
    priceLabel: '$890',
    priceSub: 'MXN · primeros 10',
    tag: 'Promoción',
    tagColor: 'bg-emerald-500',
    features: [
      'Invitación digital completa',
      'Hasta 10 secciones personalizables',
      '6 paletas de color',
      'Libro de firmas con moderación',
      'Galería colaborativa con QR en mesa',
      'Reproductor de música (Spotify/MP3)',
      '2 revisiones incluidas',
      'Entrega en 5 días hábiles',
    ],
    cta: 'Reservar lugar',
    highlighted: false,
  },
  {
    name: 'Estándar',
    priceLabel: '$1,290',
    priceSub: 'MXN · precio regular',
    tag: 'Más popular',
    tagColor: 'bg-[#0A0A0A]',
    features: [
      'Todo lo del plan Lanzamiento',
      'Secciones ilimitadas',
      'Soporte prioritario por WhatsApp',
      'Revisiones ilimitadas hasta aprobación',
      'Prioridad en el calendario',
      'Entrega en 3-5 días hábiles',
    ],
    cta: 'Empezar ahora',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">Precios</p>
          <h2
            className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            Precio claro. <span className="italic">Sin trampas.</span>
          </h2>
          <p className="mt-6 text-base text-neutral-600 max-w-xl mx-auto">
            Un pago único. Tu invitación online hasta 3 días después del evento. Nada de suscripciones mensuales ni letras chiquitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl flex flex-col ${
                t.highlighted
                  ? 'bg-[#0A0A0A] text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] md:scale-105'
                  : 'bg-white border border-black/5 text-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold tracking-tight">{t.name}</h3>
                <span
                  className={`text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-semibold text-white ${t.tagColor}`}
                >
                  {t.tag}
                </span>
              </div>

              <div className="mb-7">
                <p
                  className={`font-serif leading-none ${t.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 300,
                  }}
                >
                  {t.priceLabel}
                </p>
                <p className={`text-xs mt-2 ${t.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {t.priceSub}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        t.highlighted ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    />
                    <span className={t.highlighted ? 'text-neutral-200' : 'text-neutral-700'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:binomecreative@gmail.com?subject=Me interesa el plan {t.name}"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  t.highlighted
                    ? 'bg-white text-[#0A0A0A] hover:bg-neutral-200'
                    : 'bg-[#0A0A0A] text-white hover:bg-neutral-800'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer legal de aceptación */}
        <p className="mt-10 text-center text-xs text-neutral-500 max-w-xl mx-auto leading-relaxed">
          Al confirmar el pago aceptas los{' '}
          <a href="/terminos" className="underline hover:text-[#0A0A0A]">
            Términos y Condiciones
          </a>{' '}
          y el{' '}
          <a href="/privacidad" className="underline hover:text-[#0A0A0A]">
            Aviso de Privacidad
          </a>
          . Operación como persona física — no se emite CFDI.
        </p>
      </div>
    </section>
  )
}
