const testimonials = [
  {
    quote: 'They trimmed every shrub on our property and cleaned up like they were never there. Already scheduled them for fall.',
    name: 'Karen M.',
    location: 'Shaker Heights',
  },
  {
    quote: 'I had three quotes. Elm and Stone was the only one that gave me a real number upfront. Showed up on time, did great work.',
    name: 'Dave R.',
    location: 'Lyndhurst',
  },
  {
    quote: 'Took out a massive oak too close to our house. They had it down and the yard cleaned up in one day. Incredible crew.',
    name: 'Tom B.',
    location: 'South Euclid',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-stone text-xs font-bold tracking-widest uppercase mb-4 font-body">Reviews</p>
        <h2 className="font-heading text-5xl text-primary font-bold mb-14">What our clients say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="border-l-4 border-primary pl-6 py-2">
              <p className="text-primary text-base leading-relaxed font-body italic mb-6">
                "{t.quote}"
              </p>
              <p className="font-heading text-lg text-primary font-bold">{t.name}</p>
              <p className="text-muted text-sm font-body">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
