import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PreplexAi App',
  description: 'Sonar Model by Preplexity',
  generator: 'xtfaisal07',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
