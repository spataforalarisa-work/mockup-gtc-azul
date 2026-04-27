import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import logoWhite from '@/assets/logos/LogoLetrasBlancas.png'

export function Footer() {
  const { i18n } = useTranslation()
  const en = i18n.language === 'en'

  return (
    <footer className="bg-navy-soft border-t border-blue-prime/20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
        <div className="space-y-6">
          <img src={logoWhite} alt="Global Talent Connections" className="h-10 w-auto object-contain" loading="lazy" />
          <p className="text-white/70 text-sm font-light leading-relaxed">
            {en
              ? 'Strategic talent outsourcing for European and American companies.'
              : 'Outsourcing estratégico de talento para empresas europeas y americanas.'
            }
          </p>
        </div>

        <div>
          <h5 className="text-white/60 font-label text-[10px] uppercase tracking-[0.2em] font-extrabold mb-6">
            {en ? 'Company' : 'Empresa'}
          </h5>
          <ul className="space-y-3">
            <li><Link className="text-white/80 hover:text-white transition-colors text-sm font-light" to="/nosotros">{en ? 'About us' : 'Sobre nosotros'}</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors text-sm font-light" to="/servicios">{en ? 'Services' : 'Servicios'}</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors text-sm font-light" to="/empleos">{en ? 'Jobs' : 'Empleos'}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/60 font-label text-[10px] uppercase tracking-[0.2em] font-extrabold mb-6">
            {en ? 'Resources' : 'Recursos'}
          </h5>
          <ul className="space-y-3">
            <li><Link className="text-white/80 hover:text-white transition-colors text-sm font-light" to="/blog">Blog</Link></li>
            <li><Link className="text-white/80 hover:text-white transition-colors text-sm font-light" to="/calculadora-ahorro">{en ? 'Savings calculator' : 'Calculadora de ahorro'}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/60 font-label text-[10px] uppercase tracking-[0.2em] font-extrabold mb-6">
            {en ? 'Contact' : 'Contacto'}
          </h5>
          <ul className="space-y-3">
            <li><a className="text-white/80 hover:text-white transition-colors text-sm font-light" href="mailto:info@internationalgtc.com">info@internationalgtc.com</a></li>
            <li><a className="text-white/80 hover:text-white transition-colors text-sm font-light" href="https://linkedin.com/company/global-talent-connections-limited" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>
              <Link className="text-blue-light font-extrabold text-sm tracking-widest uppercase flex items-center gap-2 group" to="/contacto">
                {en ? 'Schedule a call' : 'Agendar llamada'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
        <p className="text-white/40 text-[10px] font-label uppercase tracking-widest">
          {en
            ? '2026 Global Talent Connections. All rights reserved.'
            : '2026 Global Talent Connections. Todos los derechos reservados.'
          }
        </p>
        <Link className="text-white/40 hover:text-white transition-colors text-[10px] font-label uppercase tracking-widest" to="/politica-de-privacidad">
          {en ? 'Privacy Policy' : 'Política de Privacidad'}
        </Link>
      </div>
    </footer>
  )
}
