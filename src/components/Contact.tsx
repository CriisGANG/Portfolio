import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const EMAIL = 'cristofol.comas@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/cristofol-comas-96678112b/'
const GITHUB = 'https://github.com/CriisGANG'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

export function Contact() {
  const { t } = useLanguage()
  const copy = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const ok = await copy(EMAIL)
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-white/[0.06] px-5 py-20 md:px-8"
    >
      <motion.div {...fade} className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 text-lg text-zinc-500">{t.contact.subtitle}</p>
      </motion.div>

      <motion.div
        {...fade}
        className="mt-10 flex max-w-xl flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0f1118]/80 p-6 backdrop-blur-sm md:p-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
              <Mail className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t.contact.email}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-base font-medium text-white hover:text-teal-300"
              >
                {EMAIL}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.08]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-teal-400" aria-hidden />
                {t.contact.copied}
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden />
                {t.contact.copy}
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0a66c2]/15 px-4 py-3 text-sm font-medium text-[#70b5f9] transition-colors hover:bg-[#0a66c2]/25 min-[400px]:flex-none"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/[0.06] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.1] min-[400px]:flex-none"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
