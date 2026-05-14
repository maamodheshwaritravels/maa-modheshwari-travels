import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MAA</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Modheshwari</h3>
                <p className="text-xs text-gray-400">Travels</p>
              </div>
            </div>
            <p className="text-gray-400">Premium airport transfers and travel services in Surat.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Vehicles', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold transition">
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
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Airport Transfers', 'Car Rentals', 'Group Travel', 'Bus Booking'].map((service) => (
                <li key={service} className="text-gray-400">{service}</li>
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
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone size={18} />
                <span>96247 42600</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={18} />
                <span>Umbarwada, Surat</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social & Newsletter */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe for Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-brand-red text-white"
                />
                <motion.button
                  className="px-6 py-2 rounded-lg bg-brand-red hover:bg-red-600 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://wa.me/919624742600"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
            <p className="flex items-center justify-center gap-2">
              © 2026 Maa Modheshwari Travels. Made with <FiHeart size={16} className="text-brand-red" /> in Surat
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
