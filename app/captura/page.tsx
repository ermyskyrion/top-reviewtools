import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Receba Reviews Exclusivos',
  description: 'Cadastre-se e receba análises exclusivas das melhores ferramentas de IA direto no seu email.',
}

export default function CapturaPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Reviews Exclusivos no Seu Email
        </h1>
        <p className="mb-8 text-slate-600">
          Receba análises detalhadas, comparativos e dicas das melhores ferramentas de IA.
          Sem spam — só conteúdo de valor.
        </p>
        <SubscribeForm />
      </div>
    </div>
  )
}
