import Image from 'next/image'

const photos = [
  { id: 'photo-1558618666-fcd25c85cd64', alt: 'Neatly trimmed hedges and lush garden beds',         aspect: 'aspect-[4/3]'  },
  { id: 'photo-1416879595882-3373a0480b5b', alt: 'Flowering garden path through manicured grounds', aspect: 'aspect-square' },
  { id: 'photo-1592417817098-8fd3d9eb14a5', alt: 'Professional landscaping with ornamental plants', aspect: 'aspect-[4/3]'  },
  { id: 'photo-1604176857875-cdbd7dfc3b7a', alt: 'Fresh mulch installation in garden beds',          aspect: 'aspect-square' },
  { id: 'photo-1558904541-efa843a96f01',  alt: 'Lush green lawn after seasonal cleanup',           aspect: 'aspect-[4/3]'  },
  { id: 'photo-1508739773434-c26b3d09e071', alt: 'Clean cut lawn edging and turf',                   aspect: 'aspect-square' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-stone text-xs font-bold tracking-widest uppercase mb-4 font-body">Our work</p>
        <h2 className="font-heading text-5xl text-primary font-bold mb-14">Recent projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className={`relative ${photo.aspect} overflow-hidden rounded-xl group`}>
              <Image
                src={`https://images.unsplash.com/${photo.id}?w=600&q=80`}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
