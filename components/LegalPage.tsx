import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Section = {
  heading: string
  body: React.ReactNode
}

type Props = {
  eyebrow: string
  title: string
  italicTail?: string
  lastUpdate: string
  intro?: React.ReactNode
  sections: Section[]
}

export default function LegalPage({
  eyebrow,
  title,
  italicTail,
  lastUpdate,
  intro,
  sections,
}: Props) {
  return (
    <main className="pt-28 pb-24 min-h-screen">
      <article className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-[#0A0A0A] mb-10"
        >
          <ArrowLeft className="w-3 h-3" />
          Volver al inicio
        </Link>

        <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">
          {eyebrow}
        </p>
        <h1
          className="font-serif text-[#0A0A0A] leading-[1.02] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 300,
          }}
        >
          {title}
          {italicTail && (
            <>
              {' '}
              <span className="italic">{italicTail}</span>
            </>
          )}
        </h1>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-neutral-400">
          Última actualización: {lastUpdate}
        </p>

        {intro && <div className="mt-10 text-neutral-700 leading-relaxed">{intro}</div>}

        <div className="mt-14 space-y-14">
          {sections.map((s, i) => (
            <section key={i}>
              <h2
                className="font-serif text-[#0A0A0A] leading-tight tracking-tight mb-5"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 400,
                }}
              >
                <span className="text-neutral-400 font-mono text-sm tabular-nums mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.heading}
              </h2>
              <div className="text-sm text-neutral-700 leading-relaxed space-y-4 pl-10">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-black/10 text-xs text-neutral-500 leading-relaxed">
          <p>
            <strong className="text-[#0A0A0A]">Responsable:</strong> Omar Alejandro Romo García,
            operando bajo el nombre comercial de Template Guy / Binôme Studio.
          </p>
          <p className="mt-2">
            <strong className="text-[#0A0A0A]">Domicilio:</strong> Ocotlán, Jalisco, México.
          </p>
          <p className="mt-2">
            <strong className="text-[#0A0A0A]">Contacto:</strong>{' '}
            <a href="mailto:binomecreative@gmail.com" className="underline hover:text-[#0A0A0A]">
              binomecreative@gmail.com
            </a>
          </p>
        </div>
      </article>
    </main>
  )
}
