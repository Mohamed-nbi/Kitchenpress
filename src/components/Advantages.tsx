import {
  Award,
  Box,
  FileCheck2,
  Gem,
  Home,
  PenTool,
  Ruler,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import Reveal from './Reveal'

const ADVANTAGES = [
  { icon: FileCheck2, label: 'Devis gratuit' },
  { icon: Ruler, label: 'Plan 3D gratuit' },
  { icon: PenTool, label: 'Conception sur mesure' },
  { icon: Sparkles, label: 'Prix intelligemment compressés' },
  { icon: Gem, label: 'Qualité préservée' },
  { icon: Box, label: 'Caissons livrés montés' },
  { icon: Award, label: 'Finitions soignées' },
  { icon: UserCheck, label: 'Accompagnement professionnel' },
  { icon: Home, label: 'Showroom physique' },
]

export default function Advantages() {
  return (
    <section id="avantages" className="section-py bg-cream">
      <div className="container-px mx-auto">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="eyebrow">Tout ce qu’il faut savoir</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">Nos avantages</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.label} delay={(i % 3) * 0.08}>
              <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-subtle transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brass/12 text-brass shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <a.icon size={19} />
                </span>
                <span className="font-medium text-charcoal/85 text-sm">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
