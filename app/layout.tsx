import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'DroneScape — Premium Drone Services',
    template: '%s | DroneScape',
  },
  description:
    'DroneScape delivers world-class aerial photography, videography, mapping, inspection, and more. Elevate your perspective with our FAA-certified pilots and cutting-edge drone technology.',
  keywords: [
    'drone services',
    'aerial photography',
    'aerial videography',
    'drone mapping',
    'infrastructure inspection',
    'real estate drone',
  ],
  openGraph: {
    title: 'DroneScape — Premium Drone Services',
    description: 'Elevate your perspective with professional drone services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
