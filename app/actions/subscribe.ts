'use server'

interface SubscribeResult {
  success: boolean
  message: string
}

export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : undefined
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? 'hello@top-reviewtools.com'
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Top Review Tools'

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
      void sendWelcomeEmail(email, senderEmail, senderName, apiKey)
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

async function sendWelcomeEmail(
  toEmail: string,
  senderEmail: string,
  senderName: string,
  apiKey: string,
): Promise<void> {
  const guideUrl = 'https://top-reviewtools.com/lead-magnet/ai-tools-2026.html'

  const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b;">
  <h1 style="color: #f59e0b;">Welcome to Top Review Tools!</h1>
  <p>Thank you for subscribing. You now have access to honest, in-depth AI tool reviews delivered straight to your inbox.</p>

  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 20px; margin: 24px 0;">
    <h2 style="color: #16a34a; margin-top: 0;">Your Free Gift is Ready</h2>
    <p>As promised, here is your free guide: <strong>10 Best Free AI Tools in 2026</strong>.</p>
    <p>It covers the top tools for writing, design, video, voice synthesis, research, and productivity — all with free plans.</p>
    <a href="${guideUrl}"
       style="display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 8px;">
      Download Your Free Guide
    </a>
  </div>

  <p>Stay tuned — we will keep you updated with the best AI tool reviews, exclusive deals, and practical tips.</p>

  <p style="margin-top: 32px; color: #64748b; font-size: 13px;">
    You received this email because you subscribed at top-reviewtools.com.<br>
    <a href="https://top-reviewtools.com" style="color: #f59e0b;">Visit our website</a>
  </p>
</body>
</html>`

  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: toEmail }],
        subject: 'Your Free Guide: 10 Best Free AI Tools in 2026',
        htmlContent,
      }),
    })
  } catch {
    // Silently ignore — welcome email is best-effort
  }
}
