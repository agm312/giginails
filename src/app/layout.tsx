import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gigi Nails',
  description: 'Professional nail design services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 