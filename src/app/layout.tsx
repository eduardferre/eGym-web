import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { montserrat } from './ui/fonts'
import './ui/globals.css'

const geistSans = localFont({
  src: './ui/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './ui/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'eGym App - Fitness tracking application',
  description:
    'eGym is a comprehensive fitness tracking application designed to optimize your workout routine. With seamless integration of machine learning, it provides personalized exercise guidance, real-time pose tracking, and progress monitoring. Perfect for fitness enthusiasts looking to elevate their training experience.',
  icons: {
    icon: '/favicon.webp'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0e0e11_50%,#c08e3a_120%)]"></div>
        {children}
      </body>
    </html>
  )
}
