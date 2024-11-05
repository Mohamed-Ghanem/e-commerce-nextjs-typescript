import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/Header/Header'
import StoreProvider from './store/storeProvider';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Next.js + Typescript',
  description: 'E-commerce Next.js Typescript Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' bg-gray-100 h-full'>
      <body className={inter.className + ' h-full'}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
