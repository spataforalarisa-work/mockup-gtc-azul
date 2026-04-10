import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Code, Palette, Users, FileSpreadsheet, Headphones, Megaphone, BrainCircuit, Building2, Cog, ShoppingCart } from 'lucide-react'
import { RevealSection } from '@/components/shared/RevealSection'

const SERVICIOS = [
  { icon: Users, title: 'Administrativo', desc: 'Gestion de agenda, correos, documentos, coordinacion de equipos y soporte ejecutivo.' },
  { icon: Megaphone, title: 'Marketing Digital', desc: 'Redes sociales, campanas publicitarias, email marketing, SEO y generacion de contenido.' },
  { icon: FileSpreadsheet, title: 'Financiero / Contable', desc: 'Facturacion, control de gastos, conciliacion bancaria, reportes financieros y nominas.' },
  { icon: Code, title: 'Desarrollo Web', desc: 'Frontend, backend, aplicaciones web, integraciones API y mantenimiento de plataformas.' },
  { icon: Palette, title: 'Diseno Grafico', desc: 'Identidad visual, piezas graficas, presentaciones, edicion de video y motion graphics.' },
  { icon: Headphones, title: 'Atencion al Cliente', desc: 'Soporte multicanal, gestion de tickets, onboarding de clientes y seguimiento post-venta.' },
  { icon: BrainCircuit, title: 'Automatizacion / IA', desc: 'Workflows automatizados, chatbots, analisis de datos con IA e integraciones inteligentes.' },
  { icon: Building2, title: 'Arquitectura', desc: 'Modelado BIM, planos tecnicos, renders 3D, presupuestos y gestion de proyectos.' },
  { icon: ShoppingCart, title: 'E-commerce / Ventas', desc: 'Gestion de tiendas online, catalogo de productos, atencion a compradores y logistica.' },
  { icon: BarChart3, title: 'Gestion Operativa', desc: 'Coordinacion de procesos, seguimiento de KPIs, reportes ejecutivos y mejora continua.' },
  { icon: Cog, title: 'Tecnico Especializado', desc: 'Soporte IT, administracion de sistemas, bases de datos y seguridad informatica.' },
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
            Seleccionamos, capacitamos y gestionamos asistentes virtuales especializados en mas de 11 areas profesionales.
          </p>
        </div>
      </section>

      <RevealSection className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map(s => (
              <div key={s.title} className="bg-white p-8 rounded-xl border border-border-soft hover:shadow-xl hover:border-blue-prime/20 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-prime/10 flex items-center justify-center mb-6 group-hover:bg-blue-prime group-hover:scale-110 transition-all">
                  <s.icon className="w-5 h-5 text-blue-prime group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-navy font-headline text-xl mb-3">{s.title}</h3>
                <p className="text-dark-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-blue-prime text-white px-10 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-blue-deep transition-all shadow-lg shadow-blue-prime/20"
            >
              Solicitar asistente
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
