import styles from './global.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      className={`fixed top-0 z-10 flex justify-center items-center w-full mx-auto mt-2`}
    >
      <nav
        className={`${styles.navigation} flex font-medium rounded-md text-md text-gray-100 justify-center items-center py-2 px-4`}
      >
        <Image src="/logo.webp" alt="" width={100} height={100} />
        <div className="flex">
          <a
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition hover:text-[#c08e3a]"
            aria-label="experience"
            href="/#experience"
          >
            Guide
          </a>
          <a
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition hover:text-[#c08e3a]"
            aria-label="projects"
            href="/#projects"
          >
            Examples
          </a>
          <a
            className="relative block px-2 py-2 sm:px-4 md:px-6 transition hover:text-[#c08e3a]"
            aria-label="about-me"
            href="/#about-me"
          >
            About
          </a>
        </div>
        <span className="px-12">|</span>
        <div className="flex gap-x-4">
          <button
            className={`${styles.login} relative block px-2 py-2 sm:px-4 md:px-6 text-white border border-[#c99e46] rounded-lg transition hover:text-white hover:border-[#c08e3a] hover:bg-[#c08e3a]`}
          >
            Login
          </button>
          <button
            className={`${styles.register} relative block px-2 py-2 sm:px-4 md:px-6 text-white border border-[#c99e46] bg-[#c08e3a] rounded-lg transition hover:text-white hover:border hover:bg-transparent`}
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  )
}
