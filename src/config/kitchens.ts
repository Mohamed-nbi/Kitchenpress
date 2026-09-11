import type { PALETTES } from '../components/KitchenScene'

export interface KitchenItem {
  id: string
  name: string
  category: string
  description: string
  palette: keyof typeof PALETTES
  showIsland: boolean
}

export const KITCHENS: KitchenItem[] = [
  {
    id: 'moderne-charcoal',
    name: 'Ligne Moderne',
    category: 'Cuisine moderne',
    description: 'Lignes épurées, façades mates et îlot central pour une cuisine résolument contemporaine.',
    palette: 'charcoal',
    showIsland: true,
  },
  {
    id: 'blanche-ivoire',
    name: 'Blanc Ivoire',
    category: 'Cuisine blanche',
    description: 'Une cuisine lumineuse aux finitions ivoire, pensée pour sublimer les petits espaces.',
    palette: 'ivory',
    showIsland: false,
  },
  {
    id: 'noire-elegante',
    name: 'Noir Élégance',
    category: 'Cuisine noire',
    description: 'Façades noir mat et touches laiton pour un intérieur affirmé et haut de gamme.',
    palette: 'charcoal',
    showIsland: false,
  },
  {
    id: 'bois-walnut',
    name: 'Bois Naturel',
    category: 'Cuisine bois',
    description: 'Teintes chaleureuses en noyer et plan de travail clair pour une ambiance chaleureuse.',
    palette: 'walnut',
    showIsland: true,
  },
  {
    id: 'ilot-central',
    name: 'Grand Îlot',
    category: 'Cuisine avec îlot',
    description: 'Un large îlot central avec suspensions design, pensé pour recevoir et cuisiner à plusieurs.',
    palette: 'cream',
    showIsland: true,
  },
  {
    id: 'minimaliste-sauge',
    name: 'Minimaliste Sauge',
    category: 'Cuisine minimaliste',
    description: 'Une palette sauge apaisante et des volumes simples pour un design minimaliste assumé.',
    palette: 'sage',
    showIsland: false,
  },
  {
    id: 'contemporaine-cream',
    name: 'Contemporaine Cream',
    category: 'Cuisine contemporaine',
    description: 'Façades crème texturées et poignées discrètes pour un rendu contemporain intemporel.',
    palette: 'cream',
    showIsland: false,
  },
  {
    id: 'haut-de-gamme-walnut',
    name: 'Prestige Noyer',
    category: 'Cuisine haut de gamme',
    description: 'Matériaux nobles et finitions sur mesure pour une cuisine résolument haut de gamme.',
    palette: 'walnut',
    showIsland: true,
  },
  {
    id: 'elegante-charcoal',
    name: 'Élégance Charbon',
    category: 'Cuisine élégante',
    description: 'Un jeu de contrastes entre charbon profond et laiton brossé, pour une élégance discrète.',
    palette: 'charcoal',
    showIsland: true,
  },
]

export const GALLERY_FILTERS = ['Toutes', ...Array.from(new Set(KITCHENS.map((k) => k.category)))]
