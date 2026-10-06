import { Palette, Users, Music, Camera, PenLine, Smartphone } from 'lucide-react'

const FEATURES = [
  {
    icon: Palette,
    title: 'Diseño editorial',
    desc: 'Tipografía Cormorant italic, mucho espacio, nada de plantillas pirateadas. Cada boda luce como editorial de revista.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    desc: 'Pensadas para WhatsApp. Cargan rápido, se ven perfectas en cualquier iPhone o Android, se comparten con un tap.',
  },
  {
    icon: Users,
    title: 'RSVP integrado',
    desc: 'Botón directo a tu WhatsApp. Tus invitados confirman sin fricción, sin apps, sin registros.',
  },
  {
    icon: PenLine,
    title: 'Libro de firmas digital',
    desc: 'Tus invitados dejan un mensaje desde la mesa escaneando un QR. Lo moderas y aparece en la invitación.',
  },
  {
    icon: Camera,
    title: 'Galería colaborativa',
    desc: 'Fotos de toda la noche subidas por los invitados. Comprimidas automáticamente. Moderación opcional.',
  },
  {
    icon: Music,
    title: 'Música de fondo',
    desc: 'Spotify, YouTube o MP3 propio. Reproductor flotante que acompaña al invitado por toda la invitación.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">
            Lo que incluye
          </p>
          <h2
            className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            Todo lo que una invitación <span className="italic">de verdad necesita.</span>
          </h2>
          <p className="mt-6 text-base text-neutral-600 leading-relaxed">
            Sin addons ocultos. Sin planes pro. Sin letras chiquitas. Lo mismo que verías en una
            invitación de boda premium — pero digital, flexible y en tus manos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-7 rounded-2xl border border-black/5 bg-white hover:border-black/10 hover:shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
