import { motion } from 'framer-motion'
import { Building2, Store } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

export function Experience() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: Building2,
      iconClass: 'text-teal-300',
      title: t.experience.hotel.role,
      body: t.experience.hotel.desc,
      accent: 'from-teal-400/15 to-teal-400/5',
    },
    {
      icon: Store,
      iconClass: 'text-indigo-300',
      title: t.experience.ecommerce.role,
      body: t.experience.ecommerce.desc,
      accent: 'from-indigo-400/15 to-indigo-400/5',
    },
  ]

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-white/[0.06] px-5 py-20 md:px-8"
    >
      <motion.h2
        {...fade}
        className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white md:text-3xl"
      >
        {t.experience.title}
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            {...fade}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${card.accent} p-px`}
          >
            <div className="h-full rounded-[15px] bg-[#0c0e14]/95 p-6 backdrop-blur-sm">
              <div
                className={`mb-4 inline-flex rounded-xl bg-white/[0.06] p-3 ${card.iconClass}`}
              >
                <card.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
