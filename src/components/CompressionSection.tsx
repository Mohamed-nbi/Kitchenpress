import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { Check, ArrowDown, ArrowRight } from 'lucide-react'
import { COMPRESSION_PRICING } from '../config/site'
import Reveal from './Reveal'

const CHAIN_STEPS = ['Fabrication', 'Intermédiaire', 'Distribution', 'Client']

const QUALITY_POINTS = [
  'Matériaux de qualité',
  'Finitions soignées',
  'Meubles robustes',
  'Conception sur mesure',
  'Plan 3D gratuit',
  'Caissons livrés montés',
]

function formatPrice(value: number) {
  return `${Math.round(value).toLocaleString('fr-FR')} ${COMPRESSION_PRICING.currency}`
}

export default function CompressionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.4 })
  const priceRef = useRef<HTMLSpanElement>(null)
  const [priceDone, setPriceDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    const controls = animate(COMPRESSION_PRICING.classicPrice, COMPRESSION_PRICING.kitchenpressPrice, {
      duration: 1.4,
      delay: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (priceRef.current) priceRef.current.textContent = formatPrice(v)
      },
      onComplete: () => setPriceDone(true),
    })
    return () => controls.stop()
  }, [inView])

  return (
    <section id="prix-compresses" ref={sectionRef} className="section-py bg-cream overflow-hidden">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Le concept KitchenPress</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            Des prix compressés. <span className="italic text-brass">Pas la qualité.</span>
          </h2>
          <p className="mt-5 text-charcoal/65 leading-relaxed">
            Nous optimisons chaque étape entre la fabrication et vous afin de réduire les coûts inutiles,
            sans jamais toucher à la qualité de vos meubles.
          </p>
        </Reveal>

        {/* Chain compression animation */}
        <div className="mt-16 sm:mt-20">
          <div
            className={`flex flex-wrap items-center justify-center transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? 'gap-2 sm:gap-3' : 'gap-8 sm:gap-16'
            }`}
          >
            {CHAIN_STEPS.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className={`rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-center border transition-colors duration-700 ${
                    step === 'Intermédiaire' && inView
                      ? 'border-charcoal/10 bg-cream text-charcoal/30 line-through'
                      : 'border-charcoal/15 bg-white shadow-subtle text-charcoal'
                  }`}
                >
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap">{step}</span>
                </motion.div>
                {i < CHAIN_STEPS.length - 1 && (
                  <ArrowRight
                    className={`mx-1 sm:mx-2 text-brass shrink-0 transition-all duration-700 ${
                      inView ? 'w-4 sm:w-5 opacity-60' : 'w-6 sm:w-9 opacity-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-charcoal/45 mt-4 tracking-wide">
            En compressant les intermédiaires inutiles, nous compressons le prix final — pas la qualité.
          </p>
        </div>

        {/* Price + quality panel */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-charcoal/40 mb-2">Prix classique</p>
            <p className="font-display text-3xl text-charcoal/35 line-through decoration-2 decoration-charcoal/30">
              {formatPrice(COMPRESSION_PRICING.classicPrice)}
            </p>

            <motion.div
              initial={{ scaleX: 1 }}
              animate={inView ? { scaleX: [1, 0.78, 1.05, 1] } : {}}
              transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="mt-2"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-brass mb-1 mt-6">Prix KitchenPress</p>
              <span ref={priceRef} className="font-display text-6xl sm:text-7xl text-charcoal block">
                {formatPrice(COMPRESSION_PRICING.classicPrice)}
              </span>
            </motion.div>

            <div className="mt-8 inline-flex flex-col gap-3 items-center lg:items-start">
              <div className="flex items-center gap-3 text-charcoal/70">
                <span className="flex items-center gap-1.5 font-semibold">
                  PRIX <ArrowDown size={16} className="text-brass" />
                </span>
                <span className="text-sm text-charcoal/40">baisse intelligemment</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/70">
                <span className="flex items-center gap-1.5 font-semibold">
                  QUALITÉ <ArrowRight size={16} className="text-sage" />
                </span>
                <span className="text-sm text-charcoal/40">reste élevée</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-2xl italic text-charcoal mb-6 text-center lg:text-left">
              La qualité reste notre priorité.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {QUALITY_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  animate={priceDone ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-subtle"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage/15 text-sage shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-charcoal/85">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
