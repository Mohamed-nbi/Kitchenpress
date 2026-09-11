import { motion } from 'framer-motion'
import { Box, CheckCircle2, Hammer, Layers, Wrench, X } from 'lucide-react'
import Reveal from './Reveal'

const CLASSIC_STEPS = [
  { label: 'Plaques séparées', icon: Layers },
  { label: 'Montage', icon: Hammer },
  { label: 'Assemblage', icon: Wrench },
  { label: 'Installation', icon: Box },
]

const KITCHENPRESS_STEPS = [
  { label: 'Caissons montés', icon: Box },
  { label: 'Installation', icon: Wrench },
  { label: 'Cuisine prête', icon: CheckCircle2 },
]

export default function CaissonsMontes() {
  return (
    <section className="section-py bg-taupe/25">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Un vrai savoir-faire</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            Pas de cuisine en plaques à monter.
          </h2>
          <p className="mt-5 text-charcoal/65 leading-relaxed">
            Vous ne recevez pas simplement des panneaux à assembler vous-même. Nos meubles arrivent en{' '}
            <strong className="text-charcoal">caissons montés</strong>, pour une installation plus
            professionnelle, plus rapide et une meilleure finition.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Classic path */}
          <Reveal>
            <div className="h-full rounded-2xl bg-white/70 border border-charcoal/10 p-8">
              <div className="flex items-center gap-2 mb-8">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-charcoal/10 text-charcoal/50">
                  <X size={14} strokeWidth={3} />
                </span>
                <h3 className="font-semibold text-charcoal/60">Cuisine classique à assembler</h3>
              </div>
              <div className="space-y-0">
                {CLASSIC_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.25 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-charcoal/5 text-charcoal/40 shrink-0">
                        <step.icon size={18} />
                      </span>
                      {i < CLASSIC_STEPS.length - 1 && <span className="w-px h-8 bg-charcoal/15 my-1" />}
                    </div>
                    <span className="text-charcoal/55 font-medium pb-8">{step.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-2 text-xs text-charcoal/40 tracking-wide uppercase">Processus long · plusieurs étapes manuelles</p>
            </div>
          </Reveal>

          {/* KitchenPress path */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl bg-charcoal text-cream p-8 shadow-soft relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-brass/20 blur-3xl" />
              <div className="flex items-center gap-2 mb-8 relative">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brass/20 text-brass">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </span>
                <h3 className="font-semibold">KitchenPress</h3>
              </div>
              <div className="space-y-0 relative">
                {KITCHENPRESS_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brass/20 text-brass shrink-0">
                        <step.icon size={18} />
                      </span>
                      {i < KITCHENPRESS_STEPS.length - 1 && <span className="w-px h-8 bg-brass/30 my-1" />}
                    </div>
                    <span className="font-medium pb-8">{step.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-2 text-xs text-brass tracking-wide uppercase relative">
                Processus court · installation rapide et propre
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
