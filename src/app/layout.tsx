import type { Metadata } from 'next'
import { onest } from './ui/fonts'
import './ui/globals.css'
import Header from './ui/global/header'
import Footer from './ui/global/footer'

export const metadata: Metadata = {
  title: 'eGym App - Fitness tracking application',
  description:
    'eGym is a comprehensive fitness tracking application designed to optimize your workout routine. With seamless integration of machine learning, it provides personalized exercise guidance, real-time pose tracking, and progress monitoring. Perfect for fitness enthusiasts looking to elevate their training experience.',
  icons: {
    icon: '/logo.webp'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,142,58,0.4),rgba(255,255,255,0))]">
          <div id="coupon-birds-embed-div"></div>
        </div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
