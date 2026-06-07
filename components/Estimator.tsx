'use client'

import { useState } from 'react'
import { services } from '@/lib/services'

type Quantities = Record<string, number>

export default function Estimator() {
  const [quantities, setQuantities] = useState<Quantities>({})

  function increment(id: string) {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }

  function decrement(id: string) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) - 1) }))
  }

  const totalLow = services.reduce(
    (sum, s) => sum + (quantities[s.id] ?? 0) * s.unitPrice,
    0
  )
  const totalHigh = Math.round(totalLow * 1.2)
  const hasSelections = totalLow > 0

  return (
    <section id="estimator" className="bg-primary py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-stone text-xs font-bold tracking-widest uppercase mb-4 font-body">
          Instant Estimate
        </p>
        <h2 className="font-heading text-5xl text-white font-bold mb-3">
          Build your quote. See the price now.
        </h2>
        <p className="text-white/60 text-lg mb-12 font-body">
          No phone call required. Prices update as you go.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Service list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {services.map((service) => {
              const qty = quantities[service.id] ?? 0
              return (
                <div
                  key={service.id}
                  className={`flex items-center justify-between rounded-xl px-5 py-4 transition-colors ${
                    qty > 0
                      ? 'bg-white/10 border border-stone/40'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div>
                    <p className={`font-body font-semibold text-sm ${qty > 0 ? 'text-white' : 'text-white/60'}`}>
                      {service.name}
                    </p>
                    <p className="text-stone/70 text-xs mt-0.5 font-body">
                      ${service.unitPrice} {service.unit}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrement(service.id)}
                      disabled={qty === 0}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg leading-none"
                      aria-label={`Remove one ${service.name}`}
                    >
                      −
                    </button>
                    <span className={`text-sm font-bold w-5 text-center font-body ${qty > 0 ? 'text-stone' : 'text-white/30'}`}>
                      {qty}
                    </span>
                    <button
                      onClick={() => increment(service.id)}
                      className="w-8 h-8 rounded-lg bg-stone text-primary flex items-center justify-center hover:bg-stone/80 transition-colors text-lg leading-none font-bold"
                      aria-label={`Add one ${service.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Running total panel */}
          <div className="lg:sticky lg:top-24">
            <div className="border border-stone/30 rounded-2xl p-8 text-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <p className="text-stone text-xs font-bold tracking-widest uppercase mb-6 font-body">
                Your Estimate
              </p>
              {hasSelections ? (
                <>
                  <p className="font-heading text-6xl text-white font-bold">
                    ${totalLow.toLocaleString()}
                  </p>
                  <p className="text-white/40 text-sm mt-2 font-body">
                    to ${totalHigh.toLocaleString()}
                  </p>
                  <p className="text-white/30 text-xs mt-3 font-body leading-relaxed">
                    Range reflects typical real-world variability
                  </p>
                </>
              ) : (
                <p className="text-white/40 text-sm leading-relaxed font-body px-4">
                  Add services above to see your estimate
                </p>
              )}
              <a
                href="#contact"
                className="mt-8 block bg-stone text-primary font-bold py-4 rounded-xl text-sm tracking-widest uppercase hover:bg-stone/90 transition-colors font-body"
              >
                Get Exact Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
