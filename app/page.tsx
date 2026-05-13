import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Top Review Tools — As Melhores Ferramentas de IA',
  description: 'Reviews honestos das melhores ferramentas de inteligência artificial.',
}

export default function HomePage() {
  const featuredPosts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Reviews Honestos de Ferramentas de IA
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Testamos as melhores ferramentas para que você tome decisões mais inteligentes.
          </p>
          <Link
            href="/captura"
            className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Receba Reviews Exclusivos
          </Link>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">
            Reviews em Destaque
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
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
                    <span
                      key={i}
                      className={i < post.rating ? 'text-amber-400' : 'text-slate-300'}
                    >
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
              Ver todos os reviews →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
