import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const sections = ['about', 'experience', 'projects', 'stack', 'contact'] as const

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLabel = (id: (typeof sections)[number]) => {
    const map = {
      about: t.nav.about,
      experience: t.nav.experience,
      projects: t.nav.projects,
      stack: t.nav.stack,
      contact: t.nav.contact,
    }
    return map[id]
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#07080c]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <button
          type="button"
          onClick={() => scrollTo('top')}
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white"
        >
          CC
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {sections.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {navLabel(id)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-white/[0.08] bg-white/[0.04] p-0.5">
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === 'es'
                  ? 'bg-white/[0.12] text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-white/[0.12] text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/[0.08] p-2 text-zinc-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/[0.06] bg-[#07080c]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-4">
              {sections.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="rounded-lg px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/[0.06]"
                >
                  {navLabel(id)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
