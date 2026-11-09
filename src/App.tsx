import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'

export default function App() {
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
    </>
  )
}
