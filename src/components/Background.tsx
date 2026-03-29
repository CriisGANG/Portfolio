export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050608]" />
      <div
        className="absolute -left-1/4 top-[-20%] h-[70vh] w-[70vh] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(62,231,198,0.35) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute -right-1/4 bottom-[-10%] h-[60vh] w-[60vh] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(99,102,241,0.35) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 100%)',
        }}
      />
    </div>
  )
}
