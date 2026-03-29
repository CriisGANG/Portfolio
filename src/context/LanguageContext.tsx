import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../i18n/translations'

type T = (typeof translations)[Lang]

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
