import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 sm:flex-row sm:text-left">
        <p>
          © {year} Cristofol Comas Llompart · {t.footer.rights}
        </p>
        <p className="text-zinc-700">DAW · Mallorca</p>
      </div>
    </footer>
  )
}
