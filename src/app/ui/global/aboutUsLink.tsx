'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const AboutUsLink = () => {
  const router = useRouter()
  const pathname = usePathname() // Get the current path

  useEffect(() => {
    // This hook will run only on the client-side
    // You can safely perform DOM manipulation or navigation here
  }, []) // Empty dependency array ensures this runs once on mount

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    if (pathname === '/') {
      // If already on home, just scroll to About Us section
      document
        .getElementById('about-us')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If on another page, go to home and then navigate to About Us
      router.push('/#about-us')
    }
  }

  return (
    <Link
      href="/#about-us"
      className="relative block px-2 py-2 sm:px-4 md:px-6 transition text-white hover:text-[#c08e3a] hover:scale-105"
      onClick={handleClick}
    >
      About Us
    </Link>
  )
}

export default AboutUsLink
