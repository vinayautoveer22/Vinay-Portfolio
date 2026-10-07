import Ambient from './components/Ambient'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import FreelanceProjects from './components/FreelanceProjects'
import CreativeGallery from './components/CreativeGallery'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import ClosingCTA from './components/ClosingCTA'
import CampaignProcess from './components/CampaignProcess'
import ScrollMotion from './components/ScrollMotion'

/**
 * Main Portfolio Application Entry Point
 */
export default function App() {
  return (
      <div className="min-h-screen text-ink flex flex-col">
        <Ambient />
        <ScrollMotion />
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Projects />
          <FreelanceProjects />
          <CampaignProcess />
          <CreativeGallery />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <ClosingCTA />
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
  )
}
