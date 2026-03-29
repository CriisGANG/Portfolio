import { useState } from 'react'

export function ProfilePhoto({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}Cris.jpeg`

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-white/[0.1] bg-gradient-to-br from-teal-400/20 to-indigo-500/20 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white ${className}`}
        aria-hidden
      >
        CC
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Cristofol Comas Llompart"
      width={320}
      height={400}
      className={`h-full w-full rounded-2xl object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
