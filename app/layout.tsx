import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sowmiya M S | Full Stack & AI Developer',
  description: 'Portfolio of Sowmiya M S - A passionate Full Stack Developer and AI enthusiast specializing in building scalable web applications and AI-powered solutions.',
  keywords: ['Full Stack Developer', 'AI Developer', 'React', 'Node.js', 'Machine Learning', 'Web Development'],
  authors: [{ name: 'Sowmiya M S' }],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
