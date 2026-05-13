'use server'

interface SubscribeResult {
  success: boolean
  message: string
}

export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : undefined

  if (!apiKey) {
    return { success: false, message: 'Configuração de email indisponível.' }
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: listId ? [listId] : [],
        updateEnabled: true,
      }),
    })

    if (response.ok || response.status === 204) {
      return { success: true, message: 'Cadastro realizado com sucesso!' }
    }

    if (response.status === 400) {
      const data = await response.json() as { message?: string }
      return { success: false, message: data.message ?? 'Email inválido.' }
    }

    return { success: false, message: 'Erro ao processar cadastro. Tente novamente.' }
  } catch {
    return { success: false, message: 'Erro de conexão. Tente novamente.' }
  }
}
