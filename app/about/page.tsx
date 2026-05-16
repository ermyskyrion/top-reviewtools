import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Top Review Tools',
  description:
    'TopReviewTools is built by Ermys, a data, BI, and technology professional from Brazil. Honest, practical AI and SaaS tool reviews for professionals and teams.',
}

const criteria = [
  'What the tool actually does',
  'Who it is best suited for',
  'Where it saves time',
  'Where it has limitations',
  'How it compares to alternatives',
  'Whether it makes sense for real workflows',
  'Whether the pricing is justified',
  'How it can fit into business, content, data, automation, or productivity use cases',
]

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/5" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Built by someone who actually{' '}
            <span className="text-amber-400">uses these tools.</span>
          </h1>
          <p className="text-lg text-slate-300">
            Honest AI and SaaS reviews from a data and technology professional.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">

          {/* Intro */}
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            Hi, I&apos;m{' '}
            <span className="font-semibold text-amber-600">Ermys</span>{' '}
            — a data, BI, and technology professional from Brazil who has spent years building
            data pipelines, dashboards, automation workflows, and AI-assisted tools for real
            business operations.
          </p>
          <p className="mb-6 leading-relaxed text-slate-600">
            My background is not theoretical. I work hands-on with data engineering, business
            intelligence, cloud infrastructure, automation, and AI applied to practical problems.
            Over the years, I have worked with tools and stacks such as SQL, Python, AWS,
            Redshift, S3, Kestra, Looker, Power BI, QuickSight, React, Next.js, Node.js, and
            modern AI assistants like ChatGPT, Claude, Gemini, and Cursor.
          </p>
          <p className="mb-6 leading-relaxed text-slate-600">
            I created TopReviewTools because I use AI tools in real projects — not just for
            curiosity, but to build systems, organize work, accelerate analysis, write better
            documentation, support decision-making, and improve productivity. I know how powerful
            these tools can be when they are used with clear goals, good judgment, and technical
            discipline.
          </p>
          <p className="mb-10 leading-relaxed text-slate-600">
            At the same time, I also know how confusing the AI tools market has become.
          </p>

          {/* Why TRT exists */}
          <div className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="mb-4 leading-relaxed text-slate-600">
              Every week, a new platform promises to save time, replace workflows, automate teams,
              or transform the way people work. Some tools are genuinely useful. Some are
              overhyped. Some are great for beginners but limited for advanced users. Others look
              impressive in demos but fail when applied to real business needs.
            </p>
            <p className="text-lg font-semibold text-slate-900">That is why TopReviewTools exists.</p>
          </div>

          <p className="mb-6 leading-relaxed text-slate-600">
            The mission of this site is simple: to help professionals, creators, entrepreneurs,
            and teams choose better AI and SaaS tools through honest, practical, and
            well-structured reviews.
          </p>
          <p className="mb-10 leading-relaxed text-slate-600">
            I focus mainly on the U.S. and English-speaking market because many of the best AI
            and SaaS products are launched, priced, and adopted there first. But I also keep a
            bilingual perspective, publishing and thinking in both English and Portuguese, because
            technology should be accessible to people building serious work from anywhere.
          </p>

          {/* Review criteria */}
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How I Review Tools</h2>
          <p className="mb-6 leading-relaxed text-slate-600">My reviews are based on practical criteria:</p>
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {criteria.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 shrink-0 text-amber-500">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mb-10 space-y-4">
            <p className="font-semibold text-slate-900">
              TopReviewTools is not about chasing trends.
            </p>
            <p className="leading-relaxed text-slate-600">It is about separating useful tools from noise.</p>
            <p className="leading-relaxed text-slate-600">
              My goal is to build a reliable resource for people who want to use AI with intention
              — not just because it is popular, but because it can help them work better, think
              clearer, and build faster.
            </p>
            <p className="leading-relaxed text-slate-600">
              TopReviewTools is built for people who want practical answers before spending time,
              money, or energy on another subscription.
            </p>
            <p className="text-lg font-semibold text-slate-900">
              If that is what you are looking for, you are in the right place.
            </p>
          </div>

          {/* Affiliate note */}
          <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
            <p className="mb-1 font-semibold">Affiliate Disclosure</p>
            <p>
              Some links on this site may be affiliate links. That means I may earn a commission
              if you choose to buy through them, at no extra cost to you. This helps support the
              site and allows me to keep producing independent reviews, comparisons, and guides.
              The principle is simple: I only want to recommend tools that I believe are worth
              considering.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Ready to find the right tool?</h2>
          <p className="mb-8 text-slate-500">
            Browse all our honest, hands-on reviews — no hype, no filler.
          </p>
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Read the Reviews →
          </Link>
        </div>
      </section>
    </div>
  )
}
