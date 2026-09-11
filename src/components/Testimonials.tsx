import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

const PLACEHOLDER_REVIEWS = [
  { placeholder: '[AVIS CLIENT 1]', name: '[Nom client 1]' },
  { placeholder: '[AVIS CLIENT 2]', name: '[Nom client 2]' },
  { placeholder: '[AVIS CLIENT 3]', name: '[Nom client 3]' },
]

export default function Testimonials() {
  return (
    <section id="avis" className="section-py bg-taupe/20">
      <div className="container-px mx-auto">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="eyebrow">Témoignages</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">Ils parlent de KitchenPress.</h2>
          <p className="mt-4 text-sm text-charcoal/45 max-w-md mx-auto">
            Emplacements réservés à vos véritables avis clients — à remplacer avant mise en ligne.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PLACEHOLDER_REVIEWS.map((review, i) => (
            <Reveal key={review.placeholder} delay={i * 0.12}>
              <div className="h-full rounded-2xl bg-white border border-dashed border-charcoal/20 p-7 flex flex-col">
                <Quote className="text-brass/50" size={26} />
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-brass/40" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-charcoal/45 italic flex-1">{review.placeholder}</p>
                <p className="mt-5 text-sm font-semibold text-charcoal/60">{review.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
