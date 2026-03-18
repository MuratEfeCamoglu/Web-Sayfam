'use client'

import { useEffect, useRef } from 'react'
import { Github, ExternalLink, Smartphone } from 'lucide-react'

function useReveal() {
  const refs = useRef<HTMLElement[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el)
  }
}

const projects = [
  {
    title: 'Sağlıkla',
    emoji: '🏥',
    description:
      'Tip 1 & Tip 2 diyabet ve çölyak hastalarının günlük yaşamını kolaylaştırmak amacıyla geliştirilen yapay zeka destekli kapsamlı bir sağlık yönetim uygulaması.',
    tags: ['Flutter', 'Dart', 'Yapay Zeka', 'Sağlık'],
    github: 'https://github.com/MuratEfeCamoglu/Saglikla-App',
    gradient: 'from-rose-500/20 to-pink-600/10',
    borderColor: 'hover:border-rose-500/40',
    tagColor: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
  },
  {
    title: 'Harcama Takipçisi',
    emoji: '💰',
    description:
      'Günlük harcamalarınızı kategorilere göre takip etmenizi ve bütçenizi kolayca yönetmenizi sağlayan kişisel finans uygulaması.',
    tags: ['Flutter', 'Dart', 'SQLite'],
    github: 'https://github.com/MuratEfeCamoglu/Expense-Tracker',
    gradient: 'from-emerald-500/20 to-green-600/10',
    borderColor: 'hover:border-emerald-500/40',
    tagColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  },
  {
    title: 'Alışveriş Uygulaması',
    emoji: '🛍️',
    description:
      'Kullanıcıların ürünleri arayıp online olarak satın alabildiği, modern ve kullanıcı dostu arayüze sahip bir mobil alışveriş platformu.',
    tags: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/MuratEfeCamoglu/Shoping_app',
    gradient: 'from-sky-500/20 to-cyan-600/10',
    borderColor: 'hover:border-sky-500/40',
    tagColor: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
  },
  {
    title: 'Sosyal Medya Uygulaması',
    emoji: '💬',
    description:
      'Kullanıcıların içerik paylaşabildiği, birbirleriyle etkileşime girebildiği ve topluluk oluşturabildiği dijital bir sosyal platform.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/MuratEfeCamoglu/socialmedia_app',
    gradient: 'from-violet-500/20 to-purple-600/10',
    borderColor: 'hover:border-violet-500/40',
    tagColor: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
  },
]

export default function Projects() {
  const addRef = useReveal()

  return (
    <section id="projeler" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-indigo-700 bottom-0 right-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Portföyüm
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 section-heading">
            Projeler
          </h2>
          <p className="text-slate-400 text-base mt-6 max-w-xl">
            Flutter ile geliştirdiğim, gerçek dünya problemlerini çözmeyi hedefleyen uygulamalar.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              ref={addRef as (el: HTMLElement | null) => void}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative card overflow-hidden group p-6 ${project.borderColor}`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={project.title}>
                      {project.emoji}
                    </span>
                    <div>
                      <h3 className="text-slate-100 font-bold text-lg group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <Smartphone size={11} />
                        <span>Flutter App</span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-all border border-white/10 hover:border-white/20 flex-shrink-0"
                    aria-label={`${project.title} GitHub deposu`}
                  >
                    <Github size={15} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium border rounded-md ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mt-10 text-center"
        >
          <a
            href="https://github.com/MuratEfeCamoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            Tüm Projeleri GitHub'da Gör
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
