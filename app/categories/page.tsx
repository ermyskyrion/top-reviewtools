import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Categories — Top Review Tools',
  description: 'Browse AI tool reviews by category: AI Chatbots, AI Writing, Email Marketing, and Video & Design.',
}

const categories = [
  {
    name: 'AI Chatbots',
    slug: 'AI Chatbots',
    icon: '🤖',
    description: 'General-purpose AI assistants — Claude, ChatGPT, Gemini',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    heading: 'text-violet-800',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'AI Writing',
    slug: 'AI Writing',
    icon: '✍️',
    description: 'Content creation, copywriting & marketing automation',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    heading: 'text-amber-800',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Email Marketing',
    slug: 'Email Marketing',
    icon: '📧',
    description: 'Email marketing, automation & CRM platforms',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    heading: 'text-sky-800',
    badge: 'bg-sky-100 text-sky-700',
  },
  {
    name: 'Video & Design',
    slug: 'Video & Design',
    icon: '🎨',
    description: 'AI avatar video, text-to-video & image generation',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    heading: 'text-rose-800',
    badge: 'bg-rose-100 text-rose-700',
  },
]

export default function CategoriesPage() {
  const allPosts = getAllPosts()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">Browse by Category</h1>
        <p className="text-slate-500">
          Find the right AI tool for your specific use case.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat) => {
          const posts = allPosts.filter((p) => p.category === cat.slug)

          return (
            <section key={cat.name} id={cat.slug}>
              {/* Category header */}
              <div className={`mb-6 flex items-center gap-4 rounded-xl border p-5 ${cat.bg} ${cat.border}`}>
                <span className="text-4xl">{cat.icon}</span>
                <div>
                  <h2 className={`text-xl font-bold ${cat.heading}`}>{cat.name}</h2>
                  <p className={`text-sm ${cat.heading} opacity-75`}>{cat.description}</p>
                </div>
                <span className={`ml-auto rounded-full px-3 py-1 text-xs font-medium ${cat.badge}`}>
                  {posts.length} {posts.length === 1 ? 'review' : 'reviews'}
                </span>
              </div>

              {/* Posts grid */}
              {posts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                    >
                      <span className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${cat.badge}`}>
                        {post.category}
                      </span>
                      <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-amber-600">
                        {post.title}
                      </h3>
                      <p className="mb-3 text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={i < post.rating ? 'text-amber-400' : 'text-slate-300'}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-1 text-xs text-slate-500">{post.rating}/5</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-slate-400">
                  <p className="text-sm">Reviews coming soon.</p>
                </div>
              )}
            </section>
          )
        })}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/blog"
          className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          View all reviews →
        </Link>
      </div>
    </div>
  )
}
