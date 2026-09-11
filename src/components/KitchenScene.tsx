export interface KitchenPalette {
  cabinet: string
  cabinetDark: string
  counter: string
  wall: string
  accent: string
}

export const PALETTES: Record<string, KitchenPalette> = {
  charcoal: {
    cabinet: '#2A2620',
    cabinetDark: '#1B1815',
    counter: '#E9E2D6',
    wall: '#F7F3EC',
    accent: '#B48A4E',
  },
  cream: {
    cabinet: '#EDE6D8',
    cabinetDark: '#D9CFBF',
    counter: '#2A2620',
    wall: '#F7F3EC',
    accent: '#B48A4E',
  },
  sage: {
    cabinet: '#5C6B57',
    cabinetDark: '#465243',
    counter: '#E9E2D6',
    wall: '#F2EEE4',
    accent: '#D2AD73',
  },
  walnut: {
    cabinet: '#5A3E2B',
    cabinetDark: '#402C1D',
    counter: '#EDE6D8',
    wall: '#F7F3EC',
    accent: '#B48A4E',
  },
  ivory: {
    cabinet: '#F7F3EC',
    cabinetDark: '#D9CFBF',
    counter: '#1B1815',
    wall: '#EFE7D9',
    accent: '#8C6A38',
  },
}

interface Props {
  palette?: keyof typeof PALETTES
  className?: string
  showIsland?: boolean
}

/**
 * Illustration signature KitchenPress : une cuisine stylisée en SVG,
 * utilisée comme identité visuelle sur l'ensemble du site (aucune
 * photo de stock n'est présentée comme une véritable réalisation).
 */
export default function KitchenScene({ palette = 'charcoal', className, showIsland = true }: Props) {
  const p = PALETTES[palette]
  return (
    <svg viewBox="0 0 800 560" className={className} role="img" aria-label="Illustration d'une cuisine KitchenPress">
      <defs>
        <linearGradient id={`wall-${palette}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.wall} />
          <stop offset="100%" stopColor={p.wall} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={`cab-${palette}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.cabinet} />
          <stop offset="100%" stopColor={p.cabinetDark} />
        </linearGradient>
        <radialGradient id={`glow-${palette}`} cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wall */}
      <rect x="0" y="0" width="800" height="560" fill={`url(#wall-${palette})`} />
      <rect x="0" y="0" width="800" height="560" fill={`url(#glow-${palette})`} />

      {/* Window */}
      <rect x="60" y="60" width="180" height="160" rx="4" fill={p.wall} stroke={p.accent} strokeOpacity="0.4" strokeWidth="2" />
      <line x1="150" y1="60" x2="150" y2="220" stroke={p.accent} strokeOpacity="0.4" strokeWidth="2" />
      <line x1="60" y1="140" x2="240" y2="140" stroke={p.accent} strokeOpacity="0.4" strokeWidth="2" />

      {/* Backsplash */}
      <rect x="0" y="260" width="800" height="90" fill={p.counter} fillOpacity="0.25" />

      {/* Wall units */}
      {[80, 280, 480, 610].map((x, i) => (
        <g key={i}>
          <rect x={x} y="150" width="150" height="110" rx="6" fill={`url(#cab-${palette})`} />
          <rect x={x + 10} y="160" width="130" height="90" rx="3" fill="none" stroke={p.accent} strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx={x + 130} cy="205" r="3" fill={p.accent} />
        </g>
      ))}

      {/* Extractor hood */}
      <path d="M320 120 L480 120 L455 260 L345 260 Z" fill={p.cabinetDark} opacity="0.9" />
      <rect x="330" y="100" width="140" height="24" rx="4" fill={p.cabinetDark} />

      {/* Countertop */}
      <rect x="20" y="350" width="760" height="24" fill={p.counter} />
      <rect x="20" y="350" width="760" height="6" fill={p.accent} fillOpacity="0.5" />

      {/* Base cabinets */}
      <rect x="20" y="374" width="760" height="140" fill={`url(#cab-${palette})`} rx="4" />

      {/* Base cabinet doors */}
      {[
        { x: 40, w: 150 },
        { x: 210, w: 150 },
        { x: 460, w: 150 },
        { x: 630, w: 130 },
      ].map((d, i) => (
        <g key={i}>
          <rect x={d.x} y="392" width={d.w} height="104" rx="3" fill="none" stroke={p.accent} strokeOpacity="0.45" strokeWidth="1.5" />
          <circle cx={d.x + d.w - 14} cy="444" r="3" fill={p.accent} />
        </g>
      ))}

      {/* Drawers under sink */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="370"
          y={392 + i * 35}
          width="80"
          height="28"
          rx="3"
          fill="none"
          stroke={p.accent}
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      ))}

      {/* Sink */}
      <rect x="360" y="356" width="100" height="14" rx="6" fill={p.wall} opacity="0.9" />
      <path d="M470 356 v-30" stroke={p.wall} strokeWidth="5" strokeLinecap="round" />
      <path d="M470 326 q20 0 20 18" stroke={p.wall} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Floor */}
      <rect x="0" y="514" width="800" height="46" fill={p.cabinetDark} opacity="0.5" />

      {showIsland && (
        <g>
          <rect x="260" y="470" width="280" height="18" fill={p.counter} />
          <rect x="260" y="470" width="280" height="4" fill={p.accent} fillOpacity="0.6" />
          <rect x="270" y="488" width="260" height="26" fill={`url(#cab-${palette})`} rx="3" />
          {/* Pendant lights */}
          {[330, 400, 470].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="0" x2={x} y2="86" stroke={p.accent} strokeOpacity="0.5" strokeWidth="1.5" />
              <ellipse cx={x} cy="96" rx="16" ry="10" fill={p.cabinetDark} />
            </g>
          ))}
        </g>
      )}
    </svg>
  )
}
