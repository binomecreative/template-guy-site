'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#features', label: 'Qué hacemos' },
  { href: '#showcase', label: 'Demo' },
  { href: '#pricing', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5'
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

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 hover:text-[#0A0A0A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:binomecreative@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium rounded-full bg-[#0A0A0A] text-white px-4 py-2 hover:bg-neutral-800 transition-colors"
        >
          Contáctanos
        </a>
      </div>
    </header>
  )
}
