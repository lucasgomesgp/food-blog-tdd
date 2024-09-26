import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-around mt-16 flex-wrap gap-5 lg:gap-0">
      <Link
        href="/"
        className="font-merriweather font-black text-2xl text-blue-principal hover:opacity-70 transition-opacity"
      >
        Food Ninja
      </Link>
      <div className="flex items-center justify-center gap-5">
        <Link
          href="/blog"
          className="text-gray-principal hover:opacity-70 transition-opacity text-lg"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="text-gray-principal hover:opacity-70 transition-opacity text-lg"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-principal hover:opacity-70 transition-opacity text-lg"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
