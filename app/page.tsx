import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Top Review Tools — Honest Reviews of AI Tools',
  description: 'We independently test the best AI tools so you can make smarter decisions. Honest ratings, real use cases, zero fluff.',
}

const categories = [
  {
    name: 'AI Chatbots',
    icon: '🤖',
    description: 'General-purpose AI assistants & chatbots',
    href: '/categories',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
  },
  {
    name: 'AI Writing',
    icon: '✍️',
    description: 'Content creation & copywriting tools',
    href: '/categories',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
  },
  {
    name: 'Email Marketing',
    icon: '📧',
    description: 'Newsletter, automation & CRM platforms',
    href: '/categories',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
  },
  {
    name: 'Video & Design',
    icon: '🎨',
    description: 'AI video generation & design tools',
    href: '/categories',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
  },
]

const trustPoints = [
  {
    icon: '🔍',
    title: 'Independently Tested',
    description:
      'Every tool is hands-on tested by our team. We sign up, use the product for weeks, and report exactly what we find — good and bad.',
  },
  {
    icon: '💸',
    title: 'Transparent About Affiliates',
    description:
      'We may earn a commission on purchases, but our ratings are never influenced by partnerships. A bad tool stays a bad review.',
  },
  {
    icon: '🔄',
    title: 'Regularly Updated',
    description:
      'AI tools evolve fast. We revisit our reviews whenever major updates roll out so you always get current information.',
  },
]

const stats = [
  { value: '100+', label: 'Tools Reviewed' },
  { value: '50k+', label: 'Monthly Readers' },
  { value: '3+ yrs', label: 'Testing Experience' },
]

export default function HomePage() {
  const featuredPosts = getAllPosts().slice(0, 3)
  const isSingle = featuredPosts.length === 1

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/5" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
            Trusted by 50,000+ professionals
          </span>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Find the <span className="text-amber-400">Best AI Tools</span>
            <br />for Your Business
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            We independently test and review AI tools so you don&apos;t waste time or money.
            Honest ratings, real use cases, zero fluff.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/captura"
              className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Get Free AI Tools Guide →
            </Link>
            <Link
              href="/blog"
              className="inline-block rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Browse Reviews
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Browse by Category</h2>
          <p className="mb-10 text-center text-slate-500">
            Find the right tool for your specific use case
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`group rounded-xl border p-6 transition-shadow hover:shadow-md ${cat.bg} ${cat.border} ${cat.text}`}
              >
                <div className="mb-3 text-3xl">{cat.icon}</div>
                <h3 className="mb-1 font-semibold">{cat.name}</h3>
                <p className="text-xs opacity-75">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Reviews ── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Featured Reviews</h2>
          <p className="mb-10 text-center text-slate-500">Our most recent hands-on tests</p>

          <div className={isSingle ? 'flex justify-center' : 'grid gap-6 md:grid-cols-3'}>
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md${
                  isSingle ? ' w-full max-w-sm' : ''
                }`}
              >
                <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  {post.category}
                </span>
                <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-amber-600">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < post.rating ? 'text-amber-400' : 'text-slate-300'}>
                      ★
                    </span>
                  ))}
                  <span className="ml-1 text-sm text-slate-500">{post.rating}/5</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              View all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Trust Us ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Why Trust Us</h2>
          <p className="mb-10 text-center text-slate-500">
            Our commitment to honest, independent reviews
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 text-4xl">{point.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Mission ── */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            Top Review Tools was created for one reason: there&apos;s too much hype and too little
            honesty in the AI tool space. We independently test every tool we review, use it in real
            workflows, and give you a straight answer on whether it&apos;s worth your time.
          </p>
          <p className="mb-8 text-slate-500">
            No paid placements. No inflated scores. Just real tests from people who actually use
            these tools every day.
          </p>
          <Link
            href="/captura"
            className="inline-block rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Join 50,000+ readers
          </Link>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mb-3 text-4xl">🎁</div>
          <h2 className="mb-4 text-2xl font-bold">Get Our Free AI Tools Guide</h2>
          <p className="mb-8 text-slate-300">
            Subscribe and receive the{' '}
            <strong className="text-white">10 Best Free AI Tools in 2026</strong> — a curated PDF
            guide, completely free.
          </p>
          <Link
            href="/captura"
            className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Get the Free Guide →
          </Link>
        </div>
      </section>
    </div>
  )
}
