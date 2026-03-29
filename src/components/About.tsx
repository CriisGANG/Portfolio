import { motion } from 'framer-motion'
import { MapPin, Languages, User } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 md:px-8">
      <motion.h2
        {...fade}
        className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white md:text-3xl"
      >
        {t.about.title}
      </motion.h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div {...fade} className="space-y-5 text-lg leading-relaxed text-zinc-400">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </motion.div>
        <motion.div
          {...fade}
          className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0f1118]/80 p-6 backdrop-blur-sm"
        >
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
              <Languages className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-300">{t.about.langs}</p>
              <p className="mt-1 text-sm text-zinc-500">{t.about.langsVal}</p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-white/[0.06] pt-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-200">
              <User className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-300">{t.about.age}</p>
              <p className="mt-1 text-sm text-zinc-500">{t.about.ageVal}</p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-white/[0.06] pt-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
              <MapPin className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-300">{t.about.location}</p>
              <p className="mt-1 text-sm text-zinc-500">{t.about.locationVal}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
