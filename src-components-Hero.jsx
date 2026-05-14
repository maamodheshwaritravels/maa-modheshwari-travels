import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen relative pt-20 bg-gradient-to-br from-brand-cream via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-brand-red/10 text-brand-red font-semibold text-sm mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ✈️ Bombay Airport Specialist
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-red mb-6 leading-tight">
              Premium Travel Experience
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Fast, reliable, and luxurious airport transfers, taxi services, and vehicle rentals in Surat. Your journey, our priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/919624742600"
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-brand-red to-red-600 text-white font-semibold hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={20} />
                Book on WhatsApp
                <FiArrowRight />
              </motion.a>

              <motion.a
                href="tel:9624742600"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg border-2 border-brand-red text-brand-red font-semibold hover:bg-brand-red hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone size={20} />
                Call: 96247 42600
              </motion.a>
            </div>
          </motion.div>

          {/* Right Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Animated Cards */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 glass rounded-3xl p-6 shadow-xl z-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="font-semibold text-lg text-brand-red mb-2">Airport Transfers</h3>
                <p className="text-sm text-gray-600">Quick pickups & drop-offs at Bombay Airport</p>
              </motion.div>

              <motion.div
                className="absolute top-32 -left-10 w-64 h-64 glass rounded-3xl p-6 shadow-xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="font-semibold text-lg text-brand-red mb-2">Luxury Vehicles</h3>
                <p className="text-sm text-gray-600">A.C. & Non-A.C. cars for all occasions</p>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 w-64 h-64 glass rounded-3xl p-6 shadow-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-4xl mb-4">🚌</div>
                <h3 className="font-semibold text-lg text-brand-red mb-2">Bus & Tempo</h3>
                <p className="text-sm text-gray-600">Group travel for corporate & leisure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
