'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Heart, FileSpreadsheet, Globe, Sparkles, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type SubItem = {
  label: string
  href: string
  Icon: typeof Heart
  desc: string
  tag?: string
  tagColor?: string
}

const SUB_PRODUCTS: SubItem[] = [
  {
    label: 'Invitaciones digitales',
    href: '/invitaciones-digitales',
    Icon: Heart,
    desc: 'Bodas, XV años y fiestas infantiles',
    tag: 'Más comprado',
    tagColor: 'bg-emerald-500 text-white',
  },
  {
    label: 'Plantillas de Excel',
    href: '/templates-excel',
    Icon: FileSpreadsheet,
    desc: 'Planeador de boda, presupuesto, invitados',
    tag: 'Pronto',
    tagColor: 'bg-amber-100 text-amber-800',
  },
  {
    label: 'Mini-sitios editoriales',
    href: '/portafolio',
    Icon: Globe,
    desc: 'Portafolios, Linktrees, one-pagers',
    tag: 'Pronto',
    tagColor: 'bg-amber-100 text-amber-800',
  },
  {
    label: 'Brand kits',
    href: '/portafolio',
    Icon: Sparkles,
    desc: 'Logo + paleta + mockups + guía',
    tag: 'Pronto',
    tagColor: 'bg-amber-100 text-amber-800',
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/5'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="w-6 h-6 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center text-[11px] font-bold">
            T
          </span>
          Template Guy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <div
            onMouseEnter={() => setDesktopOpen(true)}
            onMouseLeave={() => setDesktopOpen(false)}
            className="relative"
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-[#0A0A0A] transition-colors py-5"
              aria-expanded={desktopOpen}
            >
              Qué hacemos
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  desktopOpen && 'rotate-180'
                )}
              />
            </button>

            {/* Megamenu */}
            {desktopOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-[640px] bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] border border-black/5 p-3">
                  <div className="grid grid-cols-2 gap-1">
                    {SUB_PRODUCTS.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-neutral-100 group-hover:bg-[#0A0A0A] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                          <s.Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-medium text-[#0A0A0A]">{s.label}</p>
                            {s.tag && (
                              <span
                                className={cn(
                                  'text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full',
                                  s.tagColor
                                )}
                              >
                                {s.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-500 leading-snug">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/invitaciones-digitales#showcase"
            className="text-sm text-neutral-600 hover:text-[#0A0A0A] transition-colors"
          >
            Demo
          </a>
          <a
            href="/invitaciones-digitales#pricing"
            className="text-sm text-neutral-600 hover:text-[#0A0A0A] transition-colors"
          >
            Precios
          </a>
          <a
            href="/invitaciones-digitales#faq"
            className="text-sm text-neutral-600 hover:text-[#0A0A0A] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:binomecreative@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium rounded-full bg-[#0A0A0A] text-white px-4 py-2 hover:bg-neutral-800 transition-colors"
        >
          Contáctanos
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="sm:hidden p-1.5 -mr-1.5 text-neutral-700"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl px-6 py-4 space-y-1">
          <button
            type="button"
            onClick={() => setMobileSubOpen((v) => !v)}
            className="w-full flex items-center justify-between py-2.5 text-sm text-neutral-700"
          >
            Qué hacemos
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform',
                mobileSubOpen && 'rotate-180'
              )}
            />
          </button>
          {mobileSubOpen && (
            <div className="pl-3 space-y-1 border-l border-black/5">
              {SUB_PRODUCTS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-start gap-2.5 py-2.5 text-sm text-neutral-700"
                >
                  <s.Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <div className="flex items-center gap-2">
                    {s.label}
                    {s.tag && (
                      <span
                        className={cn(
                          'text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full',
                          s.tagColor
                        )}
                      >
                        {s.tag}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
          <a
            href="/invitaciones-digitales#pricing"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm text-neutral-700"
          >
            Precios
          </a>
          <a
            href="/invitaciones-digitales#faq"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm text-neutral-700"
          >
            FAQ
          </a>
          <a
            href="mailto:binomecreative@gmail.com"
            className="block mt-3 text-center text-xs font-medium rounded-full bg-[#0A0A0A] text-white px-4 py-3"
          >
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  )
}
