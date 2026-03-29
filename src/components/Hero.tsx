import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { ProfilePhoto } from './ProfilePhoto'

export function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8 md:pt-36"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-1.5 text-xs font-medium text-teal-300/95"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-10px_rgba(45,212,191,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.ctaProjects}
              <ArrowDownRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden
              />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              {t.hero.ctaContact}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-transparent to-indigo-500/20 opacity-80 blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50">
            <ProfilePhoto />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
