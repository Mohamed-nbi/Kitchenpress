import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface Props {
  className?: string
  pressClassName?: string
  /** Rejoue l'animation de compression au survol (utilisé dans le header) */
  hoverReplay?: boolean
  /** Lance l'animation automatiquement à l'apparition (utilisé dans le Hero) */
  autoPlay?: boolean
  delay?: number
}

/**
 * Signature de marque KitchenPress : le mot "PRESS" se compresse
 * horizontalement de façon élégante, rappelant la notion de
 * compression des prix — sans jamais sacrifier la lisibilité.
 */
export default function PressLogo({
  className = '',
  pressClassName = '',
  hoverReplay = false,
  autoPlay = true,
  delay = 0.3,
}: Props) {
  const controls = useAnimation()

  const sequence = async () => {
    await controls.start({
      scaleX: [1, 0.72, 1.06, 0.96, 1],
      letterSpacing: ['0em', '-0.05em', '0.02em', '0em'],
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
    })
  }

  useEffect(() => {
    if (autoPlay) sequence()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay])

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-[0.15em] ${className}`}>
      <span>KITCHEN</span>
      <motion.span
        animate={controls}
        onHoverStart={() => hoverReplay && sequence()}
        style={{ transformOrigin: 'left center', display: 'inline-block' }}
        className={pressClassName}
      >
        PRESS
      </motion.span>
    </span>
  )
}
