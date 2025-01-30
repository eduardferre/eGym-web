import Image from 'next/image'
import Link from 'next/link'
// import AboutUsLink from './aboutUsLink'
import styles from './global.module.css'

export default function Header() {
  return (
    <header
      className={`sticky top-4 z-50 flex justify-center items-center w-full mx-auto pb-10`}
    >
      <nav
        className={`${styles.navigation} flex font-medium rounded-md text-md text-gray-100 justify-center items-center px-4`}
      >
        <Link href="/">
          <Image
            src="/logo_secondary.svg"
            alt="eGym"
            width={100}
            height={100}
            className="px-2 mr-10 transition hover:scale-105 hover:-translate-y-0.5"
          />
        </Link>
        <div className="flex">
          <Link
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="guide"
            href="/guide"
          >
            Guide
          </Link>
          <Link
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="examples"
            href="/examples"
          >
            Examples
          </Link>
          <Link
            href="/#about-us"
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition text-white hover:text-[#c08e3a] hover:scale-105"
            aria-label="about us"
          >
            About Us
          </Link>
        </div>
        <span className="px-12">|</span>
        <div className="flex gap-x-4 px-2">
          <button
            className={`${styles.login} relative block px-2 py-2 sm:px-4 md:px-6 text-white border border-[#c99e46] rounded-lg transition hover:text-white hover:border-[#c08e3a] hover:bg-[#c08e3a] hover:scale-105 hover:-translate-y-0.5`}
          >
            Login
          </button>
          <button
            className={`${styles.register} relative block px-2 py-2 sm:px-4 md:px-6 text-white border border-[#c99e46] bg-[#c08e3a] rounded-lg transition hover:text-white hover:border hover:bg-transparent hover:scale-105 hover:-translate-y-0.5`}
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  )
}
