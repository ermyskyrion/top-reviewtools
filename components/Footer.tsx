import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
              Top Review Tools
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Honest, independent reviews of AI tools for creators, marketers, and entrepreneurs.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">All Reviews</Link></li>
              <li><Link href="/captura" className="hover:text-white transition-colors">Newsletter</Link></li>
              <li>
                <Link href="/lead-magnet/ai-tools-2026.html" className="hover:text-white transition-colors">
                  Free Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories#AI Chatbots" className="hover:text-white transition-colors">AI Chatbots</Link></li>
              <li><Link href="/categories#AI Writing" className="hover:text-white transition-colors">AI Writing</Link></li>
              <li><Link href="/categories#Email Marketing" className="hover:text-white transition-colors">Email Marketing</Link></li>
              <li><Link href="/categories#Video & Design" className="hover:text-white transition-colors">Video & Design</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-700 pt-8 text-xs sm:flex-row">
          <p>© {year} Top Review Tools. All rights reserved.</p>
          <p className="text-center text-slate-500">
            This site may contain affiliate links.{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-300 transition-colors">
              Learn more
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
