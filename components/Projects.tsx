'use client'

import { useEffect, useRef } from 'react'
import { Github, ExternalLink, Smartphone, Globe } from 'lucide-react'

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
    title: "Limon & Zeytin — RestaurantApp",
    emoji: "🍋",
    description:
      "Restoran salonundaki masa → mutfak → hesap → ödeme döngüsünü yöneten adisyon uygulaması ve REST API’si. Garson ve mutfak ekranları anlık senkronize çalışır.",
    tags: ["Flutter", "Dart (shelf)", "REST API", "SQLite"],
    github: "https://github.com/MuratEfeCamoglu/RestaurantApp",
    gradient: "from-lime-500/20 to-green-600/10",
    borderColor: "hover:border-lime-500/40",
    tagColor: "bg-lime-500/10 border-lime-500/20 text-lime-300",
  },
  {
    title: "Sağlıkla",
    emoji: "🏥",
    description:
      "Diyabet ve çölyak hastaları için yapay zekâ destekli sağlık asistanı. OpenFoodFacts ile barkod tarama ve Gemini ile görsel besin analizi. BanüJam 2 – AppJam Hackathon'unda 10Byte ekibiyle 48 saatte geliştirildi ve 2.lik ödülü aldı.",
    tags: ["🥈 Hackathon 2.si", "Flutter", "Firebase", "Gemini AI"],
    github: "https://github.com/MuratEfeCamoglu/Saglikla-App",
    gradient: "from-rose-500/20 to-pink-600/10",
    borderColor: "hover:border-rose-500/40",
    tagColor: "bg-rose-500/10 border-rose-500/20 text-rose-300",
  },
  {
    title: "Serial Bluetooth Terminal",
    emoji: "📡",
    description:
      "Arduino, ESP32 gibi kartlarla Bluetooth Classic ve BLE üzerinden seri haberleşme terminali. Makro butonları, HEX giriş ve sürükle-bırak sanal kumanda.",
    tags: ["Flutter", "Bluetooth Classic", "BLE", "Android"],
    github: "https://github.com/MuratEfeCamoglu/Serial_Bluetooth_Terminal",
    gradient: "from-cyan-500/20 to-teal-600/10",
    borderColor: "hover:border-cyan-500/40",
    tagColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
  {
    title: "Cepte Staj",
    emoji: "📓",
    description:
      "Stajyerler için offline-first staj defteri. Resmi defter için PDF çıktısı, kağıda geçirme modu ve PDF’e asla girmeyen kişisel staj günlüğü.",
    tags: ["Flutter", "Dart", "PDF", "Offline-first"],
    github: "https://github.com/MuratEfeCamoglu/CepteStaj",
    gradient: "from-indigo-500/20 to-blue-600/10",
    borderColor: "hover:border-indigo-500/40",
    tagColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
  },
  {
    title: "Uyku — SleepApp",
    emoji: "😴",
    description:
      "Uyku süresi, tahmini uyku evreleri ve kalite takibi yapan; akşam rutini, akıllı alarm penceresi ve haftalık rapor sunan, verileri yalnızca cihazda tutan reklamsız uyku takipçisi.",
    tags: ["Flutter", "Dart", "go_router", "Offline"],
    github: "https://github.com/MuratEfeCamoglu/SleepApp",
    gradient: "from-amber-500/20 to-orange-600/10",
    borderColor: "hover:border-amber-500/40",
    tagColor: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
  {
    title: "Arda Tedarik — E-commerce App",
    emoji: "🛒",
    description:
      "Savunma elektroniği bileşen tedariki için B2B e-ticaret uygulaması: kategori/tedarikçi bazlı katalog, sepet, favoriler, 3 adımlı ödeme ve sipariş geçmişi.",
    tags: ["Flutter", "Provider", "B2B", "Açık/Koyu Tema"],
    github: "https://github.com/MuratEfeCamoglu/E-commerce-App",
    gradient: "from-violet-500/20 to-purple-600/10",
    borderColor: "hover:border-violet-500/40",
    tagColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  {
    title: "FamilyTrackApp",
    emoji: "🏠",
    description:
      "Sevdiklerinizle özel günleri ve anıları takip eden, çevrimdışı çalışan hafıza defteri. BLoC ve temiz mimari ile geliştirildi.",
    tags: ["Flutter", "Firebase Auth", "Firestore", "BLoC"],
    github: "https://github.com/MuratEfeCamoglu/FamilyTrackApp",
    gradient: "from-fuchsia-500/20 to-pink-600/10",
    borderColor: "hover:border-fuchsia-500/40",
    tagColor: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300",
  },
  {
    title: "Skycast Weather",
    emoji: "☁️",
    description:
      "Anlık, saatlik ve 7 günlük tahmin; sıcaklık grafiği, çoklu konum yönetimi ve harita desteğine sahip hava durumu uygulaması.",
    tags: ["Flutter", "OpenWeatherMap", "fl_chart", "flutter_animate"],
    github: "https://github.com/MuratEfeCamoglu/Skycast-App",
    gradient: "from-sky-500/20 to-cyan-600/10",
    borderColor: "hover:border-sky-500/40",
    tagColor: "bg-sky-500/10 border-sky-500/20 text-sky-300",
  },
  {
    title: "Expense Tracker",
    emoji: "📊",
    description:
      "Harcama ekleme/düzenleme, kategorilendirme ve aylık grafiksel analiz sunan bütçe yönetim uygulaması.",
    tags: ["Flutter", "Isar", "Provider", "fl_chart"],
    github: "https://github.com/MuratEfeCamoglu/Expense-Tracker",
    gradient: "from-emerald-500/20 to-green-600/10",
    borderColor: "hover:border-emerald-500/40",
    tagColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  },
]

// Smaller projects shown as a compact list under the main grid
const otherProjects = [
  {
    emoji: "🥗",
    title: "Denge — EatWellApp",
    description: "Türk mutfağını tanıyan kalori ve beslenme takibi",
    tech: "Flutter, Provider, Google ML Kit",
    github: "https://github.com/MuratEfeCamoglu/EatWellApp",
  },
  {
    emoji: "🏺",
    title: "SavingsJarApp",
    description: "Hedef odaklı sanal \"kavanozlar\" ile birikim takibi",
    tech: "Flutter, Firebase, Google ile giriş",
    github: "https://github.com/MuratEfeCamoglu/SavingsJarApp",
  },
  {
    emoji: "📝",
    title: "ToDo App",
    description: "Kategori ve takvim görünümlü yapılacaklar listesi",
    tech: "Flutter",
    github: "https://github.com/MuratEfeCamoglu/ToDo-App",
  },
  {
    emoji: "🛍️",
    title: "Shopping App",
    description: "Provider mimarisiyle ürün listeleme ve sepet yönetimi",
    tech: "Flutter, Provider",
    github: "https://github.com/MuratEfeCamoglu/Shoping_app",
  },
  {
    emoji: "🏀",
    title: "NBA Sezon Öncesi Tahmin",
    description: "2026-27 NBA sezonu için sıralama ve Alt/Üst tahmin oyunu",
    tech: "Next.js 16, React 19, TypeScript",
    github: "https://github.com/MuratEfeCamoglu/NbaWebsite",
  },
  {
    emoji: "🚗",
    title: "Tolga Oto Boya",
    description: "Bir oto boya atölyesi için tek sayfalık kurumsal web sitesi",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/MuratEfeCamoglu/TolgaOtoBoya-Website",
    live: "https://tolga-oto-boya-website.vercel.app",
  },
  {
    emoji: "🌐",
    title: "Web-Sayfam",
    description: "Bu portfolyo sitesi",
    tech: "Next.js 14, Tailwind CSS, TypeScript",
    github: "https://github.com/MuratEfeCamoglu/Web-Sayfam",
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
            Flutter ve Dart ile geliştirdiğim, gerçek dünya problemlerini çözmeyi hedefleyen uygulamalar.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              ref={addRef as (el: HTMLElement | null) => void}
              className={`reveal reveal-delay-${(i % 3) + 1} relative card overflow-hidden group p-6 ${project.borderColor}`}
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

        {/* Other projects */}
        <div
          ref={addRef as (el: HTMLDivElement | null) => void}
          className="reveal mt-14"
        >
          <h3 className="text-slate-200 font-bold text-lg mb-5">Diğer Projeler</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {otherProjects.map((project) => (
              <li
                key={project.title}
                className="card p-4 flex items-start gap-3"
              >
                <span className="text-xl leading-none mt-0.5" role="img" aria-label={project.title}>
                  {project.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-200 font-semibold text-sm">{project.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1">{project.description}</p>
                  <p className="text-slate-500 text-xs mt-1.5">{project.tech}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  {'live' in project && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-all border border-white/10 hover:border-white/20"
                      aria-label={`${project.title} canlı site`}
                    >
                      <Globe size={15} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-all border border-white/10 hover:border-white/20"
                    aria-label={`${project.title} GitHub deposu`}
                  >
                    <Github size={15} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
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
