import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import KitchenScene from './KitchenScene'

const POINTS = [
  'Devis gratuit',
  'Plan 3D gratuit',
  'Conception personnalisée',
  'Conseils professionnels',
  'Projet adapté à votre espace',
]

export default function Plan3D() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -10, y: px * 14 })
  }

  return (
    <section id="plan-3d" className="section-py bg-cream overflow-hidden">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="eyebrow">Votre projet</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            Votre projet commence par un plan 3D gratuit.
          </h2>
          <p className="mt-5 text-charcoal/65 leading-relaxed max-w-md">
            Vous avez un projet de cuisine&nbsp;? Nous concevons votre projet selon les dimensions de votre
            pièce, vos goûts et votre budget.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-3 text-charcoal/80 font-medium"
              >
                <CheckCircle2 size={18} className="text-sage shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary mt-9">
            Obtenir mon devis gratuit
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="perspective-container">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="preserve-3d relative rounded-[1.75rem] overflow-hidden shadow-soft ring-1 ring-charcoal/10 bg-white"
            >
              <KitchenScene palette="cream" className="w-full h-auto" />

              {/* Blueprint grid overlay */}
              <svg className="absolute inset-0 w-full h-full mix-blend-multiply opacity-30 pointer-events-none" viewBox="0 0 800 560">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke="#B48A4E" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="800" height="560" fill="url(#grid)" />
              </svg>

              {/* Dimension annotations */}
              <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-charcoal/85 text-cream px-2.5 py-1 rounded-full">
                Plan 3D
              </div>
              <div className="absolute bottom-4 right-4 text-[11px] font-semibold bg-cream/90 text-charcoal px-2.5 py-1 rounded-full shadow-subtle">
                4.20 m × 3.10 m
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-5 text-center text-xs text-charcoal/40 tracking-wide"
            >
              Aperçu illustratif — votre plan 3D réel est conçu selon les dimensions de votre pièce.
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
