import BackToTop from '@/components/layout/BackToTop'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
