import { Instagram, Facebook, Twitter, Mail, Camera, ArrowUpRight } from 'lucide-react'

const SOCIAL = [
  { href: '#', label: 'Instagram', Icon: Instagram },
  { href: '#', label: 'Facebook', Icon: Facebook },
  { href: '#', label: 'Twitter', Icon: Twitter },
  { href: 'mailto:binomecreative@gmail.com', label: 'Email', Icon: Mail },
]

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-black/10 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cross-promotion a Binôme Studio */}
        <div className="mb-14 rounded-3xl bg-[#0A0A0A] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <Camera className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">
              ¿Estás en Ocotlán, Jalisco?
            </p>
            <p
              className="font-serif italic leading-[1.15] tracking-tight"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(1.4rem, 3.5vw, 2.25rem)',
                fontWeight: 300,
              }}
            >
              ¿Necesitas fotografía para tu evento o manejo de redes sociales?
            </p>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              Nosotros también lo hacemos — pero bajo nuestra marca de servicios:{' '}
              <span className="text-white font-medium">Binôme Studio</span>.
            </p>
          </div>
          <a
            href="https://binomestudio.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A0A0A] text-sm font-medium hover:bg-neutral-200 transition-colors flex-shrink-0 self-start md:self-center whitespace-nowrap"
          >
            Visitar binomestudio.mx
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-tight mb-4">
              <span className="w-6 h-6 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center text-[11px] font-bold">
                T
              </span>
              Template Guy
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Diseño editorial para bodas, XV años y más. Hecho en México con cariño.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-5">
              Navegación
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li><a href="/" className="hover:text-[#0A0A0A]">Inicio</a></li>
              <li><a href="/invitaciones-digitales" className="hover:text-[#0A0A0A]">Invitaciones</a></li>
              <li><a href="/templates-excel" className="hover:text-[#0A0A0A]">Plantillas Excel</a></li>
              <li><a href="/invitaciones-digitales#faq" className="hover:text-[#0A0A0A]">FAQ</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-5">
              Contacto
            </p>
            <a
              href="mailto:binomecreative@gmail.com"
              className="inline-block text-sm text-neutral-700 hover:text-[#0A0A0A] mb-5"
            >
              binomecreative@gmail.com
            </a>
            <div className="flex items-center gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-black/10 hover:border-black/30 hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                >
                  <s.Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Template Guy · de Grupo Binôme Studio
          </p>
          <div className="flex items-center gap-5">
            <a href="/terminos" className="hover:text-[#0A0A0A]">Términos</a>
            <a href="/privacidad" className="hover:text-[#0A0A0A]">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
