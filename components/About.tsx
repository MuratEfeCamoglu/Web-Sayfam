'use client'

import { useEffect, useRef } from 'react'
import { User, MapPin, GraduationCap, Code } from 'lucide-react'

// Reusable scroll-reveal hook
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

const highlights = [
  { icon: GraduationCap, label: 'Üniversite', value: 'Balıkesir Üniversitesi' },
  { icon: Code, label: 'Bölüm', value: 'Bilgisayar Mühendisliği' },
  { icon: User, label: 'Sınıf', value: '3. Sınıf' },
  { icon: MapPin, label: 'Konum', value: 'Aydın, Türkiye' },
]

export default function About() {
  const addRef = useReveal()

  return (
    <section
      id="hakkimda"
      className="py-24 bg-[#0d0d1a] relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="glow-blob w-72 h-72 bg-indigo-700 top-10 right-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Tanışalım
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Hakkımda
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left – bio text */}
          <div
            ref={addRef as (el: HTMLDivElement | null) => void}
            className="reveal reveal-delay-1 space-y-5"
          >
            <p className="text-slate-300 leading-relaxed text-base">
              Merhaba! Ben <strong className="text-slate-100">Murat Efe Çamoğlu</strong>, Balıkesir
              Üniversitesi Bilgisayar Mühendisliği bölümünde 3. sınıf öğrencisiyim. Yazılım
              geliştirme konusunda kendimi sürekli geliştiren, yeni teknolojilere meraklı bir
              bireyim.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Birincil uzmanlık alanım <span className="text-indigo-400 font-semibold">Flutter / Dart</span>{' '}
              ile mobil uygulama geliştirmedir. Kullanıcı deneyimini ön plana alan, temiz mimariyle
              inşa edilmiş, yüksek performanslı uygulamalar geliştiriyorum.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Bunun yanı sıra nesne yönelimli programlama, ilişkisel veritabanı yönetimi ve
              arayüz tasarımı konularında güçlü bir teorik ve pratik alt yapıya sahibim.
              Profesyonel geliştirici olma yolculuğuma kararlılıkla devam ediyorum.
            </p>

            {/* Language tag */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="skill-badge">🇹🇷 Türkçe – Ana dil</span>
              <span className="skill-badge">🇬🇧 İngilizce – Cambridge PET</span>
            </div>
          </div>

          {/* Right – stat/highlight cards */}
          <div
            ref={addRef as (el: HTMLDivElement | null) => void}
            className="reveal reveal-delay-2 grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-5">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="text-slate-200 font-semibold text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
