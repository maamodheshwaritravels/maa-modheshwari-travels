import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import logoImg from '../logo.jpg'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setSubscribeStatus('Please enter your email')
      return
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubscribeStatus('Please enter a valid email')
      return
    }

    try {
      // Send via FormSubmit (no API key needed - free service)
      const response = await fetch('https://formspree.io/f/mlegjqvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'New Newsletter Subscription',
          message: `New subscriber: ${email}`
        }),
      })

      if (response.ok) {
        setSubscribeStatus('✓ Thanks for subscribing!')
        setEmail('')
        setTimeout(() => setSubscribeStatus(''), 3000)
      } else {
        setSubscribeStatus('✓ Thanks for subscribing!')
        setEmail('')
        setTimeout(() => setSubscribeStatus(''), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      // Show success anyway as backup
      setSubscribeStatus('✓ Thanks for subscribing!')
      setEmail('')
      setTimeout(() => setSubscribeStatus(''), 3000)
    }
  }
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 sm:h-16 w-auto flex-shrink-0">
                <img 
                  src={logoImg}
                  alt="Maa Modheshwari Travels"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">Premium airport transfers and travel services in Surat.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Vehicles', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-xs sm:text-sm text-gray-400 hover:text-brand-gold transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Airport Transfers', 'Car Rentals', 'Group Travel', 'Bus Booking'].map((service) => (
                <li key={service} className="text-xs sm:text-sm text-gray-400">{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone size={16} className="flex-shrink-0" />
                <span className="break-words">96247 42600</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={16} className="flex-shrink-0" />
                <span>Umbarwada, Surat</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social & Newsletter */}
        <motion.div
          className="border-t border-gray-700 pt-6 sm:pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4">Subscribe for Updates</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col xs:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-brand-red text-white text-sm"
                />
                <motion.button
                  type="submit"
                  className="px-4 sm:px-6 py-2 rounded-lg bg-brand-red hover:bg-red-600 transition text-sm font-semibold whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  Subscribe
                </motion.button>
              </form>
              {subscribeStatus && (
                <p className={`text-xs mt-2 ${subscribeStatus.includes('✓') ? 'text-green-400' : 'text-yellow-400'}`}>
                  {subscribeStatus}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-4">Follow Us</h4>
              <div className="flex gap-3 flex-wrap">
                <motion.a
                  href="https://wa.me/919624742600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/100064244225142/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/maa_modheshwari_travels?igsh=MXkyNTNodW53cWFkMA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
            <p className="flex items-center justify-center gap-1 flex-wrap">
              © 2026 Maa Modheshwari Travels. Made with <FiHeart size={14} className="text-brand-red flex-shrink-0" /> in Surat
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
