import { motion } from 'framer-motion'
import PressLogo from './PressLogo'
import KitchenScene from './KitchenScene'

const TRUST_ITEMS = ['Plan 3D gratuit', 'Devis gratuit', 'Caissons déjà montés']

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-charcoal text-cream pt-28 sm:pt-32">
      {/* Ambient brass glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-brass/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[380px] w-[380px] rounded-full bg-sage/10 blur-[100px]" />

      <div className="container-px mx-auto relative grid lg:grid-cols-2 gap-16 items-center pb-16 lg:pb-24">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            Cuisiniste sur mesure
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[0.98] tracking-tight"
          >
            <PressLogo
              autoPlay
              delay={0.9}
              className="block"
              pressClassName="text-brass"
            />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display italic text-2xl sm:text-3xl text-taupe mt-6 max-w-lg"
          >
            Votre cuisine sur mesure, pensée pour votre intérieur.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 text-cream/70 text-base sm:text-lg max-w-md leading-relaxed"
          >
            Des cuisines équipées de qualité, conçues selon vos envies et proposées à des prix
            intelligemment compressés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-light">
              Demander mon devis gratuit
            </a>
            <a href="#cuisines" className="btn-secondary !border-cream/25 !text-cream hover:!bg-cream hover:!text-charcoal">
              Découvrir nos cuisines
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream/60"
          >
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i !== 0 && <span className="h-1 w-1 rounded-full bg-brass" />}
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brass/20 to-transparent blur-2xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-soft ring-1 ring-cream/10">
            <KitchenScene palette="charcoal" className="w-full h-auto" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-6 -left-6 bg-cream text-charcoal rounded-2xl shadow-soft px-5 py-4 max-w-[220px]"
          >
            <p className="font-display text-2xl leading-none">-30%</p>
            <p className="text-xs text-charcoal/60 mt-1">de coûts compressés, sans compromis sur la qualité</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px mx-auto py-5 flex items-center justify-center gap-2 text-cream/40 text-xs tracking-[0.25em] uppercase">
          <span className="animate-bounce">↓</span>
          Découvrir KitchenPress
        </div>
      </div>
    </section>
  )
}
