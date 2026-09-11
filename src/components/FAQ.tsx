import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { ADDRESS } from '../config/site'
import Reveal from './Reveal'

const FAQS = [
  { q: 'Le devis est-il gratuit ?', a: 'Oui, le devis est entièrement gratuit et sans engagement de votre part.' },
  { q: 'Le plan 3D est-il gratuit ?', a: 'Oui, nous réalisons votre plan 3D gratuitement, selon les dimensions de votre pièce.' },
  {
    q: 'Les meubles sont-ils livrés montés ?',
    a: 'Oui. Contrairement à de nombreux cuisinistes, nos meubles sont livrés en caissons directement montés, et non en plaques à assembler.',
  },
  { q: 'Faites-vous des cuisines sur mesure ?', a: 'Oui, chaque projet est conçu sur mesure selon votre espace, vos goûts et votre budget.' },
  { q: 'Puis-je visiter le showroom ?', a: `Bien sûr, vous êtes les bienvenus à notre showroom situé ${ADDRESS}.` },
  {
    q: 'Comment obtenir un devis ?',
    a: 'Contactez-nous via le formulaire, par téléphone ou WhatsApp : nous échangeons sur votre projet et vous transmettons votre devis gratuit.',
  },
  { q: 'Où êtes-vous situés ?', a: `Notre showroom se trouve ${ADDRESS}. Retrouvez l’itinéraire complet dans la section Showroom.` },
  { q: 'Est-ce que vous livrez à domicile ?', a: 'Oui, nous organisons la livraison de votre cuisine directement à votre domicile.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-py bg-cream">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">FAQ</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="rounded-xl bg-white shadow-subtle overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-charcoal">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-7 h-7 rounded-full bg-brass/12 text-brass shrink-0"
                    >
                      <Plus size={15} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-charcoal/60 leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
