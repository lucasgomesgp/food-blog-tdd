import './globals.css'

import { Inter, Merriweather, Roboto } from 'next/font/google'

import type { Metadata } from 'next'
import { QueryProvider } from '@/components/query-client-provider'
import { SearchInputProvider } from '@/components/search-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500'],
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Food Ninja',
  description: 'Blog for food lovers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${roboto.variable}`}
      >
        <QueryProvider>
          <SearchInputProvider>{children}</SearchInputProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
