export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  body?: string
  date: string
  category: string
  rating: number
  pros: string[]
  cons: string[]
  toolName: string
  affiliateUrl?: string
}

const posts: Post[] = [
  {
    slug: 'chatgpt-review',
    title: 'ChatGPT Review 2026: Is It Still the Best AI Assistant?',
    excerpt:
      'A complete, honest ChatGPT review for May 2026. We cover GPT-5.4, pricing plans, DALL-E image generation, Sora, Agent Mode, and how ChatGPT compares to Claude.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'AI Assistants',
    rating: 4,
    pros: [
      'Largest AI user base — 700M+ weekly users means best ecosystem',
      'Native image generation with DALL-E (Images 2.0)',
      'Sora video generation built into Plus and above',
      'Agent Mode handles autonomous web tasks end-to-end',
      'Deep Research produces citation-backed long-form reports',
      'Advanced Voice Mode with natural real-time conversation',
      'Custom GPTs marketplace with thousands of specialized tools',
    ],
    cons: [
      'Free tier now shows ads (US, since February 2026)',
      'Go plan ($8/month) is poor value — missing key features, still has ads',
      'Context window (~320 pages on Plus) is smaller than Claude\'s 1M tokens',
      'More prone to hallucinations than Claude on complex analytical tasks',
      'Training data opt-out is not enabled by default',
    ],
    toolName: 'ChatGPT',
    affiliateUrl: 'https://chatgpt.com',
  },
  {
    slug: 'claude-ai-review',
    title: 'Claude AI Review 2026: Is It Worth It?',
    excerpt:
      'A complete, honest Claude AI review for 2026. We cover pricing, Claude Code, MCP integrations, the 1M token context window, and how it compares to ChatGPT.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'AI Assistants',
    rating: 4.5,
    pros: [
      '1 million token context window — handles entire codebases',
      'Claude Code is a genuinely autonomous coding agent',
      'MCP connects to 6,000+ apps without custom integrations',
      'Constitutional AI makes responses notably more nuanced',
      'Strong performance on long-form writing and analysis',
      'Available on web, iOS, Android, and desktop',
    ],
    cons: [
      'No image generation (unlike ChatGPT or Gemini)',
      'More conservative on some content types than competitors',
      'Rate limits reset every 5–8 hours on Free and Pro plans',
      'Large price gap between Pro ($20) and Max ($100)',
    ],
    toolName: 'Claude AI',
    affiliateUrl: 'https://claude.ai',
  },
  {
    slug: 'brevo-review',
    title: 'Brevo Review 2026: Is It Worth It for Email Marketing?',
    excerpt: 'An honest Brevo review covering pricing, features, the free plan, and how it compares to Mailchimp. Find out if Brevo is worth it for your business in 2026.',
    content: 'Full review available — see MDX source.',
    date: '2026-01-15',
    category: 'Email Marketing',
    rating: 4,
    pros: [
      'Generous free plan (300 emails/day, unlimited contacts)',
      'All-in-one: email, SMS, WhatsApp, live chat',
      'Intuitive drag-and-drop editor',
      'Powerful automation even on lower-tier plans',
      'Pay-per-email pricing — not per contact',
    ],
    cons: [
      'Daily sending limit on free plan can be restrictive',
      'Brevo branding on free plan emails',
      'Learning curve for advanced automation',
      'Phone support only on Enterprise plan',
    ],
    toolName: 'Brevo',
    affiliateUrl: 'https://www.brevo.com',
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
