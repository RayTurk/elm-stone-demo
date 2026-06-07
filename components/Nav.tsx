export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading text-xl text-white font-bold tracking-tight">
          Elm <span className="text-stone">&</span> Stone
        </span>
        <a
          href="#estimator"
          className="bg-stone text-primary text-xs font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-stone/90 transition-colors font-body"
        >
          Get Estimate
        </a>
      </div>
    </header>
  )
}
