const stats = [
  { value: '12+',      label: 'Years Serving NE Ohio'  },
  { value: '400+',     label: 'Projects Completed'      },
  { value: '100%',     label: 'Satisfaction Guarantee'  },
  { value: 'Licensed', label: 'and Fully Insured'       },
]

export default function TrustBar() {
  return (
    <section className="bg-secondary py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl text-stone font-bold">{stat.value}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
