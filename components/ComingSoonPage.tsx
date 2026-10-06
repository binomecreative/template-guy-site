'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Loader2 } from 'lucide-react'

type Props = {
  eyebrow: string
  title: string
  italicTail?: string
  description: string
  features?: string[]
}

export default function ComingSoonPage({
  eyebrow,
  title,
  italicTail,
  description,
  features = [],
}: Props) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Por ahora: abrir mailto. Después: endpoint real
    window.location.href = `mailto:binomecreative@gmail.com?subject=Avísenme cuando esté listo&body=Mi correo: ${email}`
    setSent(true)
  }

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-[#0A0A0A] mb-10"
        >
          <ArrowLeft className="w-3 h-3" />
          Volver al inicio
        </Link>

        <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
          {eyebrow}
        </p>
        <h1
          className="font-serif text-[#0A0A0A] leading-[1.02] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
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

        <p className="mt-8 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-10 flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            {features.map((f) => (
              <li
                key={f}
                className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-700"
              >
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-14 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-[11px] uppercase tracking-[0.2em] text-amber-800">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Muy pronto
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm focus:outline-none focus:border-[#0A0A0A]"
          />
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-60"
          >
            {sent ? (
              <>Enviado</>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                Avísenme
              </>
            )}
          </button>
        </form>
        <p className="mt-3 text-[11px] text-neutral-400">
          Te mandamos un correo cuando esté disponible. Sin spam.
        </p>
      </div>
    </main>
  )
}
