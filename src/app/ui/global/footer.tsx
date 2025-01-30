import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="opacity-80 m-4 mt-16 mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="flex flex-col justify-center items-center rounded-lg w-full max-w-screen-xl mx-auto md:flex-row md:items-center md:justify-between py-4 gap-y-2">
        {' '}
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear}{' '}
          <Link
            href="https://eduardferre.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-zinc-800/90 dark:text-zinc-200/90"
          >
            eduardferre
          </Link>{' '}
        </span>{' '}
        <Link
          className="text-sm text-center italic text-zinc-800/90 dark:text-white/90 hover:underline"
          href="https://github.com/midudev/porfolio.dev/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired in midudev portfolio
        </Link>{' '}
        <ul className="flex flex-wrap items-center text-sm font-medium text-zinc-800/90 dark:text-white/90 sm:mt-0">
          {' '}
          <li>
            {' '}
            <Link href="/#about-me" className="hover:underline me-4 md:me-6">
              About
            </Link>{' '}
          </li>{' '}
          <li>
            {' '}
            <Link
              href="mailto:eduardferresanchez@gmail.com"
              className="hover:underline"
            >
              Contact
            </Link>{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </footer>
  )
}
