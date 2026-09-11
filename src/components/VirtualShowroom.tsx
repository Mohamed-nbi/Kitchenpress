import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Move3d, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import KitchenScene, { type PALETTES } from './KitchenScene'

const ROOMS: { id: string; label: string; palette: keyof typeof PALETTES }[] = [
  { id: 'zone-1', label: 'Espace cuisson', palette: 'charcoal' },
  { id: 'zone-2', label: 'Îlot central', palette: 'cream' },
  { id: 'zone-3', label: 'Coin repas', palette: 'walnut' },
]

export default function VirtualShowroom() {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setContainerWidth(el.offsetWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(ROOMS.length - 1, index))
    setActive(clamped)
    animate(x, -clamped * containerWidth, {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    })
  }

  return (
    <section id="visite-virtuelle" className="section-py bg-charcoal text-cream">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Visite immersive</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">Entrez dans notre showroom.</h2>
          <p className="mt-5 text-cream/65 leading-relaxed">
            Déplacez-vous entre les différents espaces et découvrez nos cuisines comme si vous y étiez.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative rounded-[1.75rem] overflow-hidden ring-1 ring-cream/10 shadow-soft h-[320px] sm:h-[440px] bg-charcoal-light cursor-grab active:cursor-grabbing"
          >
            <motion.div
              drag="x"
              dragElastic={0.12}
              dragConstraints={{ left: -(ROOMS.length - 1) * containerWidth, right: 0 }}
              style={{ x, width: `${ROOMS.length * 100}%` }}
              className="flex h-full"
              onDragEnd={(_, info) => {
                let next = active
                if (info.offset.x < -containerWidth * 0.15) next = active + 1
                else if (info.offset.x > containerWidth * 0.15) next = active - 1
                goTo(next)
              }}
            >
              {ROOMS.map((room) => (
                <div key={room.id} className="relative h-full shrink-0" style={{ width: `${100 / ROOMS.length}%` }}>
                  <KitchenScene palette={room.palette} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>

            {/* Pulsing hotspots */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute top-[40%] left-[30%] flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass/70" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brass" />
              </span>
            </div>

            {/* Drag hint */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] uppercase tracking-widest bg-charcoal/70 backdrop-blur px-3 py-1.5 rounded-full">
              <Move3d size={13} className="text-brass" />
              Glissez pour regarder autour de vous
            </div>

            {/* Room label */}
            <div className="absolute bottom-4 left-4 bg-cream text-charcoal text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-subtle">
              {ROOMS[active].label}
            </div>

            {/*
              SLOT D'INTÉGRATION — VISITE VIRTUELLE RÉELLE
              Remplacez cette démo par une intégration Matterport, une visite 360°
              (photos panoramiques) ou une scène Three.js en insérant ici l'iframe
              ou le canvas correspondant, par exemple :
              <iframe src="[URL_MATTERPORT]" className="absolute inset-0 w-full h-full" allowFullScreen />
            */}
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {ROOMS.map((room, i) => (
              <button
                key={room.id}
                onClick={() => goTo(i)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  active === i ? 'bg-brass text-charcoal' : 'bg-cream/10 text-cream/60 hover:bg-cream/20'
                }`}
              >
                <Navigation size={12} />
                {room.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
