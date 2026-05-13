import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { readFile, access } from 'fs/promises'
import path from 'path'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import ReviewLayout from '@/components/ReviewLayout'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

interface Props {
  params: { slug: string }
}

async function getMdxContent(slug: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`)
  try {
    await access(filePath)
    const raw = await readFile(filePath, 'utf8')
    // Remove frontmatter
    return raw.replace(/^---[\s\S]*?---\n/, '')
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const mdxContent = await getMdxContent(params.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {mdxContent ? (
        <article>
          <header className="mb-8">
            <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              {post.category}
            </span>
            <h1 className="mb-3 text-3xl font-bold text-slate-900">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <time dateTime={post.date}>{post.date}</time>
              <div className="flex items-center gap-1" aria-label={`Rating: ${post.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < post.rating ? 'text-amber-400' : 'text-slate-300'}>★</span>
                ))}
                <span className="ml-1 font-medium text-slate-700">{post.rating}/5</span>
              </div>
            </div>
          </header>

          <AffiliateDisclosure />

          <div className="prose prose-slate mt-8 max-w-none">
            <MDXRemote source={mdxContent} />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-3 font-semibold text-green-800">✓ Pros</h3>
              <ul className="space-y-2">
                {post.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-700">
                    <span className="mt-0.5 text-green-500">✓</span>{pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-3 font-semibold text-red-800">✗ Cons</h3>
              <ul className="space-y-2">
                {post.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="mt-0.5 text-red-500">✗</span>{con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {post.affiliateUrl && (
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="mb-4 text-sm text-slate-600">
                Ready to try {post.toolName}? Start free — no credit card required.
              </p>
              <a
                href={post.affiliateUrl}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
              >
                Try {post.toolName} Free →
              </a>
              <p className="mt-3 text-xs text-slate-400">Affiliate link — see disclosure above.</p>
            </div>
          )}
        </article>
      ) : (
        <ReviewLayout post={post} />
      )}
    </div>
  )
}
