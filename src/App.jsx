import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Vehicles from './components/Vehicles'
import VehicleGallery from './components/VehicleGallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    try {
      const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })

      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => lenis.destroy()
    } catch (error) {
      console.warn('Lenis error:', error)
    }
  }, [])

  return (
    <div className="bg-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Vehicles />
      <VehicleGallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
