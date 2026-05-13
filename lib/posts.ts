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
  {
    slug: 'claude-ai-review',
    title: 'Claude AI: Review Completo 2024',
    excerpt: 'Claude é um dos modelos de linguagem mais capazes do mercado. Testamos extensivamente para você.',
    content: 'O Claude da Anthropic se destaca pela qualidade de raciocínio, capacidade de seguir instruções complexas e segurança. Ideal para desenvolvedores e profissionais de conteúdo.',
    date: '2024-11-01',
    category: 'IA Generativa',
    rating: 5,
    pros: ['Raciocínio avançado', 'Contexto longo (200k tokens)', 'Excelente para código', 'Respostas bem estruturadas'],
    cons: ['Sem geração de imagens', 'Plano gratuito limitado'],
    toolName: 'Claude',
    affiliateUrl: 'https://claude.ai',
  },
  {
    slug: 'chatgpt-plus-review',
    title: 'ChatGPT Plus: Vale a Pena em 2024?',
    excerpt: 'Analisamos se o plano pago do ChatGPT justifica o investimento para profissionais e empresas.',
    content: 'O ChatGPT Plus oferece acesso ao GPT-4 com capacidades multimodais, plugins e Code Interpreter. Continua sendo referência para uso geral.',
    date: '2024-10-15',
    category: 'IA Generativa',
    rating: 4,
    pros: ['GPT-4 com visão', 'Amplo ecossistema de plugins', 'DALL-E integrado', 'Marca reconhecida'],
    cons: ['Preço em dólar', 'Limites de uso no pico', 'Contexto menor que Claude'],
    toolName: 'ChatGPT',
    affiliateUrl: 'https://chatgpt.com',
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
