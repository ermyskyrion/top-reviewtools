import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Top Review Tools
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <li>
            <Link href="/blog" className="hover:text-amber-600 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/captura"
              className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 transition-colors"
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
