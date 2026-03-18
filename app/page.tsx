import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

/**
 * Main page — composes all portfolio sections in order.
 * Each section has an `id` for smooth-scroll navigation.
 */
export default function Home() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Hakkımda */}
        <About />

        {/* 3. Eğitim */}
        <Education />

        {/* 4. Yetenekler */}
        <Skills />

        {/* 5. Deneyim */}
        <Experience />

        {/* 6. Projeler */}
        <Projects />

        {/* 7. Sertifikalar */}
        <Certificates />

        {/* 8. İletişim */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  )
}
