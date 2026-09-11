import { useState } from 'react'
import { motion } from 'framer-motion'
import { MousePointerClick } from 'lucide-react'
import Reveal from './Reveal'

const CABINET = '#2A2620'
const CABINET_DARK = '#1B1815'
const INTERIOR = '#E9E2D6'
const ACCENT = '#B48A4E'

interface HotspotBase {
  id: string
  kind: 'door' | 'drawer'
  left: number // %
  top: number // %
  width: number // %
  height: number // %
  hinge?: 'left' | 'right'
}

const HOTSPOTS: HotspotBase[] = [
  { id: 'wall-door', kind: 'door', left: 37.5, top: 12, width: 25, height: 28, hinge: 'left' },
  { id: 'base-door-1', kind: 'door', left: 7.5, top: 58, width: 22.5, height: 30, hinge: 'left' },
  { id: 'base-door-2', kind: 'door', left: 32.5, top: 58, width: 22.5, height: 30, hinge: 'right' },
  { id: 'base-door-3', kind: 'door', left: 57.5, top: 58, width: 22.5, height: 30, hinge: 'left' },
  { id: 'drawer-1', kind: 'drawer', left: 82.5, top: 58, width: 12.5, height: 9 },
  { id: 'drawer-2', kind: 'drawer', left: 82.5, top: 68, width: 12.5, height: 9 },
  { id: 'drawer-3', kind: 'drawer', left: 82.5, top: 78, width: 12.5, height: 9 },
]

const INTERIOR_ITEMS: Record<string, { cx: number; cy: number; r: number; color: string }[]> = {
  'wall-door': [
    { cx: 20, cy: 30, r: 10, color: '#B48A4E' },
    { cx: 45, cy: 26, r: 8, color: '#5C6B57' },
    { cx: 70, cy: 32, r: 11, color: '#D9CFBF' },
  ],
  'base-door-1': [
    { cx: 25, cy: 60, r: 13, color: '#B48A4E' },
    { cx: 60, cy: 55, r: 16, color: '#D9CFBF' },
  ],
  'base-door-2': [
    { cx: 30, cy: 45, r: 12, color: '#5C6B57' },
    { cx: 65, cy: 60, r: 14, color: '#B48A4E' },
  ],
  'base-door-3': [
    { cx: 25, cy: 55, r: 15, color: '#D9CFBF' },
    { cx: 65, cy: 45, r: 10, color: '#B48A4E' },
  ],
}

export default function InteractiveKitchen() {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const [interacted, setInteracted] = useState(false)

  const toggle = (id: string) => {
    setInteracted(true)
    setOpen((o) => ({ ...o, [id]: !o[id] }))
  }

  return (
    <section id="cuisine-interactive" className="section-py bg-taupe/20">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Expérience interactive</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">Ouvrez les meubles, découvrez l’intérieur.</h2>
          <p className="mt-5 text-charcoal/65 leading-relaxed">
            Cliquez sur les portes et les tiroirs pour découvrir la qualité de nos rangements, comme si
            vous étiez dans notre showroom.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 max-w-4xl mx-auto">
          <div className="perspective-container relative rounded-[1.75rem] overflow-hidden shadow-soft ring-1 ring-charcoal/10 bg-cream" style={{ perspective: 1800 }}>
            <svg viewBox="0 0 800 500" className="w-full h-auto block">
              <rect width="800" height="500" fill="#F7F3EC" />
              {/* Wall cabinet carcass + interior */}
              <rect x="300" y="60" width="200" height="140" rx="4" fill={INTERIOR} />
              <line x1="300" y1="115" x2="500" y2="115" stroke={CABINET_DARK} strokeOpacity="0.25" strokeWidth="2" />
              <line x1="300" y1="155" x2="500" y2="155" stroke={CABINET_DARK} strokeOpacity="0.25" strokeWidth="2" />
              {(INTERIOR_ITEMS['wall-door'] ?? []).map((it, i) => (
                <circle key={i} cx={300 + (it.cx / 100) * 200} cy={60 + (it.cy / 100) * 140} r={it.r} fill={it.color} />
              ))}
              <rect x="298" y="58" width="204" height="144" rx="5" fill="none" stroke={CABINET_DARK} strokeWidth="3" />

              {/* Countertop */}
              <rect x="20" y="265" width="760" height="20" fill="#E9E2D6" />
              <rect x="20" y="265" width="760" height="5" fill={ACCENT} fillOpacity="0.6" />
              {/* Sink */}
              <rect x="360" y="240" width="90" height="12" rx="6" fill="#F7F3EC" />

              {/* Base carcass */}
              <rect x="20" y="285" width="760" height="165" fill={CABINET_DARK} />

              {/* Base door interiors */}
              {['base-door-1', 'base-door-2', 'base-door-3'].map((id, idx) => {
                const x = 60 + idx * 200
                return (
                  <g key={id}>
                    <rect x={x} y="300" width="180" height="135" fill={INTERIOR} />
                    <line x1={x} y1="345" x2={x + 180} y2="345" stroke={CABINET_DARK} strokeOpacity="0.2" strokeWidth="2" />
                    <line x1={x} y1="390" x2={x + 180} y2="390" stroke={CABINET_DARK} strokeOpacity="0.2" strokeWidth="2" />
                    {(INTERIOR_ITEMS[id] ?? []).map((it, i) => (
                      <circle key={i} cx={x + (it.cx / 100) * 180} cy={300 + (it.cy / 100) * 135} r={it.r} fill={it.color} />
                    ))}
                  </g>
                )
              })}

              {/* Drawer interiors (utensils) */}
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x="660" y={300 + i * 45} width="100" height="35" fill={INTERIOR} />
                  {[0, 1, 2, 3].map((u) => (
                    <rect key={u} x={670 + u * 22} y={308 + i * 45} width="10" height="20" rx="3" fill={u % 2 === 0 ? ACCENT : '#5C6B57'} />
                  ))}
                </g>
              ))}

              {/* Floor */}
              <rect x="0" y="450" width="800" height="50" fill={CABINET_DARK} opacity="0.35" />
            </svg>

            {/* Interactive fronts */}
            <div className="absolute inset-0 preserve-3d">
              {HOTSPOTS.map((h) => {
                const isOpen = !!open[h.id]
                const hinge = h.hinge ?? 'left'
                return (
                  <motion.button
                    key={h.id}
                    aria-label={`${h.kind === 'door' ? 'Ouvrir la porte' : 'Ouvrir le tiroir'} ${h.id}`}
                    onClick={() => toggle(h.id)}
                    className="absolute focus:outline-none"
                    style={{
                      left: `${h.left}%`,
                      top: `${h.top}%`,
                      width: `${h.width}%`,
                      height: `${h.height}%`,
                      transformStyle: 'preserve-3d',
                      transformOrigin: h.kind === 'door' ? (hinge === 'left' ? 'left center' : 'right center') : 'center top',
                    }}
                    animate={
                      h.kind === 'door'
                        ? { rotateY: isOpen ? (hinge === 'left' ? -108 : 108) : 0 }
                        : { y: isOpen ? '70%' : 0, z: isOpen ? 40 : 0 }
                    }
                    transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                    whileHover={{ scale: isOpen ? 1 : 1.02 }}
                  >
                    <div
                      className="w-full h-full rounded-[3px] shadow-[0_6px_16px_rgba(0,0,0,0.35)] relative"
                      style={{
                        background: `linear-gradient(160deg, ${CABINET}, ${CABINET_DARK})`,
                        border: `1.5px solid rgba(180,138,78,0.35)`,
                      }}
                    >
                      <span
                        className="absolute rounded-full"
                        style={{
                          background: ACCENT,
                          width: h.kind === 'door' ? 5 : 26,
                          height: h.kind === 'door' ? 26 : 5,
                          top: h.kind === 'door' ? '50%' : 6,
                          left: h.kind === 'door' ? (hinge === 'left' ? '88%' : '8%') : '50%',
                          transform: h.kind === 'door' ? 'translateY(-50%)' : 'translateX(-50%)',
                        }}
                      />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {!interacted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-charcoal text-cream text-xs px-4 py-2 rounded-full shadow-soft"
              >
                <motion.span
                  animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                  <MousePointerClick size={14} className="text-brass" />
                </motion.span>
                Cliquez sur un meuble
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
