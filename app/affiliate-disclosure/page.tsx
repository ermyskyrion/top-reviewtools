import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Learn how Top Review Tools earns money and how that affects our editorial independence.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">Affiliate Disclosure</h1>
      <p className="mb-10 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="prose prose-slate max-w-none">
        <h2>Our Commitment to Transparency</h2>
        <p>
          Top Review Tools is reader-supported. When you click on links to products or services on
          our site and make a purchase, we may earn a commission. This comes at no additional cost
          to you and helps us keep the site running and publishing honest reviews.
        </p>

        <h2>FTC Compliance</h2>
        <p>
          In accordance with the{' '}
          <strong>Federal Trade Commission (FTC) guidelines</strong> (16 CFR Part 255), we disclose
          any material connection between Top Review Tools and the companies whose products we
          review. This includes affiliate relationships, sponsorships, and free products received
          for review purposes.
        </p>

        <h2>How We Make Money</h2>
        <p>Top Review Tools may earn revenue through the following means:</p>
        <ul>
          <li>
            <strong>Affiliate commissions</strong> — We participate in affiliate programs. When you
            click an affiliate link and purchase a product, we earn a commission from the merchant
            at no extra cost to you.
          </li>
          <li>
            <strong>Sponsored content</strong> — Occasionally we may publish sponsored posts or
            reviews. These will always be clearly labeled as &ldquo;Sponsored.&rdquo;
          </li>
          <li>
            <strong>Display advertising</strong> — We may display third-party ads on the site.
          </li>
        </ul>

        <h2>Our Editorial Independence</h2>
        <p>
          Our affiliate relationships do <strong>not</strong> influence our reviews or
          recommendations. We only recommend tools we have personally tested or researched
          thoroughly. If a product doesn&apos;t meet our standards, we say so — even if we have an
          affiliate relationship with the company.
        </p>
        <p>
          Ratings, pros, cons, and written assessments are based on our honest evaluation. We
          reserve the right to update reviews as products change over time.
        </p>

        <h2>Affiliate Programs We Participate In</h2>
        <p>
          We may participate in affiliate programs from companies including, but not limited to:
          Brevo (Sendinblue), and other SaaS and AI tool providers. Each program has its own terms
          and commission structure.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships or editorial policies, feel
          free to reach out. You can also{' '}
          <Link href="/blog" className="text-amber-600 underline hover:text-amber-700">
            read our reviews
          </Link>{' '}
          to see how we approach honest, independent analysis.
        </p>
      </div>
    </div>
  )
}
