import type { Metadata } from 'next'
import { Inter, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'HillsView Productions | Premier Photography & Videography Studio',
  description: 'Professional photography and videography services by our award-winning team. Specializing in corporate events, portraits, and commercial media production in Tanzania.',
  keywords: 'professional photography, commercial videography, corporate events, portrait photography, media production, Tanzania, Hillsview Productions',
  authors: [{ name: 'HillsView Productions', url: 'https://hillsviewproduction.com' }],
  creator: 'HillsView Productions',
  publisher: 'HillsView Productions',
  openGraph: {
    title: 'HillsView Productions | Premier Photography & Videography Studio',
    description: 'Professional photography and videography services by our award-winning team.',
    url: 'https://hillsviewproduction.com',
    siteName: 'HillsView Productions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HillsView Productions - Professional Photography Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HillsView Productions | Premier Photography Studio',
    description: 'Professional photography and videography services by our award-winning team.',
    images: ['/og-image.jpg'],
    creator: '@hillsviewprod',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${sourceSans.variable} font-source-sans antialiased`}>
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
