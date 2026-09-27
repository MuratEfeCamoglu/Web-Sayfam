'use client'

import { useEffect, useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

function useReveal() {
  const refs = useRef<HTMLElement[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el)
  }
}

const experienceData: {
  company: string
  role: string
  period: string
  location?: string
  description: string
  tags: string[]
  current: boolean
}[] = [
  {
    company: 'Barok Savunma',
    role: 'Stajyer',
    period: 'Temmuz 2026',
    description:
      'Savunma sanayii alanında faaliyet gösteren Barok Savunma bünyesinde stajyer olarak çalışmaya başladım. Bu süreçte projelere katkı sunarak profesyonel deneyim kazanıyorum.',
    tags: ['Savunma Sanayii', 'Staj'],
    current: false,
  },
  {
    company: 'Qua Granite',
    role: 'Bilgi Teknolojileri Stajyeri',
    period: 'Temmuz 2025 – Ağustos 2025',
    location: 'Aydın',
    description:
      'Şirketin bilgi teknolojileri departmanında staj yaparak kurumsal yazılım süreçleri, iç sistemler ve teknik destek süreçleri hakkında deneyim kazandım. Yazılım geliştirme ve sistem yönetimi konularında profesyonel iş ortamında çalışma fırsatı yakaladım.',
    tags: ['Kurumsal Yazılım', 'BT Desteği', 'Yazılım Süreçleri'],
    current: false,
  },
]

export default function Experience() {
  const addRef = useReveal()

  return (
    <section id="deneyim" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="glow-blob w-72 h-72 bg-violet-700 top-10 right-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Profesyonel Deneyim
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Deneyim
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 max-w-3xl">
          <div className="timeline-line" aria-hidden="true" />

          {experienceData.map((item, i) => (
            <div
              key={item.company}
              ref={addRef as (el: HTMLDivElement | null) => void}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" aria-hidden="true" />

              {/* Card */}
              <div className="card p-6 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-indigo-400 flex-shrink-0" />
                      <h3 className="text-slate-100 font-bold text-lg">{item.company}</h3>
                    </div>
                    <p className="text-indigo-400 font-semibold text-sm">{item.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
