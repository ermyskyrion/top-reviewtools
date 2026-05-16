import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
          Top Review Tools
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <li>
            <Link href="/blog" className="transition-colors hover:text-amber-600">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/categories" className="transition-colors hover:text-amber-600">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:text-amber-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/lead-magnet/ai-tools-2026.html" className="transition-colors hover:text-amber-600">
              Free Guide
            </Link>
          </li>
          <li>
            <Link
              href="/captura"
              className="rounded-lg bg-amber-500 px-4 py-2 text-white transition-colors hover:bg-amber-600"
            >
              Newsletter
            </Link>
          </li>
        </ul>

        {/* Mobile CTA */}
        <Link
          href="/captura"
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600 md:hidden"
        >
          Newsletter
        </Link>
      </nav>
    </header>
  )
}
