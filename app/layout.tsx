import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// SEO Metadata
export const metadata: Metadata = {
  title: 'Murat Efe Çamoğlu | Mobile Developer · Flutter & Dart',
  description:
    'Murat Efe Çamoğlu – Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisi ve Flutter & Dart mobil geliştirici. Firebase, SQLite, Bluetooth/BLE ve Gemini AI ile uygulamalar.',
  keywords: [
    'Murat Efe Çamoğlu',
    'yazılım geliştirici',
    'Flutter',
    'Dart',
    'Firebase',
    'mobil uygulama',
    'Balıkesir Üniversitesi',
    'bilgisayar mühendisliği',
    'portfolio',
  ],
  authors: [{ name: 'Murat Efe Çamoğlu' }],
  creator: 'Murat Efe Çamoğlu',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Murat Efe Çamoğlu | Mobile Developer · Flutter & Dart',
    description:
      'Flutter ve modern teknolojilerle kullanıcı dostu, yüksek performanslı uygulamalar geliştiren yazılım geliştiricisi.',
    siteName: 'Murat Efe Çamoğlu Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Separate viewport export (required by Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
