'use client'

import { useEffect, useRef } from 'react'
import { Mail, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react'

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

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/MuratEfeCamoglu',
    href: 'https://github.com/MuratEfeCamoglu',
    color: 'hover:text-slate-200 hover:border-slate-400/40',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/murat-efe-çamoğlu',
    href: 'https://www.linkedin.com/in/murat-efe-çamoğlu',
    color: 'hover:text-sky-400 hover:border-sky-400/40',
  },
  {
    icon: Globe,
    label: 'Web Sitesi',
    value: 'muratefecamoglu.vercel.app',
    href: 'https://muratefecamoglu.vercel.app/',
    color: 'hover:text-indigo-400 hover:border-indigo-400/40',
  },
]

export default function Contact() {
  const addRef = useReveal()

  return (
    <section id="iletisim" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="glow-blob w-80 h-80 bg-indigo-600 bottom-0 left-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Bana Ulaşın
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            İletişim
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left – contact info */}
          <div
            ref={addRef as (el: HTMLDivElement | null) => void}
            className="reveal reveal-delay-1 space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-base">
              Yeni fırsatlara, iş birliklerine ve ilginç projeler üzerine konuşmaya her zaman açığım.
              Staj teklifleri veya herhangi bir soru için aşağıdaki kanallardan bana ulaşabilirsiniz.
            </p>

            {/* Direct email card */}
            <a
              href="mailto:camoglumuratefe@gmail.com"
              className="group flex items-center gap-4 card p-5 cursor-pointer"
              aria-label="E-posta gönder"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                <Mail size={20} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 font-medium">E-Posta</p>
                <p className="text-slate-200 font-semibold text-sm group-hover:text-indigo-300 transition-colors">
                  camoglumuratefe@gmail.com
                </p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-center gap-4 card p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1 font-medium">Konum</p>
                <p className="text-slate-200 font-semibold text-sm">Aydın, Türkiye</p>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Sosyal Medya</p>
              {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-slate-400 border border-transparent rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/3 ${color}`}
                  aria-label={label}
                >
                  <Icon size={17} className="flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right – call to action card */}
          <div
            ref={addRef as (el: HTMLDivElement | null) => void}
            className="reveal reveal-delay-2"
          >
            <div className="card p-8 h-full flex flex-col justify-between bg-gradient-to-br from-indigo-900/20 to-violet-900/10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                  <Send size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  Birlikte Bir Şeyler Yapalım!
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Staj fırsatları, proje iş birlikleri veya yazılım geliştirme hakkında
                  sohbet etmek ister misiniz? Mesajınızı bekliyorum.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:camoglumuratefe@gmail.com"
                  className="btn-primary justify-center"
                >
                  <Mail size={16} />
                  E-Posta Gönder
                </a>
                <a
                  href="https://www.linkedin.com/in/murat-efe-çamoğlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
