import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Heart, FileSpreadsheet, Globe, Sparkles } from 'lucide-react'

const PRODUCTS = [
  {
    key: 'invitaciones',
    name: 'Invitaciones digitales',
    tag: 'Más comprado',
    tagColor: 'bg-emerald-500 text-white',
    icon: Heart,
    desc: 'Bodas, XV años y fiestas infantiles con diseño editorial, QR en mesa, libro de firmas y galería colaborativa.',
    priceFrom: 'Desde $890 MXN',
    href: '/invitaciones-digitales',
    live: true,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'excel',
    name: 'Plantillas de Excel',
    tag: 'Muy pronto',
    tagColor: 'bg-amber-100 text-amber-800',
    icon: FileSpreadsheet,
    desc: 'Planeador de boda y XV, presupuesto, lista de invitados, control de proveedores. Listas para descargar.',
    priceFrom: 'Desde $190 MXN',
    href: '/templates-excel',
    live: false,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'mini-sitios',
    name: 'Mini-sitios editoriales',
    tag: 'Muy pronto',
    tagColor: 'bg-amber-100 text-amber-800',
    icon: Globe,
    desc: 'One-pagers premium para fotógrafos, freelancers y pequeños negocios. Portafolio y Linktree editorial.',
    priceFrom: 'Desde $490 MXN',
    href: '/portafolio',
    live: false,
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'brand-kits',
    name: 'Brand kits',
    tag: 'Muy pronto',
    tagColor: 'bg-amber-100 text-amber-800',
    icon: Sparkles,
    desc: 'Logo + paleta + mockups + guía básica para arrancar un negocio con identidad clara.',
    priceFrom: 'Desde $990 MXN',
    href: '/portafolio',
    live: false,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ProductsGrid() {
  return (
    <section id="productos" className="py-32 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-5">
            Qué hacemos
          </p>
          <h2
            className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            Productos digitales <span className="italic">con cuidado del detalle.</span>
          </h2>
          <p className="mt-6 text-base text-neutral-600 leading-relaxed">
            Cuatro líneas de producto. Una sola obsesión: que lo digital se sienta tan editorial
            como el papel bueno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PRODUCTS.map((p) => {
            const Icon = p.icon
            const inner = (
              <div
                className={`group relative overflow-hidden rounded-3xl border transition-all h-full ${
                  p.live
                    ? 'border-black/10 bg-white hover:border-black/30 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)]'
                    : 'border-black/5 bg-neutral-50 hover:bg-white'
                }`}
              >
                {/* Imagen */}
                <div className="relative h-56 overflow-hidden bg-neutral-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-700 ${
                      p.live ? 'group-hover:scale-105' : 'grayscale opacity-60'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full ${p.tagColor}`}
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    </div>
                    {p.live && (
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{p.desc}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                    {p.priceFrom}
                  </p>
                </div>
              </div>
            )

            return p.live ? (
              <Link key={p.key} href={p.href} className="block">
                {inner}
              </Link>
            ) : (
              <Link key={p.key} href={p.href} className="block">
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
