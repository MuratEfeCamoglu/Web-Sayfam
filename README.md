# Murat Efe Çamoğlu – Kişisel Portfolio Websitesi

Kişisel portfolyo web sitem. Next.js 14 ve Tailwind CSS kullanılarak geliştirilmiş, Vercel'e deploy edilmeye hazır, modern ve responsive bir portfolyo sitesi.

## 🔧 Kullanılan Teknolojiler

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Inter (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: TypeScript

## 📁 Proje Yapısı

```
Web-Sayfam/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata
│   ├── page.tsx            # Ana sayfa (tüm bölümler)
│   └── globals.css         # Global stiller + Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navbar + hamburger menü
│   ├── Hero.tsx            # Hero bölümü
│   ├── About.tsx           # Hakkımda
│   ├── Education.tsx       # Eğitim (timeline)
│   ├── Skills.tsx          # Yetenekler (badge grid)
│   ├── Experience.tsx      # Deneyim (timeline)
│   ├── Projects.tsx        # Projeler (kart grid)
│   ├── Certificates.tsx    # Sertifikalar
│   ├── Contact.tsx         # İletişim
│   ├── Footer.tsx          # Footer
│   └── BackToTop.tsx       # Yukarı çık butonu
├── public/
│   └── cv.pdf              # CV dosyası (buraya ekleyin)
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## 🚀 Yerel Kurulum

### Gereksinimler
- Node.js 18.17 veya üzeri
- npm 9 veya üzeri

### Adımlar

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/muratefe/Web-Sayfam.git
   cd Web-Sayfam
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

### Build (Production)

```bash
npm run build
npm start
```

## 🌐 Vercel'e Deploy

### Seçenek 1 – Vercel Dashboard (Önerilen)

1. [vercel.com](https://vercel.com) adresine gidip GitHub hesabınızla giriş yapın.
2. **"New Project"** butonuna tıklayın.
3. `Web-Sayfam` reposunu import edin.
4. Vercel otomatik olarak Next.js framework'ünü algılar.
5. **"Deploy"** butonuna tıklayın.

Vercel her `git push` işleminde otomatik olarak yeniden deploy yapar.

### Seçenek 2 – Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📄 CV Dosyası Ekleme

CV'nizi PDF formatında `public/cv.pdf` olarak kaydedin. Site otomatik olarak bu dosyayı indirme butonuna bağlar.

## ✏️ İçerik Güncelleme

İçerikler ilgili component dosyalarından kolayca güncellenebilir:

| Bölüm | Dosya |
|---|---|
| Kişisel Bilgiler | `components/Hero.tsx` |
| Hakkımda | `components/About.tsx` |
| Eğitim | `components/Education.tsx` |
| Yetenekler | `components/Skills.tsx` |
| Deneyim | `components/Experience.tsx` |
| Projeler | `components/Projects.tsx` |
| Sertifikalar | `components/Certificates.tsx` |
| İletişim | `components/Contact.tsx` |

## 📝 Lisans

Bu proje kişisel kullanım amaçlıdır.
