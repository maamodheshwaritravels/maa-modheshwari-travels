import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen relative pt-16 sm:pt-20 bg-gradient-to-br from-brand-cream via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)] py-8 sm:py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              className="inline-block px-3 sm:px-4 py-2 rounded-full bg-brand-red/10 text-brand-red font-semibold text-xs sm:text-sm mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ✈️ Bombay Airport Specialist
            </motion.div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-4 sm:mb-6 leading-tight">
              Premium Travel Experience
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Fast, reliable, and luxurious airport transfers, taxi services, and vehicle rentals in Surat. Your journey, our priority.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <motion.a
                href="https://wa.me/919624742600"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg bg-gradient-to-r from-brand-red to-red-600 text-white font-semibold hover:shadow-xl transition text-xs sm:text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={16} />
                <span>Book on WhatsApp</span>
                <FiArrowRight size={14} />
              </motion.a>

              <motion.a
                href="tel:9624742600"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg border-2 border-brand-red text-brand-red font-semibold hover:bg-brand-red hover:text-white transition text-xs sm:text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone size={16} />
                <span>Call: 96247 42600</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Showcase - Simplified for Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Card 1 */}
              <motion.div
                className="glass rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">✈️</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-brand-red mb-2">Airport Transfers</h3>
                <p className="text-xs sm:text-sm text-gray-600">Quick pickups & drop-offs at Bombay Airport</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="glass rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🚗</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-brand-red mb-2">Luxury Vehicles</h3>
                <p className="text-xs sm:text-sm text-gray-600">A.C. & Non-A.C. cars for all occasions</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="glass rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:col-span-2"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🚌</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-brand-red mb-2">Bus & Tempo</h3>
                <p className="text-xs sm:text-sm text-gray-600">Group travel for corporate & leisure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
