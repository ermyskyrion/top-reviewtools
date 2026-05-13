# top-reviewtools

## Objetivo

Site de reviews de ferramentas de IA com captura de leads, construído em Next.js 14 com App Router. Publica artigos de review, coleta emails de visitantes via Brevo e expõe metadados de SEO dinâmicos em cada página. O projeto é estático na maior parte, com um único Server Action para integração com a API do Brevo.

## Fonte de dados / Contexto técnico

### Stack principal

```yaml
framework: Next.js 14 (App Router)
linguagem: TypeScript (strict: true)
estilo: Tailwind CSS
deploy: Vercel
integracao_email: Brevo API via Server Action
```

### Páginas e rotas

```yaml
rotas:
  - path: /
    descricao: Home — listagem de reviews em destaque
  - path: /blog
    descricao: Listagem de todos os artigos de review
  - path: /blog/[slug]
    descricao: Artigo individual de review (rota dinâmica)
  - path: /captura
    descricao: Landing page de captura de email
```

### SEO

```yaml
seo:
  sitemap: app/sitemap.ts (gerado dinamicamente)
  robots: app/robots.ts (gerado dinamicamente)
  metadata: generateMetadata em cada page.tsx
```

### Integração Brevo — Server Action

```typescript
// app/actions/subscribe.ts
// Server Action responsável por capturar o email do visitante
// e adicioná-lo à lista configurada no Brevo via API REST.
// Variáveis consumidas: BREVO_API_KEY, BREVO_LIST_ID
```

> O Server Action nunca é exposto ao cliente diretamente; é chamado via formulário com `action=` ou `useFormState` no componente `SubscribeForm`.

### Componentes principais

```yaml
componentes:
  - ReviewLayout: layout compartilhado para páginas de artigo
  - SubscribeForm: formulário de captura de email (chama o Server Action)
  - AffiliateDisclosure: banner de divulgação de afiliados
  - Header: cabeçalho global do site
  - Footer: rodapé global do site
```

### Mock data — posts iniciais

```typescript
// lib/posts.ts
// 3 posts de mock incluídos no scaffold:
//   - Claude AI
//   - ChatGPT Plus
//   - Notion AI
//
// Cada post segue a estrutura definida em lib/posts.ts.
// Para adicionar novos reviews, veja a seção
// "Adicionando novos reviews" abaixo.
```

### Pré-requisitos

```bash
node  >= 18.17.0   # versão mínima exigida pelo Next.js 14
npm   >= 9         # ou pnpm >= 8 / yarn >= 1.22
# Conta ativa no Brevo com uma lista criada e API key gerada
```

### Setup local

```bash
# 1. Clone o repositório
git clone <url-do-repo> top-reviewtools
cd top-reviewtools

# 2. Instale as dependências
npm install

# 3. Copie o arquivo de variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com os valores reais (veja seção Variáveis de ambiente)

# 4. Inicie o servidor de desenvolvimento
npm run dev
# Acesse http://localhost:3000
```

### Variáveis de ambiente

```markdown
| Variável               | Descrição                              | Obrigatório |
|------------------------|----------------------------------------|-------------|
| BREVO_API_KEY          | Chave de API gerada no painel Brevo    | Sim         |
| BREVO_LIST_ID          | ID numérico da lista de contatos Brevo | Sim         |
| NEXT_PUBLIC_SITE_URL   | URL pública do site (ex: https://...)  | Sim         |
| NEXT_PUBLIC_SITE_NAME  | Nome exibido no site e nos metadados   | Sim         |
```

> Nunca versione `.env.local`. O arquivo já deve estar no `.gitignore` gerado pelo `create-next-app`.

### Estrutura de arquivos

```
top-reviewtools/
├── app/
│   ├── actions/
│   │   └── subscribe.ts          # Server Action — integração Brevo
│   ├── blog/
│   │   ├── page.tsx              # Listagem de reviews
│   │   └── [slug]/
│   │       └── page.tsx          # Artigo individual
│   ├── captura/
│   │   └── page.tsx              # Landing page de captura
│   ├── sitemap.ts                # Sitemap dinâmico
│   ├── robots.ts                 # Robots.txt dinâmico
│   └── page.tsx                  # Home
├── components/
│   ├── ReviewLayout.tsx
│   ├── SubscribeForm.tsx
│   ├── AffiliateDisclosure.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── posts.ts                  # Mock data dos reviews
├── next.config.ts                # Configurado para deploy na Vercel
├── tailwind.config.ts
├── tsconfig.json                 # strict: true
└── .env.local                    # NÃO versionado
```

### Adicionando novos reviews

```typescript
// lib/posts.ts
// Para adicionar um novo review, inclua um novo objeto
// no array de posts seguindo o formato existente:
//
// {
//   slug: "nome-da-ferramenta",           // usado na URL /blog/[slug]
//   title: "Título do Review",
//   description: "Resumo curto do review",
//   date: "YYYY-MM-DD",
//   content: `Conteúdo em markdown ou JSX...`,
// }
//
// Após adicionar, o post aparece automaticamente em /blog
// e ganha página em /blog/<slug> sem nenhuma outra alteração.
// O sitemap.ts e a listagem já leem diretamente de lib/posts.ts.
```

### Deploy na Vercel

```bash
# Opção A — via Vercel CLI
npm i -g vercel
vercel login
vercel --prod

# Opção B — via GitHub
# 1. Faça push do repositório para o GitHub
# 2. Acesse https://vercel.com/new e importe o repositório
# 3. Na tela de configuração do projeto, adicione as variáveis
#    de ambiente (BREVO_API_KEY, BREVO_LIST_ID,
#    NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_NAME)
# 4. Clique em Deploy
# A Vercel detecta Next.js automaticamente; next.config.ts
# já está configurado para o ambiente de produção.
```

## Stack & decisões pendentes

Registro append-only. Adicione novas decisões no topo da lista, mantendo o formato `- **Tópico**: descrição`.

- **Fonte dos posts**: atualmente mock em `lib/posts.ts`; avaliar migração para CMS headless (Contentful, Sanity, Notion API) quando o volume de reviews crescer
- **Autenticação**: não há área protegida no scaffold; decidir se um painel de admin será necessário antes de avançar na estrutura de rotas
- **Monetização / afiliados**: `AffiliateDisclosure` está presente mas os links de afiliado ainda não foram configurados; definir plataforma (Amazon Associates, Impact, ShareASale)

## Mudanças por data

Registro append-only. Adicione novas entradas no topo da lista, mantendo o formato `- **YYYY-MM-DD** — descrição`.

- **2026-05-13** — scaffold inicial: Next.js 14, App Router, TypeScript estrito, Tailwind CSS, integração Brevo, 3 posts mock (Claude AI, ChatGPT Plus, Notion AI), deploy configurado para Vercel

---

Documentação viva. Atualize ao avançar.
