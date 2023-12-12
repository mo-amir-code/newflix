import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './context/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Newflix',
  description: 'India ka entertainment adda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-7xl relative mx-auto' >
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
