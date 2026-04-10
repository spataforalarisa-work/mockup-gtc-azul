import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import logoWhite from '@/assets/logos/LogoLetrasBlancas.png'

const NAV_LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Empleos', href: '/empleos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const currentLang = i18n.language === 'en' ? 'EN' : 'ES'

  const toggleLang = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
    localStorage.setItem('i18nextLng', newLang)
  }

  return (
    <header className="bg-navy/95 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-blue-prime/10">
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-prime text-white px-4 py-2 rounded-md z-[60]">
        Ir al contenido
      </a>

      <nav className="flex justify-between items-center px-6 lg:px-8 py-4 w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3" aria-label="Global Talent Connections - Inicio">
          <img src={logoWhite} alt="Global Talent Connections" className="h-8 lg:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-label text-sm tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? 'text-gold font-bold border-b-2 border-gold pb-1'
                  : 'text-white/80 hover:text-blue-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-label text-xs tracking-widest uppercase"
            aria-label={`Cambiar idioma a ${currentLang === 'ES' ? 'inglés' : 'español'}`}
          >
            <Globe className="w-4 h-4" />
            <span className="font-bold">{currentLang}</span>
          </button>
          <Link
            to="/contacto"
            className="hidden lg:flex items-center gap-2 bg-blue-prime text-white px-6 py-3 rounded-md font-label text-xs tracking-widest uppercase font-bold hover:bg-blue-deep hover:scale-95 transition-all"
          >
            Agendar call
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/5 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-label text-sm tracking-widest uppercase py-2 ${
                  pathname === link.href ? 'text-gold font-bold' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-prime text-white px-6 py-3 rounded-md font-label text-xs tracking-widest uppercase font-bold text-center mt-2"
            >
              Agendar call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
