'use client'

import { useEffect, useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

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

const educationData = [
  {
    school: 'Balıkesir Üniversitesi',
    degree: 'Bilgisayar Mühendisliği',
    period: '2023 – Devam Ediyor',
    location: 'Balıkesir',
    description:
      'Yazılım geliştirme, nesne yönelimli programlama, veritabanı yönetimi ve sistem tasarımı konularında kapsamlı eğitim almaktayım. Mobil uygulama geliştirme alanında kişisel projeler yürütüyorum.',
    current: true,
  },
  {
    school: 'İzmir Çiğli Fen Lisesi',
    degree: 'Fen Bilimleri',
    period: '2018 – 2022',
    location: 'İzmir',
    description:
      'Fen bilimleri ağırlıklı bir müfredatla matematik, fizik ve temel bilgisayar bilimleri konularında güçlü bir altyapı edindim.',
    current: false,
  },
]

export default function Education() {
  const addRef = useReveal()

  return (
    <section id="egitim" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="glow-blob w-64 h-64 bg-violet-700 bottom-10 left-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Akademik Geçmiş
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Eğitim
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 space-y-10 max-w-3xl">
          {/* Vertical line */}
          <div className="timeline-line" aria-hidden="true" />

          {educationData.map((item, i) => (
            <div
              key={item.school}
              ref={addRef as (el: HTMLDivElement | null) => void}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" aria-hidden="true" />

              {/* Card */}
              <div className="card p-6 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={16} className="text-indigo-400 flex-shrink-0" />
                      <h3 className="text-slate-100 font-bold text-lg leading-tight">
                        {item.school}
                      </h3>
                    </div>
                    <p className="text-indigo-400 font-semibold text-sm">{item.degree}</p>
                  </div>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium rounded-full flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                      Devam Ediyor
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
