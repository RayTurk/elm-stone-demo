export default function Hero() {
  return (
    <section className="relative bg-primary min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-stone/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-secondary/40 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <p className="text-stone text-xs font-bold tracking-widest uppercase mb-6 font-body">
          Cleveland, Ohio
        </p>
        <h1 className="font-heading text-6xl md:text-7xl text-white font-bold leading-[1.05] mb-6 max-w-2xl">
          Your yard. Done right. The first time.
        </h1>
        <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-xl font-body">
          Cleveland landscaping with flat estimates and no surprises. Shrub trimming, tree work, mulch, sod, and more.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#estimator"
            className="bg-stone text-primary font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-stone/90 transition-colors font-body"
          >
            Get My Estimate
          </a>
          <a
            href="#gallery"
            className="border border-white/30 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 hover:border-white/60 transition-colors font-body"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
