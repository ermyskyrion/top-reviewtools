const fs = require('fs')
const path = require('path')

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {}
  return fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.trim().startsWith('#'))
    .reduce((acc, line) => {
      const [k, ...v] = line.split('=')
      acc[k.trim()] = v.join('=').trim()
      return acc
    }, {})
}

async function main() {
  const root = path.resolve(__dirname, '..')
  const env = {
    ...loadEnv(path.join(root, '.env')),
    ...loadEnv(path.join(root, '.env.local')),
  }

  const apiKey = env.BREVO_API_KEY
  const listId = env.BREVO_LIST_ID ? Number(env.BREVO_LIST_ID) : undefined

  if (!apiKey) { console.error('BREVO_API_KEY not found'); process.exit(1) }

  console.log('API key found, length:', apiKey.length)
  console.log('List ID:', listId)
  console.log('Testing contact creation...')

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({
      email: 'ermys.kyrion@gmail.com',
      listIds: listId ? [listId] : [],
      updateEnabled: true,
    }),
  })

  const body = await res.text()
  console.log('Status:', res.status)
  console.log('Response:', body)
}

main().catch(console.error)
