import type { Metadata, Viewport } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'bevlYtics - AI-Powered Analytics Platform',
  description: 'Real-time analytics, automated reports, and intelligent recommendations — all in one seamless SaaS platform.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={courierPrime.className}>{children}</body>
    </html>
  )
}
