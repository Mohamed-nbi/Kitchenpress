import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Ruler, Truck } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Parlons de votre projet',
    text: 'Vous nous expliquez vos besoins.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Nous concevons votre cuisine',
    text: 'Nous travaillons sur une conception adaptée à votre espace.',
  },
  {
    number: '03',
    icon: Ruler,
    title: 'Plan 3D + devis gratuit',
    text: 'Vous visualisez votre projet avant de vous décider.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Livraison en caissons montés',
    text: 'Votre cuisine est livrée avec les meubles en caissons directement montés.',
  },
]

export default function Process() {
  return (
    <section className="section-py bg-taupe/20">
      <div className="container-px mx-auto">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">Votre projet en 4 étapes.</h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-charcoal/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-brass"
          />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15}>
                <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-full bg-charcoal text-cream shrink-0">
                    <step.icon size={24} />
                  </span>
                  <span className="font-display text-4xl text-brass/40 mt-5">{step.number}</span>
                  <h3 className="font-display text-xl mt-2">{step.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed max-w-[220px]">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
