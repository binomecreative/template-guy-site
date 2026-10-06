import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Template Guy — Invitaciones digitales de boda y XV años',
  description:
    'Diseñamos invitaciones digitales elegantes y editoriales para parejas y familias. Modernas, personalizables y pensadas para WhatsApp.',
  openGraph: {
    title: 'Template Guy — Invitaciones digitales',
    description: 'Diseño editorial para tu boda o XV años. Elegante, digital, inolvidable.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]" style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  )
}
