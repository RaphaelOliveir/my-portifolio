import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Raphael Oliveira Portifolio',
  description: 'Hi! My name is Raphael Oliveira and that is my software developer portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
