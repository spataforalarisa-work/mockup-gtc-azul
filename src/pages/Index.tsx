import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Star, Zap, Brain, Handshake } from 'lucide-react'
import { RevealSection } from '@/components/shared/RevealSection'
import Testimonials from '@/components/Testimonials'

const stats = [
  { value: '53', label: 'empresas activas', color: 'text-blue-prime' },
  { value: '111', label: 'profesionales', color: 'text-blue-prime' },
  { value: '50%', label: 'ahorro promedio', color: 'text-gold' },
  { value: '95%', label: 'retención', color: 'text-gold' },
]

const CLIENTS = [
  'Coseba Seguros', 'PMV Factory', 'Areacad', 'Construcciones Ramirez',
  'Gabinete Studios', 'Banwood SL', 'Taktics Ingenieria', 'Paneles Acusticos',
]

const ADVANTAGES = [
  {
    icon: Zap,
    title: 'Match en 15 días',
    description: 'De la primera llamada a tu asistente operando. Pruebas técnicas, shortlist de 2-3 candidatos, tú eliges.',
  },
  {
    icon: Brain,
    title: 'Selección rigurosa',
    description: 'Menos del 5% de tasa de aceptación. +11.000 candidatos validados con pruebas técnicas y conductuales.',
  },
  {
    icon: Handshake,
    title: 'Zero Overhead',
    description: 'Nosotros contratamos, gestionamos y supervisamos. Tu empresa recibe una factura mensual. Reemplazo garantizado.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-prime/[0.08] blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-deep/10 blur-[100px] rounded-full -ml-32 -mb-32" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <h1 className="text-off-white font-headline text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-8">
              Talento remoto{' '}
              <span className="serif-italic text-gold">senior</span>{' '}
              para empresas que quieren crecer sin complicaciones.
            </h1>
            <p className="text-white/60 text-lg md:text-2xl mb-12 max-w-2xl font-light">
              Conectamos empresas con profesionales de alto rendimiento en modalidad remota. Selección, gestión y supervisión integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-blue-prime text-white px-8 py-5 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-blue-deep transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-prime/20"
              >
                Para Empresas
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/empleos"
                className="border border-gold text-gold px-8 py-5 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-3"
              >
                Para Profesionales
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl blue-overlay">
              <img
                alt="Profesional trabajando de forma remota"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                loading="eager"
              />
            </div>

            {/* Glass card */}
            <div className="absolute -bottom-8 -left-12 glass-card p-6 rounded-xl border border-white/10 shadow-2xl w-80 backdrop-blur-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-prime/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-light" />
                </div>
                <div>
                  <h4 className="text-white font-headline text-lg">Perfil Verificado</h4>
                  <p className="text-white/40 text-[10px] font-label uppercase tracking-widest">Asistente Admin Senior</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-prime/20 text-blue-light text-[9px] font-bold rounded uppercase tracking-wider">Excel avanzado</span>
                  <span className="px-2 py-1 bg-blue-prime/20 text-blue-light text-[9px] font-bold rounded uppercase tracking-wider">HubSpot</span>
                  <span className="px-2 py-1 bg-gold/20 text-gold text-[9px] font-bold rounded uppercase tracking-wider">Facturación</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[9px] font-bold rounded uppercase tracking-wider">ES + EN</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-label">SATISFACCION</span>
                  <div className="flex text-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-label">DISPONIBILIDAD</span>
                  <span className="text-blue-light font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-prime animate-pulse" /> Inmediata
                  </span>
                </div>
              </div>
              <Link
                to="/contacto"
                className="w-full bg-white/5 text-white border border-white/10 py-2 rounded font-label text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors block text-center"
              >
                Ver perfiles disponibles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <RevealSection className="relative z-20 -mt-12 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-xl py-10 lg:py-12 px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl border border-border-soft">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i > 0 ? 'md:border-l md:border-border-soft' : ''}`}>
              <div className={`${stat.color} text-3xl lg:text-4xl font-headline font-bold mb-1`}>{stat.value}</div>
              <div className="text-navy/70 text-[10px] font-label uppercase tracking-widest font-extrabold">{stat.label}</div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* LOGO TICKER */}
      <section className="py-16 lg:py-20 bg-off-white overflow-hidden" aria-label="Clientes">
        <div className="text-center mb-10">
          <span className="text-navy/70 text-xs font-label uppercase tracking-[0.3em]">Empresas que confian en nosotros</span>
        </div>
        <div className="flex gap-20 items-center whitespace-nowrap animate-marquee opacity-40">
          <div className="text-xl lg:text-2xl font-headline font-bold flex items-center gap-20 text-navy">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span key={`${name}-${i}`}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURA */}
      <RevealSection className="py-24 lg:py-32 bg-cream overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-prime/5 blur-[100px] rounded-full -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl blue-overlay">
              <img
                alt="Equipo trabajando en remoto"
                className="w-full h-[400px] lg:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                loading="lazy"
              />
            </div>
            <div className="absolute top-8 lg:top-12 -right-4 lg:-right-12 bg-white p-6 lg:p-8 shadow-xl rounded-xl max-w-xs border-l-4 border-blue-prime">
              <p className="font-headline text-base lg:text-lg text-navy italic mb-4">
                "Seleccionamos y gestionamos talento de alto rendimiento para que tu empresa se enfoque en lo que importa."
              </p>
              <div className="font-label text-xs uppercase tracking-widest font-extrabold text-blue-deep">Global Talent Connections</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-blue-prime text-xs font-label uppercase tracking-widest font-extrabold mb-6 block">Nuestra Filosofía</span>
            <h2 className="text-navy font-headline text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
              Humanizar la conexión <span className="serif-italic text-blue-deep">global</span>.
            </h2>
            <div className="space-y-6 text-navy/80 font-light leading-relaxed text-lg">
              <p>
                No somos una agencia de colocación. Somos tu partner operativo: seleccionamos, contratamos, supervisamos y reemplazamos si hace falta. Tú no gestionas nada.
              </p>
              <p>
                Con presencia en España y Miami, conectamos profesionales de alto rendimiento con empresas que necesitan más capacidad operativa sin inflar la nómina local.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/nosotros" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-navy flex items-center justify-center group-hover:bg-blue-prime group-hover:border-blue-prime group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="font-label text-sm uppercase tracking-widest font-extrabold text-navy group-hover:text-blue-prime transition-colors">
                  Conoce al equipo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* TESTIMONIOS */}
      <Testimonials />

      {/* VENTAJAS */}
      <RevealSection className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-prime/5 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span className="text-blue-prime text-xs font-label uppercase tracking-widest font-extrabold mb-6 block">Ventajas Estratégicas</span>
            <h2 className="text-navy font-headline text-4xl lg:text-5xl leading-tight">Por qué elegir la excelencia.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={adv.title}
                className={`bg-white p-8 lg:p-10 rounded-xl border border-border-soft hover:shadow-xl hover:border-blue-prime/20 transition-all group ${
                  i === 1 ? 'lg:translate-y-4' : i === 2 ? 'lg:translate-y-8' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-blue-prime/10 flex items-center justify-center mb-8 group-hover:bg-blue-prime group-hover:scale-110 transition-all">
                  <adv.icon className="w-6 h-6 text-blue-prime group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-navy font-headline text-2xl mb-4">{adv.title}</h3>
                <p className="text-dark-gray font-light leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  )
}
