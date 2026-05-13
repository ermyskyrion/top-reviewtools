'use client'

import { useState } from 'react'
import { subscribeEmail } from '@/app/actions/subscribe'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const result = await subscribeEmail(email)

    if (result.success) {
      setStatus('success')
      setMessage(result.message)
      setEmail('')
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Seu melhor email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="voce@email.com"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          disabled={status === 'loading' || status === 'success'}
        />
      </div>

      {message && (
        <p
          className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
          role="alert"
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Cadastrando...' : status === 'success' ? 'Cadastrado!' : 'Quero receber reviews'}
      </button>

      <p className="text-center text-xs text-slate-400">
        Sem spam. Cancele quando quiser.
      </p>
    </form>
  )
}
