import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alumna • Secure & Real-Time Alumni Directory',
  description: 'Build your alumni network in minutes with secure magic-link login, real-time updates, and a beautiful directory.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen min-h-screen text-gray-800 font-sans`}>
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 