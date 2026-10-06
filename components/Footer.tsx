import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

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
              Diseño editorial para bodas y XV años. Hecho en México con cariño.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-5">
              Navegación
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li><a href="#features" className="hover:text-[#0A0A0A]">Qué hacemos</a></li>
              <li><a href="#showcase" className="hover:text-[#0A0A0A]">Demo</a></li>
              <li><a href="#pricing" className="hover:text-[#0A0A0A]">Precios</a></li>
              <li><a href="#faq" className="hover:text-[#0A0A0A]">FAQ</a></li>
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
            <a href="#" className="hover:text-[#0A0A0A]">Términos</a>
            <a href="#" className="hover:text-[#0A0A0A]">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
