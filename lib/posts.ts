export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
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
  {
    slug: 'notion-ai-review',
    title: 'Notion AI: IA que Vive no Seu Workspace',
    excerpt: 'O Notion AI integra inteligência artificial diretamente no seu espaço de trabalho. Descobrimos se é realmente útil.',
    content: 'O Notion AI se diferencia por estar integrado diretamente no Notion, facilitando resumos, geração de conteúdo e organização de projetos sem sair da plataforma.',
    date: '2024-09-20',
    category: 'Produtividade',
    rating: 4,
    pros: ['Integrado ao Notion', 'Resumos automáticos', 'Templates com IA', 'Fácil de usar'],
    cons: ['Dependente do Notion', 'Capacidades limitadas vs modelos dedicados', 'Custo adicional'],
    toolName: 'Notion AI',
    affiliateUrl: 'https://notion.so',
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
