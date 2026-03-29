import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45 },
}

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects.items

  const items = [
    {
      key: 'regional' as const,
      href: 'https://regionalproductsmallorca.com',
    },
    {
      key: 'agrai' as const,
      href: 'https://agrai-gourmet.com',
    },
  ]

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-white/[0.06] px-5 py-20 md:px-8"
    >
      <motion.div {...fade} className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {t.projects.title}
        </h2>
        <p className="mt-3 text-zinc-500">{t.projects.subtitle}</p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => {
          const data = p[item.key]
          return (
            <motion.article
              key={item.key}
              {...fade}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0f1118]/60 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.14]"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  {data.tag}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                {data.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                {data.desc}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-400/90 hover:text-teal-300"
              >
                {t.projects.visit}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
