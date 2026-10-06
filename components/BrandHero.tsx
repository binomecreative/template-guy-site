import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function BrandHero() {
  return (
    <section className="relative pt-32 sm:pt-48 pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Grupo Binôme Studio
        </div>

        <h1
          className="font-serif text-[#0A0A0A] leading-[0.98] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(3rem, 11vw, 8rem)',
            fontWeight: 300,
          }}
        >
          Diseño editorial, <br className="hidden sm:block" />
          <span className="italic">a tu alcance.</span>
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-base sm:text-lg text-neutral-600 leading-relaxed">
          Template Guy crea productos digitales con alma editorial —{' '}
          <strong className="text-[#0A0A0A] font-medium">invitaciones</strong>,{' '}
          <strong className="text-[#0A0A0A] font-medium">plantillas</strong> y{' '}
          <strong className="text-[#0A0A0A] font-medium">mini-sitios</strong> — para parejas,
          familias y pequeños negocios en México.
        </p>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link
            href="/invitaciones-digitales"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-neutral-800 transition-all"
          >
            Ver productos
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="mailto:binomecreative@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 bg-white text-[#0A0A0A] text-sm font-medium hover:border-neutral-400 transition-colors"
          >
            Contáctanos
          </a>
        </div>

        <p className="mt-10 text-[11px] text-neutral-400 uppercase tracking-[0.2em]">
          Diseñado y hecho en México
        </p>
      </div>
    </section>
  )
}
