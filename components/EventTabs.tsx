'use client'

import { useState } from 'react'
import { Heart, Sparkles, Cake } from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = [
  {
    key: 'bodas',
    label: 'Bodas',
    tag: 'Más comprado',
    icon: Heart,
    headline: 'Para la boda de tu vida',
    sub: 'Diseñamos invitaciones editoriales que tus invitados van a querer screenshotear.',
  },
  {
    key: 'xv-anos',
    label: 'XV años',
    tag: null,
    icon: Sparkles,
    headline: 'Para los XV que marcarán tu adultez',
    sub: 'Secciones específicas para quinceañeras: padrinos, corte de honor, paletas rosa, violeta, coquette y Y2K.',
  },
  {
    key: 'fiestas',
    label: 'Fiestas infantiles',
    tag: 'Próximamente',
    icon: Cake,
    headline: 'Para los primeros cumpleaños que recordarán todos',
    sub: 'Baby showers, bautizos, cumples. Formato breve y colorido pensado para WhatsApp familiar.',
  },
]

export default function EventTabs() {
  const [active, setActive] = useState('bodas')
  const current = TABS.find((t) => t.key === active) ?? TABS[0]

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((t) => {
          const Icon = t.icon
          const isActive = active === t.key
          const isSoon = t.tag === 'Próximamente'
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={cn(
                'relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border',
                isActive
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {t.label}
              {t.tag && (
                <span
                  className={cn(
                    'ml-1 text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full',
                    isSoon
                      ? 'bg-amber-100 text-amber-700'
                      : isActive
                        ? 'bg-emerald-400 text-emerald-950'
                        : 'bg-emerald-500 text-white'
                  )}
                >
                  {t.tag}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Headline + sub */}
      <div className="text-center max-w-2xl mx-auto">
        <h2
          className="font-serif text-[#0A0A0A] leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 300,
          }}
        >
          {current.headline.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="italic">{current.headline.split(' ').slice(-2).join(' ')}</span>
        </h2>
        <p className="mt-4 text-base text-neutral-600 leading-relaxed">{current.sub}</p>
      </div>
    </div>
  )
}
