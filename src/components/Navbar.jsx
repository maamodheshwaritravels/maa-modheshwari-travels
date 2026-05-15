import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import logoImg from '../logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine which section is currently in view
      const sections = ['hero', 'services', 'vehicles', 'why-us', 'faq']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
    setActiveSection('home')
  }

  const isActive = (section) => {
    if (section === 'home') return activeSection === 'home' || window.scrollY < 100
    return activeSection === section
  }

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto sm:h-20 py-2 sm:py-0">
          {/* Logo - Full Horizontal - CLICKABLE */}
          <motion.button
            onClick={handleLogoClick}
            className="flex items-center gap-1 sm:gap-2 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
            whileHover={{ scale: 1.02 }}
            title="Go to Home"
          >
            <img 
              src={logoImg}
              alt="Maa Modheshwari Travels Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={handleLogoClick} 
              className={`transition text-sm bg-transparent border-none cursor-pointer ${
                isActive('home') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Home
            </button>
            <a 
              href="#services" 
              className={`transition text-sm ${
                isActive('services') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Services
            </a>
            <a 
              href="#vehicles" 
              className={`transition text-sm ${
                isActive('vehicles') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Vehicles
            </a>
            <a 
              href="#why-us" 
              className={`transition text-sm ${
                isActive('why-us') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Why Us
            </a>
            <a 
              href="#faq" 
              className={`transition text-sm ${
                isActive('faq') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="tel:9624742600"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-brand-red hover:bg-brand-red hover:text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              <FiPhone size={18} />
              <span className="text-xs font-semibold">96247 42600</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919624742600"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-xs font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-red"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 px-4 py-4 space-y-4 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <button 
              onClick={handleLogoClick} 
              className={`block w-full text-left text-base bg-transparent border-none cursor-pointer transition py-2 ${
                isActive('home') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Home
            </button>
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className={`block text-base transition py-2 ${
                isActive('services') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Services
            </a>
            <a 
              href="#vehicles" 
              onClick={() => setIsOpen(false)}
              className={`block text-base transition py-2 ${
                isActive('vehicles') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Vehicles
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsOpen(false)}
              className={`block text-base transition py-2 ${
                isActive('why-us') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              Why Us
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)}
              className={`block text-base transition py-2 ${
                isActive('faq') 
                  ? 'text-brand-red font-semibold' 
                  : 'text-gray-700 hover:text-brand-red'
              }`}
            >
              FAQ
            </a>
            <motion.a
              href="https://wa.me/919624742600"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-lg bg-green-500 text-white font-semibold text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
