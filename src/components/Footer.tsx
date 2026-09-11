import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons'
import {
  ADDRESS,
  ADDRESS_LINE_2,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  PHONE,
  PHONE_HREF,
  TIKTOK_URL,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from '../config/site'
import PressLogo from './PressLogo'

const NAV = [
  { label: 'Nos cuisines', href: '#cuisines' },
  { label: 'Pourquoi KitchenPress', href: '#pourquoi' },
  { label: 'Plan 3D', href: '#plan-3d' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: InstagramIcon, url: INSTAGRAM_URL, label: 'Instagram' },
  { icon: FacebookIcon, url: FACEBOOK_URL, label: 'Facebook' },
  { icon: TikTokIcon, url: TIKTOK_URL, label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-px mx-auto pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl">
              <PressLogo autoPlay={false} pressClassName="text-brass" />
            </p>
            <p className="mt-3 text-sm text-cream/50 italic max-w-[220px]">
              Nous compressons les prix, pas la qualité.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-cream/10 hover:bg-brass hover:text-charcoal transition-colors duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-cream/70 hover:text-brass transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Coordonnées</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-brass mt-0.5 shrink-0" />
                <span>
                  {ADDRESS}
                  <br />
                  {ADDRESS_LINE_2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-brass shrink-0" />
                <a href={PHONE_HREF} className="hover:text-brass transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-brass shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-brass transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
                  WhatsApp — {WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Horaires</h4>
            <ul className="space-y-1.5 text-sm text-cream/60">
              {OPENING_HOURS.map((d) => (
                <li key={d.label} className="flex justify-between gap-4">
                  <span>{d.label}</span>
                  <span>{d.open ? `${d.open} – ${d.close}` : 'Fermé'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} KitchenPress. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brass transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-brass transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
