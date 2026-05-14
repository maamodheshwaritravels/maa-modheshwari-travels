import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MAA</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-brand-red">Modheshwari</h1>
              <p className="text-xs text-brand-gold">Travels</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-brand-red transition">Services</a>
            <a href="#vehicles" className="text-gray-700 hover:text-brand-red transition">Vehicles</a>
            <a href="#why-us" className="text-gray-700 hover:text-brand-red transition">Why Us</a>
            <a href="#faq" className="text-gray-700 hover:text-brand-red transition">FAQ</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="tel:9624742600"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-brand-red hover:bg-brand-red hover:text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              <FiPhone size={18} />
              <span className="text-sm font-semibold">96247 42600</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919624742600"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-red"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-6 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <a href="#services" className="block text-gray-700 hover:text-brand-red">Services</a>
            <a href="#vehicles" className="block text-gray-700 hover:text-brand-red">Vehicles</a>
            <a href="#why-us" className="block text-gray-700 hover:text-brand-red">Why Us</a>
            <a href="#faq" className="block text-gray-700 hover:text-brand-red">FAQ</a>
            <motion.a
              href="https://wa.me/919624742600"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp />
              WhatsApp Us
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
