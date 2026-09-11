/**
 * ============================================================
 * CONFIGURATION CENTRALE — KITCHENPRESS
 * ============================================================
 * Toutes les informations modifiables du site (coordonnées,
 * réseaux sociaux, horaires, prix affichés dans l'animation...)
 * sont centralisées ici. Modifiez uniquement ce fichier pour
 * mettre à jour le contenu affiché sur l'ensemble du site.
 * ============================================================
 */

export const BUSINESS_NAME = 'KitchenPress'

export const TAGLINE = 'Nous compressons les prix, pas la qualité.'

// --- Coordonnées ------------------------------------------------
export const PHONE = '[VOTRE NUMÉRO]'
export const PHONE_HREF = 'tel:+33000000000' // à remplacer par le vrai numéro au format international

export const WHATSAPP_NUMBER = '[VOTRE WHATSAPP]' // format international sans espaces, ex: 33612345678
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '') || '33000000000'}`

export const EMAIL = '[VOTRE EMAIL]'

export const ADDRESS = '[ADRESSE DU SHOWROOM]'
export const ADDRESS_LINE_2 = '[VILLE, CODE POSTAL]'

export const GOOGLE_MAPS_URL = '[LIEN GOOGLE MAPS]'
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=France&output=embed' // à remplacer par l'URL d'intégration réelle du showroom

// --- Réseaux sociaux ---------------------------------------------
export const INSTAGRAM_URL = '[INSTAGRAM]'
export const FACEBOOK_URL = '[FACEBOOK]'
export const TIKTOK_URL = '[TIKTOK]'

// --- Horaires d'ouverture ------------------------------------------
// index: 0 = dimanche ... 6 = samedi (format JS Date.getDay())
export interface DayHours {
  label: string
  open: string | null // null = fermé, sinon "HH:MM"
  close: string | null
}

export const OPENING_HOURS: DayHours[] = [
  { label: 'Dimanche', open: null, close: null },
  { label: 'Lundi', open: '09:00', close: '18:00' },
  { label: 'Mardi', open: '09:00', close: '18:00' },
  { label: 'Mercredi', open: '09:00', close: '18:00' },
  { label: 'Jeudi', open: '09:00', close: '18:00' },
  { label: 'Vendredi', open: '09:00', close: '18:00' },
  { label: 'Samedi', open: '09:00', close: '18:00' },
]

// --- Prix affichés dans l'animation "prix compressés" ------------
export const COMPRESSION_PRICING = {
  classicPrice: 2500,
  kitchenpressPrice: 1790,
  currency: '€',
}

// --- Showroom -------------------------------------------------------
export const SHOWROOM_PHOTO_PLACEHOLDER = '[REMPLACER PAR PHOTO DU SHOWROOM]'

// --- Mentions légales (placeholders) --------------------------------
export const LEGAL_ENTITY_NAME = '[RAISON SOCIALE]'
export const LEGAL_SIRET = '[SIRET]'
