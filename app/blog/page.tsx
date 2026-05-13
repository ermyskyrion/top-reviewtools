import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — AI Tool Reviews',
  description: 'All reviews, comparisons and guides for AI tools.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">Blog</h1>
      <p className="mb-10 text-slate-600">Reviews, comparisons and guides for AI tools.</p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-slate-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                {post.category}
              </span>
              <h2 className="mb-2 text-xl font-semibold text-slate-900 hover:text-amber-600">
                {post.title}
              </h2>
            </Link>
            <p className="mb-3 text-slate-600">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>{post.date}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < post.rating ? 'text-amber-400' : 'text-slate-300'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
