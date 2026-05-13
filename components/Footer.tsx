import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Top Review Tools. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-slate-400">
          This site may contain affiliate links. We may earn a commission on purchases made
          through links, at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-slate-600">
            Learn more
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
