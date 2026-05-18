import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'README Performance Tracker — Track GitHub README Conversions',
  description: 'Monitor README view-to-star conversion rates, A/B test different README versions, and get optimization suggestions for your GitHub repositories.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c8d9479-7615-4c81-bae5-d653d61d98c9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
