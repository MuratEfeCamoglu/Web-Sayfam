'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on mouse move
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 15
      const y = (e.clientY / innerHeight - 0.5) * 10
      const blobs = heroRef.current.querySelectorAll<HTMLElement>('.glow-blob')
      blobs.forEach((blob, i) => {
        const factor = i % 2 === 0 ? 1 : -1
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    document.getElementById('hakkimda')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Decorative glow blobs */}
      <div
        className="glow-blob w-96 h-96 bg-indigo-600 top-[-80px] left-[-100px]"
        style={{ position: 'absolute', transition: 'transform 0.3s ease' }}
        aria-hidden="true"
      />
      <div
        className="glow-blob w-80 h-80 bg-violet-600 bottom-[-60px] right-[-60px]"
        style={{ position: 'absolute', transition: 'transform 0.3s ease' }}
        aria-hidden="true"
      />
      <div
        className="glow-blob w-64 h-64 bg-indigo-900 top-1/2 left-1/2"
        style={{ position: 'absolute', transition: 'transform 0.3s ease' }}
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text side */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
              Staj Fırsatlarına Açık
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-50 leading-tight mb-4 tracking-tight">
              Murat Efe{' '}
              <span className="gradient-text block sm:inline">Çamoğlu</span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl text-slate-400 font-medium mb-6">
              Bilgisayar Mühendisliği Öğrencisi
              <span className="text-indigo-400 mx-2">|</span>
              Mobil &amp; Web Geliştirici
            </p>

            {/* Short bio */}
            <p className="text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-base">
              Balıkesir Üniversitesi'nde 3. sınıf Bilgisayar Mühendisliği öğrencisiyim.
              Flutter ile yüksek performanslı mobil uygulamalar geliştiriyor,
              aynı zamanda web teknolojileri ve veritabanı alanlarında kendimi sürekli geliştiriyorum.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a href="#projeler" onClick={scrollToProjects} className="btn-primary">
                <ExternalLink size={16} />
                Projeleri Gör
              </a>
              <a href="#iletisim" onClick={scrollToContact} className="btn-secondary">
                <Mail size={16} />
                İletişime Geç
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary"
                aria-label="CV'yi indir"
              >
                <Download size={16} />
                CV İndir
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <a
                href="https://github.com/MuratEfeCamoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-400 transition-all duration-200"
                aria-label="GitHub profili"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/murat-efe-çamoğlu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-400 transition-all duration-200"
                aria-label="LinkedIn profili"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:camoglumuratefe@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-400 transition-all duration-200"
                aria-label="E-posta gönder"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Avatar side */}
          <div className="flex-shrink-0 relative animate-fade-in">
            {/* Outer glow ring */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-600/20 absolute inset-0 blur-2xl" />

            {/* Avatar circle */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center shadow-2xl shadow-indigo-900/50 ring-4 ring-indigo-500/20 animate-float">
              {/* Initials */}
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight select-none">
                MEC
              </span>
            </div>

            {/* Floating mini badge – location */}
            <div className="absolute -bottom-3 -left-4 bg-[#13131f] border border-indigo-500/25 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-base">📍</span>
              <span className="text-xs font-medium text-slate-300">Aydın, TR</span>
            </div>

            {/* Floating mini badge – available */}
            <div className="absolute -top-3 -right-4 bg-[#13131f] border border-green-500/25 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              <span className="text-xs font-medium text-slate-300">2025 Staj</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 pb-8">
          <button
            onClick={scrollDown}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors group"
            aria-label="Aşağı kaydır"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Keşfet</span>
            <ArrowDown size={18} className="animate-bounce group-hover:text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
