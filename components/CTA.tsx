export default function CTA() {
  return (
    <section id="contact" className="bg-stone py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-primary/60 text-xs font-bold tracking-widest uppercase mb-4 font-body">
          Ready to get started
        </p>
        <h2 className="font-heading text-5xl text-primary font-bold mb-4">
          Let us take a look at your property.
        </h2>
        <p className="text-primary/70 text-lg mb-10 font-body max-w-xl mx-auto">
          Use the estimator above for a ballpark, or call us to talk through your project. No pressure, no obligation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#estimator"
            className="bg-primary text-white font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-secondary transition-colors font-body"
          >
            Get My Estimate
          </a>
          <a
            href="tel:+12165550140"
            className="border-2 border-primary text-primary font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-primary/10 transition-colors font-body"
          >
            (216) 555-0140
          </a>
        </div>
      </div>
    </section>
  )
}
