import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Nuevo · Invitaciones digitales 2027
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-[#0A0A0A] leading-[1.02] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 300,
          }}
        >
          Invitaciones digitales <br className="hidden sm:block" />
          <span className="italic">que no se olvidan.</span>
        </h1>

        {/* Sub */}
        <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-neutral-600 leading-relaxed">
          Diseñamos invitaciones editoriales de boda y XV años pensadas para WhatsApp.
          Elegantes, personalizables, con libro de firmas y galería colaborativa incluidos.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="https://maker-bodas.vercel.app/companion"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-neutral-800 transition-all"
          >
            Ver demo en vivo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 bg-white text-[#0A0A0A] text-sm font-medium hover:border-neutral-400 transition-colors"
          >
            Ver precios
          </a>
        </div>

        <p className="mt-6 text-[11px] text-neutral-400 uppercase tracking-[0.2em]">
          Hecho en México · Entrega en 5 días
        </p>
      </div>

      {/* Device mockups */}
      <div className="mt-20 sm:mt-28 max-w-5xl mx-auto px-6 relative">
        <div className="relative mx-auto flex items-end justify-center gap-4 sm:gap-6">
          <PhoneMockup
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80"
            className="hidden sm:block w-40 sm:w-48 md:w-56 translate-y-6 opacity-80 scale-[0.9]"
          />
          <PhoneMockup
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
            className="w-52 sm:w-64 md:w-72 z-10"
          />
          <PhoneMockup
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
            className="hidden sm:block w-40 sm:w-48 md:w-56 translate-y-6 opacity-80 scale-[0.9]"
          />
        </div>

        {/* Fade bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

function PhoneMockup({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[2rem] bg-[#0A0A0A] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.15)] ${className}`}
    >
      <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-neutral-900">
        <Image
          src={src}
          alt="Invitación digital"
          fill
          sizes="300px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute bottom-6 left-5 right-5 text-white">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-70 mb-2">Save the date</p>
          <p
            className="italic leading-[0.95]"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem' }}
          >
            Ana
          </p>
          <p className="text-[9px] uppercase tracking-[0.4em] opacity-70 my-1.5">&</p>
          <p
            className="italic leading-[0.95]"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem' }}
          >
            Pedro
          </p>
          <p className="text-[9px] uppercase tracking-[0.4em] opacity-70 mt-3">12.06.2027</p>
        </div>
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
      </div>
    </div>
  )
}
