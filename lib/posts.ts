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
    slug: 'synthesia-review',
    title: 'Synthesia Review 2026: Best AI Avatar Video Tool?',
    excerpt:
      'A complete, honest Synthesia review for May 2026. We cover pricing, hidden costs, AI avatars, AI Dubbing, and how Synthesia compares to HeyGen and InVideo. Is it worth it?',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'Video & Design',
    rating: 3.5,
    pros: [
      '230+ AI avatars in 160+ languages and accents — largest avatar library',
      'AI Dubbing translates entire videos with lip sync automatically',
      'PowerPoint to video conversion in minutes',
      'Interactive video with branching scenarios for training content',
      'SOC 2 Type II, ISO 27001, and GDPR compliant — enterprise-ready',
      'Used by 50,000+ teams including Fortune 100 companies',
      'Sora 2 + VEO 3.1 integration for AI-generated B-roll clips',
      'No camera, studio, or acting required for professional presenter videos',
    ],
    cons: [
      'Most expensive per-minute in the category — $2.90/min on Starter',
      'Starter plan is just 10 minutes/month — very restrictive for $29',
      'No middle tier between Starter ($29) and Creator ($89)',
      'SCORM export locked to Enterprise — critical L&D feature behind paywall',
      'Custom Studio Avatar (digital twin) costs $1,000/year as an add-on',
      'Content moderation can reject legitimate business content',
      'Avatars still have uncanny valley effect for some viewers',
      'Not cost-effective for solo creators or social media content',
    ],
    toolName: 'Synthesia',
    affiliateUrl: 'https://synthesia.io',
  },
  {
    slug: 'adobe-firefly-review',
    title: 'Adobe Firefly Review 2026: Is It Worth It for Designers?',
    excerpt:
      'A complete, honest Adobe Firefly review for May 2026. We cover the credit system, Generative Fill, AI video generation, partner models, pricing, and how Firefly compares to Midjourney and DALL-E.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'Video & Design',
    rating: 4,
    pros: [
      'Commercially safe — trained on licensed Adobe Stock and public domain only',
      'IP indemnification for enterprise customers — legally defensible content',
      'Deep Photoshop, Illustrator, and Premiere Pro integration',
      'Generative Fill and Generative Expand are best-in-class for photo editing',
      'Partner models (Google Veo 3, Runway, Midjourney) accessible inside one interface',
      'Content Credentials watermark for transparency on AI-generated assets',
      'Standard features unlimited on paid plans — no credits consumed for everyday work',
      '4,000 credits included free with Creative Cloud All Apps subscription',
    ],
    cons: [
      'Credits do not roll over — unused credits expire monthly',
      'Video generation is credit-heavy: 100 credits per 5-second clip',
      'Free tier is watermarked and low-resolution — evaluation only',
      'Enterprise API requires approximately $1,000/month minimum commitment',
      'Image artistic quality is lower than Midjourney for creative work',
      'Creative Cloud All Apps subscribers get 4,000 free credits — standalone Pro is redundant',
      'Five pricing tiers is confusing with overlapping use cases',
      'Fast mode uses 2x credits — easy to burn through allocation quickly',
    ],
    toolName: 'Adobe Firefly',
    affiliateUrl: 'https://firefly.adobe.com',
  },
  {
    slug: 'invideo-ai-review',
    title: 'InVideo AI Review 2026: Best AI Video Generator?',
    excerpt:
      'A complete, honest InVideo AI review for May 2026. We cover text-to-video, voice cloning, Sora 2 + VEO 3.1 integration, pricing, and how InVideo compares to Synthesia and HeyGen.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'Video & Design',
    rating: 4,
    pros: [
      'Text to video in minutes — script, footage, voiceover, subtitles and music automated',
      'Sora 2 + VEO 3.1 access on Plus ($25/month) — would cost $450+/month separately',
      'Voice cloning from a 30-second audio sample — no studio required',
      '50+ languages supported for multilingual video production',
      '16 million+ stock media library via iStock integration',
      'AI avatars enable faceless video production at scale',
      'Conversational editing — refine videos by typing instructions',
      'Free plan available with no credit card required',
    ],
    cons: [
      'Free plan watermark is prominent and not subtle',
      'AI credit minutes do not roll over monthly — unused credits are lost',
      'AI voiceover pronunciation can be inconsistent on names and technical terms',
      'Less creative control than traditional editors like Premiere or DaVinci Resolve',
      'Generated copy tends to be generic without strong, specific prompts',
      'Not suitable for high-end cinematic productions',
    ],
    toolName: 'InVideo AI',
    affiliateUrl: 'https://invideo.io',
  },
  {
    slug: 'canva-ai-review',
    title: 'Canva AI Review 2026: Is Magic Studio Worth It?',
    excerpt:
      'A complete, honest Canva AI review for May 2026. We cover Magic Studio, Dream Lab, pricing, and whether Canva Pro is worth it vs Adobe Express and Figma.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'Video & Design',
    rating: 4.5,
    pros: [
      '190 million users — largest design platform with the best template library',
      'Magic Studio replaces 3–4 separate tools (stock photos, scheduler, AI image gen)',
      'No design skills required — template-first approach works for everyone',
      'Pro at $15/month is exceptional value vs buying tools separately',
      '30-day free trial on Pro — risk-free to evaluate',
      'Magic Resize instantly adapts designs for any platform',
      'Background Remover and Magic Eraser save hours on image editing',
      'Available on web, iOS, Android, and desktop',
    ],
    cons: [
      'AI image quality lower than dedicated tools like Midjourney or DALL-E',
      'Teams pricing increased 300% in 2024 — controversial and expensive',
      'AI credits do not roll over monthly — use them or lose them',
      'Free tier AI limits are lifetime caps, not monthly resets',
      'Some premium templates cost extra even on Pro',
      'Not suitable for professional UI/UX design — use Figma instead',
    ],
    toolName: 'Canva',
    affiliateUrl: 'https://canva.com',
  },
  {
    slug: 'gemini-review',
    title: 'Google Gemini Review 2026: Best AI for Google Users?',
    excerpt:
      'A complete, honest Google Gemini review for May 2026. We cover Gemini 3.1 Pro, pricing, Deep Research, Veo 3.1 video generation, and how Gemini compares to ChatGPT and Claude.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'AI Chatbots',
    rating: 4,
    pros: [
      'Best-in-class Google Workspace integration (Gmail, Docs, Sheets, Slides)',
      '1M token context window on Pro plan — matches Claude',
      'Veo 3.1 video generation included on Pro ($19.99/month)',
      'Deep Research browses hundreds of sites autonomously',
      'NotebookLM is exceptional for document and PDF analysis',
      'AI Pro at $19.99/month is outstanding value vs competitors',
      'Google AI Plus at $7.99/month includes 200GB storage',
      'Gemini Live enables natural real-time voice conversation',
    ],
    cons: [
      'Ultra plan at $249.99/month is extremely expensive',
      'Gemini Agent is still US-only as of May 2026',
      'Less capable than Claude Code for complex multi-file coding tasks',
      'Best value only if you already use Google apps — ecosystem lock-in',
      'Plus plan limited to 128K context window (vs 1M on Pro)',
      'Deep Think reasoning mode still listed as coming soon on Ultra',
    ],
    toolName: 'Google Gemini',
    affiliateUrl: 'https://gemini.google.com',
  },
  {
    slug: 'chatgpt-review',
    title: 'ChatGPT Review 2026: Is It Still the Best AI Assistant?',
    excerpt:
      'A complete, honest ChatGPT review for May 2026. We cover GPT-5.4, pricing plans, DALL-E image generation, Sora, Agent Mode, and how ChatGPT compares to Claude.',
    content: 'Full review available — see MDX source.',
    date: '2026-05-15',
    category: 'AI Chatbots',
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
    category: 'AI Chatbots',
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
