import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elm & Stone Landscaping | Cleveland, OH',
  description:
    'Cleveland landscaping and tree services. Get an instant estimate online. Shrub trimming, tree work, mulch installation, and more.',
  openGraph: {
    title: 'Elm & Stone Landscaping | Cleveland, OH',
    description:
      'Cleveland landscaping and tree services. Instant estimates online.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elm & Stone Landscaping',
  description: 'Cleveland landscaping and tree services.',
  telephone: '+12165550140', // demo placeholder — replace with real number before production
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cleveland',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  areaServed: 'Cleveland, OH',
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
