import { Mail, ArrowUpRight } from 'lucide-react'

export default function FinalCta() {
  return (
    <section className="py-32 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Hablemos
        </p>
        <h2
          className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
            fontWeight: 300,
          }}
        >
          Tu boda merece una invitación <br className="hidden sm:block" />
          <span className="italic">a la altura.</span>
        </h2>
        <p className="mt-8 text-base text-neutral-600 max-w-lg mx-auto">
          Cuéntanos cuándo es tu evento y en qué estás pensando. Respondemos en menos de 24 horas,
          siempre con el mismo humano del otro lado.
        </p>
        <a
          href="mailto:binomecreative@gmail.com?subject=Me interesa una invitación"
          className="group mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          <Mail className="w-4 h-4" />
          binomecreative@gmail.com
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
