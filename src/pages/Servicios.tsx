import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Code, Palette, Users, FileSpreadsheet, Headphones, Megaphone, BrainCircuit, Building2, Cog, ShoppingCart } from 'lucide-react'
import { RevealSection } from '@/components/shared/RevealSection'

const SERVICIOS = [
  { icon: Users, title: 'Administrativo', desc: 'Gestión de agenda, correos, documentos, coordinación de equipos y soporte ejecutivo.', accent: 'from-blue-prime/20 to-blue-deep/10', iconBg: 'bg-blue-prime' },
  { icon: Megaphone, title: 'Marketing Digital', desc: 'Redes sociales, campañas publicitarias, email marketing, SEO y generación de contenido.', accent: 'from-gold/20 to-gold/5', iconBg: 'bg-gold' },
  { icon: FileSpreadsheet, title: 'Financiero / Contable', desc: 'Facturación, control de gastos, conciliación bancaria, reportes financieros y nóminas.', accent: 'from-blue-prime/20 to-blue-deep/10', iconBg: 'bg-blue-prime' },
  { icon: Code, title: 'Desarrollo Web', desc: 'Frontend, backend, aplicaciones web, integraciones API y mantenimiento de plataformas.', accent: 'from-blue-light/20 to-blue-prime/5', iconBg: 'bg-blue-deep' },
  { icon: Palette, title: 'Diseño Gráfico', desc: 'Identidad visual, piezas gráficas, presentaciones, edición de video y motion graphics.', accent: 'from-gold/20 to-gold/5', iconBg: 'bg-gold' },
  { icon: Headphones, title: 'Atención al Cliente', desc: 'Soporte multicanal, gestión de tickets, onboarding de clientes y seguimiento post-venta.', accent: 'from-blue-prime/20 to-blue-deep/10', iconBg: 'bg-blue-prime' },
  { icon: BrainCircuit, title: 'Automatización / IA', desc: 'Workflows automatizados, chatbots, análisis de datos con IA e integraciones inteligentes.', accent: 'from-blue-light/20 to-blue-prime/5', iconBg: 'bg-blue-deep' },
  { icon: Building2, title: 'Arquitectura', desc: 'Modelado BIM, planos técnicos, renders 3D, presupuestos y gestión de proyectos.', accent: 'from-gold/20 to-gold/5', iconBg: 'bg-gold' },
  { icon: ShoppingCart, title: 'E-commerce / Ventas', desc: 'Gestión de tiendas online, catálogo de productos, atención a compradores y logística.', accent: 'from-blue-prime/20 to-blue-deep/10', iconBg: 'bg-blue-prime' },
  { icon: BarChart3, title: 'Gestión Operativa', desc: 'Coordinación de procesos, seguimiento de KPIs, reportes ejecutivos y mejora continua.', accent: 'from-blue-light/20 to-blue-prime/5', iconBg: 'bg-blue-deep' },
  { icon: Cog, title: 'Técnico Especializado', desc: 'Soporte IT, administración de sistemas, bases de datos y seguridad informática.', accent: 'from-gold/20 to-gold/5', iconBg: 'bg-gold' },
]

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-prime/[0.06] blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-blue-light text-xs font-label uppercase tracking-widest font-bold mb-4 block">Nuestros Servicios</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Un profesional para cada <span className="serif-italic text-gold">necesidad</span>.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Seleccionamos, capacitamos y gestionamos asistentes virtuales especializados en más de 11 áreas profesionales.
          </p>
        </div>
      </section>

      <RevealSection className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <div
                key={s.title}
                className={`relative overflow-hidden rounded-2xl border border-border-soft hover:shadow-2xl hover:border-blue-prime/30 transition-all duration-300 group bg-white ${
                  i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="p-8 lg:p-9">
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rounded-2xl transition-all duration-300 shadow-lg`}>
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-navy font-headline text-xl mb-2 group-hover:text-blue-prime transition-colors">{s.title}</h3>
                      <p className="text-dark-gray text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>

                  {/* Hover reveal link */}
                  <div className="mt-5 pt-4 border-t border-border-soft/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to="/contacto"
                      className="text-blue-prime text-xs font-label uppercase tracking-widest font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Solicitar este perfil
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-cream rounded-2xl p-10 lg:p-14 max-w-2xl">
              <h3 className="font-headline text-2xl lg:text-3xl text-navy mb-4">¿No encuentras el perfil que buscas?</h3>
              <p className="text-dark-gray mb-8">Cuéntanos qué necesitas y te presentamos candidatos en menos de 48 horas.</p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-blue-prime text-white px-10 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-blue-deep transition-all shadow-lg shadow-blue-prime/20"
              >
                Solicitar asistente
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
