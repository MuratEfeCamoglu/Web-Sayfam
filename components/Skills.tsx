'use client'

import { useEffect, useRef } from 'react'

function useReveal() {
  const refs = useRef<HTMLElement[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el)
  }
}

// Skills grouped by category with icons
const skillGroups = [
  {
    category: 'Programlama Dilleri',
    emoji: '💻',
    color: 'indigo',
    skills: ['Dart', 'Python', 'TypeScript', 'JavaScript', 'C++', 'C#', 'Java'],
  },
  {
    category: 'Mobil Geliştirme',
    emoji: '📱',
    color: 'violet',
    skills: ['Flutter', 'Android', 'Provider', 'BLoC / Cubit', 'go_router', 'Offline-first Mimari', 'UI/UX İlkeleri'],
  },
  {
    category: 'Web Teknolojileri',
    emoji: '🌐',
    color: 'sky',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'REST API (Dart shelf)', 'Vitest & Playwright'],
  },
  {
    category: 'Veri & Backend',
    emoji: '🗄️',
    color: 'emerald',
    skills: ['Firebase (Auth, Firestore, Storage)', 'SQLite', 'İlişkisel Veritabanı', 'Veritabanı Tasarımı'],
  },
  {
    category: 'Entegrasyonlar & Araçlar',
    emoji: '🔧',
    color: 'amber',
    skills: ['Google Gemini AI', 'Google ML Kit', 'Bluetooth Classic & BLE', 'OpenWeatherMap / OpenFoodFacts', 'Git & GitHub', 'Nesne Yönelimli Programlama', 'Qt Designer (PyQt)', 'C# Forms'],
  },
]

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/40',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/40',
  sky: 'bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/40',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/40',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/40',
}

const headerColorMap: Record<string, string> = {
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  sky: 'text-sky-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
}

export default function Skills() {
  const addRef = useReveal()

  return (
    <section id="yetenekler" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="glow-blob w-80 h-80 bg-indigo-600 top-0 left-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Teknik Yetkinlik
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Yetenekler
          </h2>
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={addRef as (el: HTMLDivElement | null) => void}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-6`}
            >
              {/* Group header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" role="img" aria-label={group.category}>
                  {group.emoji}
                </span>
                <h3 className={`font-semibold text-sm ${headerColorMap[group.color]}`}>
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 cursor-default ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
