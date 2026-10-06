export default function AboutStrip() {
  return (
    <section id="sobre" className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-6 text-center">
          Sobre Template Guy
        </p>
        <blockquote
          className="font-serif italic text-center leading-[1.2] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 300,
          }}
        >
          &ldquo;Creemos que lo digital no tiene por qué sentirse plantilla. Hacemos
          productos editoriales, con tipografía cuidada y mucho espacio para respirar.
          Como si imprimir ya no fuera opción.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3 mt-10">
          <span className="h-px w-10 bg-white/20" />
          <span className="w-1 h-1 rotate-45 bg-white/40" />
          <span className="h-px w-10 bg-white/20" />
        </div>
        <p className="text-center text-xs text-neutral-500 uppercase tracking-[0.3em] mt-6">
          Grupo Binôme Studio
        </p>
      </div>
    </section>
  )
}
