import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gigi Nails - Fun Nail Designs for Kids!',
  description: 'Explore amazing nail designs, learn nail art, and have fun with colors!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50`}>
        <nav className="bg-pink-500 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🎀 Gigi Nails</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-pink-200">Home</a>
              <a href="/gallery" className="hover:text-pink-200">Gallery</a>
              <a href="/tutorials" className="hover:text-pink-200">Tutorials</a>
              <a href="/color-picker" className="hover:text-pink-200">Color Picker</a>
              <a href="/safety" className="hover:text-pink-200">Safety Tips</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-pink-500 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>Made with 💖 for young nail artists!</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 