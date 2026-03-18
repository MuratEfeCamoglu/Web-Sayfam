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
  title: 'Murat Efe Çamoğlu | Yazılım Geliştirici',
  description:
    'Murat Efe Çamoğlu – Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisi. Flutter, mobil uygulama geliştirme ve web teknolojileri alanında çalışmalar.',
  keywords: [
    'Murat Efe Çamoğlu',
    'yazılım geliştirici',
    'Flutter',
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
    title: 'Murat Efe Çamoğlu | Yazılım Geliştirici',
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
      <head>
        {/* Favicon placeholder */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
