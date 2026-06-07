const serviceCards = [
  { id: 'shrub-trimming',    emoji: '✂️', name: 'Shrub Trimming',    description: 'Clean cuts, shaped to your property. Priced per shrub so you know exactly what you are paying.' },
  { id: 'tree-trimming',     emoji: '🌳', name: 'Tree Trimming',     description: 'Small, medium, and large trees. We clear deadwood, improve shape, and haul everything out.' },
  { id: 'tree-removal',      emoji: '🪚', name: 'Tree Removal',      description: 'Full removal from stump to cleanup. Safe, efficient, no surprises on price.' },
  { id: 'mulch-installation',emoji: '🪨', name: 'Mulch Installation', description: 'Fresh mulch keeps beds clean, holds moisture, and makes the whole yard look sharp.' },
  { id: 'sod-installation',  emoji: '🌱', name: 'Sod Installation',  description: 'Replace patchy or dead grass with fresh sod. We prep the ground and lay it right.' },
  { id: 'seasonal-cleanup',  emoji: '🍂', name: 'Seasonal Cleanup',  description: 'Spring and fall cleanups that reset your property for the season ahead.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-stone text-xs font-bold tracking-widest uppercase mb-4 font-body">What we do</p>
        <h2 className="font-heading text-5xl text-primary font-bold mb-4">What we take care of</h2>
        <p className="text-muted text-lg mb-14 font-body max-w-xl">
          From a single shrub to a full yard overhaul. Every job gets the same attention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-surface border border-edge rounded-xl p-6 hover:border-stone/50 transition-colors"
            >
              <span className="text-3xl mb-4 block">{card.emoji}</span>
              <h3 className="font-heading text-xl text-primary font-bold mb-2">{card.name}</h3>
              <p className="text-muted text-sm leading-relaxed font-body">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
