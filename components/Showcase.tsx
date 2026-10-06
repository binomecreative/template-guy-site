import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const SHOTS = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    label: 'Hero · Atelier',
  },
  {
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    label: 'Galería · Editorial',
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80',
    label: 'Historia · Cinematic',
  },
]

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">
              Demo en vivo
            </p>
            <h2
              className="font-serif leading-[1.05] tracking-tight"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              Mira cómo luce <span className="italic">una invitación real.</span>
            </h2>
          </div>

          <a
            href="https://maker-bodas.vercel.app/companion"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A0A0A] text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Abrir demo completo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SHOTS.map((s) => (
            <div
              key={s.label}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900"
            >
              <Image
                src={s.url}
                alt={s.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Variante</p>
                <p
                  className="font-serif italic text-2xl mt-1"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-neutral-400 max-w-2xl">
          El demo incluye 12 secciones armadas con tema dark luxury: hero,
          countdown, historia, itinerario, dress code, RSVP, regalos, galería, mensaje, padrinos,
          libro de firmas y galería colaborativa. Cada sección tiene múltiples variantes.
        </p>
      </div>
    </section>
  )
}
