import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HillsView Productions - Professional Photography & Videography',
  description: 'Award-winning Tanzanian photographer & software engineer specializing in professional photography, videography, and media production services.',
  keywords: 'photography, videography, media production, Tanzania, Julius Ntale, Hillsview',
  authors: [{ name: 'Julius Ntale' }],
  openGraph: {
    title: 'HillsView Productions',
    description: 'Professional Photography & Videography Services',
    url: 'https://hillsviewproduction.com',
    siteName: 'HillsView Productions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HillsView Productions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HillsView Productions',
    description: 'Professional Photography & Videography Services',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
