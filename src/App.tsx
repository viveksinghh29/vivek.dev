import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Gallery from './sections/Gallery'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Gallery />
      <div className="mb-16">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
