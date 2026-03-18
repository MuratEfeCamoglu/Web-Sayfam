import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const footerLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'İletişim', href: '#iletisim' },
]

const social = [
  { icon: Github, href: 'https://github.com/MuratEfeCamoglu', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/murat-efe-çamoğlu', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:camoglumuratefe@gmail.com', label: 'E-posta' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080810] border-t border-indigo-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Murat Efe <span className="text-indigo-400">Çamoğlu</span>
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigasyonu">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-300 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © {currentYear} Murat Efe Çamoğlu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
