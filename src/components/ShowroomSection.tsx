import { useEffect, useState } from 'react'
import { Clock, ImageOff, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import {
  ADDRESS,
  ADDRESS_LINE_2,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  OPENING_HOURS,
  PHONE,
  PHONE_HREF,
  SHOWROOM_PHOTO_PLACEHOLDER,
} from '../config/site'
import { isOpenNow, todayLabel } from '../lib/hours'
import Reveal from './Reveal'

export default function ShowroomSection() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(interval)
  }, [])

  const open = isOpenNow(now)
  const today = todayLabel(now)

  return (
    <section id="showroom" className="section-py bg-cream">
      <div className="container-px mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Showroom</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            Venez découvrir nos cuisines en showroom.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <div className="h-full min-h-[320px] rounded-2xl border-2 border-dashed border-charcoal/20 bg-taupe/20 flex flex-col items-center justify-center text-center p-10">
              <ImageOff size={30} className="text-charcoal/30 mb-3" />
              <p className="font-display text-lg text-charcoal/50">{SHOWROOM_PHOTO_PLACEHOLDER}</p>
              <p className="text-xs text-charcoal/35 mt-2 max-w-xs">
                Remplacez cet emplacement par une véritable photo de votre showroom.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div
              className={`self-start flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 ${
                open ? 'bg-sage/15 text-sage' : 'bg-charcoal/10 text-charcoal/50'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${open ? 'bg-sage animate-pulse' : 'bg-charcoal/40'}`} />
              {open ? 'Ouvert actuellement' : 'Fermé actuellement'}
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="text-brass mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">{ADDRESS}</p>
                  <p className="text-sm text-charcoal/55">{ADDRESS_LINE_2}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={19} className="text-brass shrink-0" />
                <a href={PHONE_HREF} className="font-medium text-charcoal hover:text-brass transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={19} className="text-brass mt-0.5 shrink-0" />
                <div className="text-sm text-charcoal/70">
                  Aujourd’hui ({today}) —{' '}
                  {OPENING_HOURS.find((d) => d.label === today)?.open
                    ? `${OPENING_HOURS.find((d) => d.label === today)?.open} – ${OPENING_HOURS.find((d) => d.label === today)?.close}`
                    : 'Fermé'}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary">
                <Navigation size={16} /> Voir l’itinéraire
              </a>
              <a href="#contact" className="btn-secondary">
                <MessageCircle size={16} /> Nous contacter
              </a>
            </div>
          </Reveal>
        </div>

        {/* Horaires */}
        <Reveal delay={0.15} className="mt-20 max-w-2xl mx-auto">
          <h3 className="font-display text-2xl text-center mb-8">Nos horaires</h3>
          <div className="rounded-2xl bg-white shadow-card divide-y divide-charcoal/8 overflow-hidden">
            {OPENING_HOURS.map((day) => {
              const isToday = day.label === today
              return (
                <div
                  key={day.label}
                  className={`flex items-center justify-between px-6 py-3.5 text-sm ${
                    isToday ? 'bg-brass/10 font-semibold' : ''
                  }`}
                >
                  <span className={isToday ? 'text-charcoal' : 'text-charcoal/70'}>{day.label}</span>
                  <span className={day.open ? 'text-charcoal/80' : 'text-charcoal/40'}>
                    {day.open ? `${day.open} à ${day.close}` : 'Fermé'}
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Localisation */}
        <Reveal delay={0.2} className="mt-20">
          <h3 className="font-display text-2xl text-center mb-8">Retrouvez-nous</h3>
          <div className="rounded-2xl overflow-hidden shadow-card ring-1 ring-charcoal/10 h-[340px] relative">
            <iframe
              title="Localisation KitchenPress"
              src={GOOGLE_MAPS_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal/60">
            <span>{ADDRESS} — {ADDRESS_LINE_2}</span>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="text-brass font-semibold hover:underline">
              Voir l’itinéraire →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
