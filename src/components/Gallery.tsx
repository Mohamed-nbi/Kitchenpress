import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GALLERY_FILTERS, KITCHENS } from '../config/kitchens'
import KitchenScene from './KitchenScene'
import Reveal from './Reveal'

export default function Gallery() {
  const [filter, setFilter] = useState('Toutes')

  const visible = filter === 'Toutes' ? KITCHENS : KITCHENS.filter((k) => k.category === filter)

  return (
    <section id="cuisines" className="section-py bg-cream">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Collection</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">Notre collection de cuisines</h2>
          <p className="mt-5 text-charcoal/65 leading-relaxed">
            Chaque cuisine est conçue sur mesure. Voici un aperçu de nos univers, à adapter entièrement à
            votre espace et à vos envies.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                filter === f
                  ? 'bg-charcoal text-cream'
                  : 'bg-white text-charcoal/60 hover:text-charcoal border border-charcoal/10'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((kitchen, i) => (
            <motion.div
              key={kitchen.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-card cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <KitchenScene palette={kitchen.palette} showIsland={kitchen.showIsland} className="w-full h-56 sm:h-64 object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-cream/90 text-charcoal px-2.5 py-1 rounded-full">
                  {kitchen.category}
                </div>
                <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="flex items-center gap-1.5 bg-brass text-charcoal text-xs font-semibold px-3.5 py-2 rounded-full">
                    Découvrir <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{kitchen.name}</h3>
                <p className="mt-1.5 text-sm text-charcoal/55 leading-relaxed">{kitchen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
