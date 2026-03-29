import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

export function Stack() {
  const { t } = useLanguage()
  const tags = t.stack.tags

  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-white/[0.06] px-5 py-20 md:px-8"
    >
      <motion.div {...fade} className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {t.stack.title}
        </h2>
        <p className="mt-3 text-zinc-500">{t.stack.subtitle}</p>
      </motion.div>

      <motion.div
        {...fade}
        className="mt-10 flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
