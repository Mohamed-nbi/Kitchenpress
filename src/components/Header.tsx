import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import PressLogo from './PressLogo'

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos cuisines', href: '#cuisines' },
  { label: 'Pourquoi KitchenPress', href: '#pourquoi' },
  { label: 'Plan 3D', href: '#plan-3d' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-subtle' : 'bg-transparent'
      }`}
    >
      <div
        className={`container-px mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#accueil"
          className={`font-display text-lg sm:text-xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? 'text-charcoal' : 'text-cream'
          }`}
        >
          <PressLogo autoPlay={false} hoverReplay pressClassName="text-brass" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-brass transition-colors duration-300 ${
                scrolled ? 'text-charcoal/80' : 'text-cream/85'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className={scrolled ? 'btn-primary' : 'btn-light'}>
            Devis gratuit
          </a>
        </div>

        <button
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`lg:hidden relative z-50 p-2 transition-colors duration-500 ${
            menuOpen ? 'text-cream' : scrolled ? 'text-charcoal' : 'text-cream'
          }`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-charcoal text-cream z-40 flex flex-col justify-center"
          >
            <nav className="flex flex-col items-center gap-7 container-px">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * NAV_LINKS.length, duration: 0.4 }}
                className="btn-light mt-4"
              >
                Devis gratuit
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
