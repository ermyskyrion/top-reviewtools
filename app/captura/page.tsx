import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Get Exclusive Reviews',
  description: 'Sign up and receive exclusive in-depth reviews of the best AI tools, delivered to your inbox.',
}

export default function CapturaPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Exclusive Reviews in Your Inbox
        </h1>
        <p className="mb-8 text-slate-600">
          Get detailed reviews, comparisons and tips on the best AI tools.
          No spam — only valuable content.
        </p>
        <SubscribeForm />
      </div>
    </div>
  )
}
