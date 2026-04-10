import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Clock, ExternalLink } from 'lucide-react'
import { JOBS } from '@/data/jobs'

const NEXUS_URL = 'https://www.globaltalentconnections.online'

export default function DetallesDeEmpleoPage() {
  const { id } = useParams()
  const job = JOBS.find(j => j.id === id)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white pt-20">
        <div className="text-center">
          <h1 className="font-headline text-4xl text-navy mb-4">Vacante no encontrada</h1>
          <Link to="/empleos" className="text-blue-prime hover:underline">Ver todas las vacantes</Link>
        </div>
      </div>
    )
  }

  const applyUrl = `${NEXUS_URL}/postular-express?puesto=${encodeURIComponent(job.title)}`

  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/empleos" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver a empleos
          </Link>
          <span className="text-blue-light text-xs font-label uppercase tracking-widest font-bold mb-4 block">{job.department}</span>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl text-white mb-6">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.type}</span>
            {job.experience && <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.experience}</span>}
            {job.education && <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> {job.education}</span>}
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-headline text-2xl text-navy mb-4">Descripcion</h2>
                <p className="text-dark-gray leading-relaxed">{job.description}</p>
              </div>

              {job.responsibilities.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-navy mb-4">Responsabilidades</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="text-dark-gray">
                        <span className="font-semibold text-navy">{r.titulo}</span>
                        {r.detalle && r.detalle.length > 0 && (
                          <ul className="mt-1 ml-4 space-y-1">
                            {r.detalle.map((d, j) => (
                              <li key={j} className="text-sm text-dark-gray before:content-['—'] before:mr-2 before:text-blue-prime">{d}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-navy mb-4">Requisitos</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((r, i) => (
                      <li key={i} className="text-dark-gray flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-prime mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <div>
                  <h2 className="font-headline text-2xl text-navy mb-4">Beneficios</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((b, i) => (
                      <li key={i} className="text-dark-gray flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white p-8 rounded-xl border border-border-soft shadow-lg">
                <img src={job.imageUrl} alt={job.title} className="w-full aspect-video object-cover rounded-lg mb-6" loading="lazy" />
                <h3 className="font-headline text-xl text-navy mb-2">{job.title}</h3>
                <p className="text-dark-gray text-sm mb-6">{job.department} · {job.location}</p>
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-prime text-white py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-blue-deep transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-prime/20"
                >
                  Postularme
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
