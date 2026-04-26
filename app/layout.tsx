import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Triton Garage Doors | Garage Door Repair & Installation Orange County CA',
  description: 'Garage door repair, installation, and motor services across Orange County, CA. Over 8 years of experience. Free estimates. Call 949-463-0500.',
  keywords: 'garage door repair Orange County, garage door installation Orange County, garage door service OC, garage door motor, spring replacement, Irvine, Anaheim, Huntington Beach',
  metadataBase: new URL('https://tritongaragedoors.com'),
  openGraph: {
    title: 'Triton Garage Doors',
    description: 'Garage door repair, installation, and motor services across Orange County, CA. Over 8 years of experience. Free estimates.',
    url: 'https://tritongaragedoors.com',
    siteName: 'Triton Garage Doors',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Triton Garage Doors",
  "description": "Garage door repair, installation, and motor services across Orange County, CA.",
  "url": "https://tritongaragedoors.com",
  "telephone": "+19494630500",
  "email": "andrew@tritongaragedoors.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US",
    "addressLocality": "Orange County"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Orange County, CA"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
