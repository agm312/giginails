import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gigi Nails',
  description: 'Kid-friendly nail salon',
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