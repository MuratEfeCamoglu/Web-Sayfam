'use client'

import { useEffect, useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

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

const certificates = [
  {
    title: 'Dart and Flutter: The Ultimate Mobile App Development Course',
    issuer: 'Udemy',
    emoji: '📱',
    color: 'indigo',
    link: '/UC-e5351813-d508-42b4-ab3a-5ae75cc5d143.pdf',
  },
  {
    title: 'Flutter for Beginners: Learn to Build Mobile Apps with Ease',
    issuer: 'Udemy',
    emoji: '🚀',
    color: 'violet',
    link: '/UC-633fe862-f6a1-41df-a9c1-4ad211298af4.pdf',
  },
  {
    title: 'Version Control Systems with Git and GitHub',
    issuer: 'Online Kurs',
    emoji: '🔀',
    color: 'sky',
    link: '/UC-e5351813-d508-42b4-ab3a-5ae75cc5d143.pdf',
  },
]

const colorStyles: Record<string, string> = {
  indigo: 'from-indigo-500/15 to-transparent border-indigo-500/20 hover:border-indigo-400/40',
  violet: 'from-violet-500/15 to-transparent border-violet-500/20 hover:border-violet-400/40',
  sky: 'from-sky-500/15 to-transparent border-sky-500/20 hover:border-sky-400/40',
}
const iconColorStyles: Record<string, string> = {
  indigo: 'bg-indigo-500/15 text-indigo-400',
  violet: 'bg-violet-500/15 text-violet-400',
  sky: 'bg-sky-500/15 text-sky-400',
}
const issuerColorStyles: Record<string, string> = {
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  sky: 'text-sky-400',
}

export default function Certificates() {
  const addRef = useReveal()

  return (
    <section id="sertifikalar" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="glow-blob w-72 h-72 bg-violet-700 top-10 left-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widests uppercase mb-2">
            Eğitim & Sertifika
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Sertifikalar
          </h2>
        </div>

        {/* Certificates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              ref={addRef as (el: HTMLDivElement | null) => void}
              className={`reveal reveal-delay-${i + 1} relative card bg-gradient-to-br ${colorStyles[cert.color]} p-6 group`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${iconColorStyles[cert.color]} flex items-center justify-center mb-4`}
              >
                <span className="text-2xl" role="img" aria-label={cert.title}>
                  {cert.emoji}
                </span>
              </div>

              {/* Award icon top-right */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Award size={22} className={issuerColorStyles[cert.color]} />
              </div>

              {/* Content */}
              <h3 className="text-slate-200 font-semibold text-sm leading-snug mb-2 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className={`text-xs font-medium mb-4 ${issuerColorStyles[cert.color]}`}>
                {cert.issuer}
              </p>

              {/* Link */}
              <a
                href={cert.link}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={11} />
                Sertifikayı Gör
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
