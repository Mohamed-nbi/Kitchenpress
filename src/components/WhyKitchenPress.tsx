import { Gem, PackageCheck, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const PILLARS = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Prix intelligemment compressés',
    text: 'Nous optimisons chaque étape afin de proposer des prix plus accessibles sans sacrifier l’essentiel.',
  },
  {
    number: '02',
    icon: Gem,
    title: 'Qualité préservée',
    text: 'Des matériaux sélectionnés, des finitions soignées et une conception pensée pour durer.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Des meubles livrés montés',
    text: 'Nos cuisines sont livrées en caissons directement montés, et non sous forme de simples plaques à assembler.',
  },
]

export default function WhyKitchenPress() {
  return (
    <section id="pourquoi" className="section-py bg-charcoal text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-brass/10 blur-[140px]" />
      <div className="container-px mx-auto relative">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Notre différence</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">Pourquoi choisir KitchenPress&nbsp;?</h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.15}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 transition-all duration-500 hover:bg-cream/[0.07] hover:border-brass/40 hover:-translate-y-1.5">
                <span className="font-display text-5xl text-brass/50 transition-colors duration-500 group-hover:text-brass">
                  {pillar.number}
                </span>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brass/15 text-brass">
                    <pillar.icon size={18} />
                  </span>
                  <h3 className="font-display text-xl leading-snug">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-cream/60 leading-relaxed text-sm">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
