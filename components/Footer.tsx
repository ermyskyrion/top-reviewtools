export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Top Review Tools. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-center text-xs text-slate-400">
          Este site pode conter links de afiliados. Podemos receber comissão por compras realizadas
          através dos links, sem custo adicional para você.{' '}
          <a href="#disclosure" className="underline hover:text-slate-600">
            Saiba mais
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
