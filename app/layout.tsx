import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Humiba Dev',
  description: 'Where I share what I learned',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
