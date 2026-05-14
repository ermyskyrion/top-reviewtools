const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

async function generatePDF() {
  const htmlPath = path.resolve(__dirname, '../public/lead-magnet/ai-tools-2026.html')
  const outputPath = path.resolve(__dirname, '../public/lead-magnet/ai-tools-2026.pdf')

  if (!fs.existsSync(htmlPath)) {
    console.error('HTML file not found:', htmlPath)
    process.exit(1)
  }

  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/')
  console.log('Opening:', fileUrl)

  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 })

  console.log('Generating PDF...')
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  await browser.close()
  console.log('PDF saved to:', outputPath)
}

generatePDF().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
