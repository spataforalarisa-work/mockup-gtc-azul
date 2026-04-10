import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Briefcase } from 'lucide-react'
import { JOBS, DEPARTMENTS } from '@/data/jobs'
import { RevealSection } from '@/components/shared/RevealSection'

export default function EmpleosPage() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('')

  const activeJobs = useMemo(() => JOBS.filter(j => j.active), [])

  const filtered = useMemo(() => {
    return activeJobs.filter(j => {
      const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase())
      const matchDept = !dept || j.department === dept
      return matchSearch && matchDept
    })
  }, [activeJobs, search, dept])

  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-prime/[0.06] blur-[120px] rounded-full -mr-32" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-blue-light text-xs font-label uppercase tracking-widest font-bold mb-4 block">Oportunidades</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Trabaja con empresas <span className="serif-italic text-gold">internacionales</span>.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-10">
            {activeJobs.length} vacantes activas en modalidad 100% remoto. Encuentra tu próxima oportunidad profesional.
          </p>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar por título o área..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-prime focus:border-blue-prime outline-none"
              />
            </div>
            <select
              value={dept}
              onChange={e => setDept(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:ring-2 focus:ring-blue-prime outline-none"
            >
              <option value="" className="text-navy">Todos los departamentos</option>
              {DEPARTMENTS.map(d => (
                <option key={d} value={d} className="text-navy">{d}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <RevealSection className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark-gray text-lg">No se encontraron vacantes con esos filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(job => (
                <Link
                  key={job.id}
                  to={`/empleos/${job.id}`}
                  className="bg-white rounded-xl border border-border-soft overflow-hidden hover:shadow-xl hover:border-blue-prime/20 transition-all group"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={job.imageUrl}
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-blue-prime text-[10px] font-label uppercase tracking-widest font-bold">{job.department}</span>
                    <h3 className="font-headline text-xl text-navy mt-2 mb-3 group-hover:text-blue-prime transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 text-dark-gray text-sm">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </RevealSection>
    </>
  )
}
