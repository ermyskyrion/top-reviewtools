import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Top Review Tools — Honest Reviews of AI Tools',
    template: '%s | Top Review Tools',
  },
  description: 'Honest reviews of the best AI tools for productivity and business.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://top-reviewtools.com.br'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Top Review Tools',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
