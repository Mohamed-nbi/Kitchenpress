import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Phone, Send } from 'lucide-react'
import { EMAIL, PHONE, PHONE_HREF } from '../config/site'
import Reveal from './Reveal'

const PROJECT_TYPES = ['Cuisine neuve', 'Rénovation de cuisine', 'Aménagement sur mesure', 'Autre projet']

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Intégration à connecter : service d'envoi d'e-mail / CRM du client.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-py bg-charcoal text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] bg-brass/10 blur-[140px]" />
      <div className="container-px mx-auto relative grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">Parlons de votre projet.</h2>
          <p className="mt-5 text-cream/65 leading-relaxed max-w-md">
            Vous avez un projet de cuisine&nbsp;? Contactez-nous pour échanger sur vos besoins et obtenir
            votre devis ainsi que votre plan 3D gratuitement.
          </p>

          <div className="mt-10 space-y-4">
            <a href={PHONE_HREF} className="flex items-center gap-3 text-cream/80 hover:text-brass transition-colors">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10">
                <Phone size={16} />
              </span>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-cream/80 hover:text-brass transition-colors">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10">
                <Mail size={16} />
              </span>
              {EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-cream/5 border border-brass/30 p-10 text-center h-full flex flex-col items-center justify-center"
            >
              <CheckCircle2 size={40} className="text-brass mb-4" />
              <h3 className="font-display text-2xl">Merci pour votre demande&nbsp;!</h3>
              <p className="mt-2 text-cream/60 max-w-xs">
                Notre équipe vous recontacte très prochainement pour échanger sur votre projet.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-cream text-charcoal p-6 sm:p-8 space-y-4 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Prénom" name="firstName" required />
                <Field label="Nom" name="lastName" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Téléphone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50 mb-1.5">
                  Type de projet
                </label>
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brass/60"
                >
                  <option value="" disabled>
                    Sélectionnez votre projet
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Parlez-nous de votre projet, de votre espace, de vos envies..."
                  className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brass/60 resize-none"
                />
              </div>
              <label className="flex items-start gap-2.5 text-sm text-charcoal/70">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-brass" />
                Je souhaite recevoir un devis gratuit.
              </label>
              <button type="submit" className="btn-primary w-full mt-2">
                Envoyer ma demande <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brass/60"
      />
    </div>
  )
}
