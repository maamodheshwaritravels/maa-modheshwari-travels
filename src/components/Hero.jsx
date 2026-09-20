import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiNavigation, FiTruck, FiUsers } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen relative pt-16 sm:pt-20 bg-gradient-to-br from-brand-cream via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-[calc(100vh-80px)] py-12 lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red font-semibold text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiNavigation size={14} />
              Bombay Airport Specialist
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-red mb-8 leading-tight">
              Surat's Premier <br className="hidden sm:block" />Taxi & Travel Service
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
              Experience safe, reliable, and luxurious journeys. Specializing in on-time Mumbai Airport transfers, city tours, and premium vehicle rentals. Your comfort is our guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/919624742600"
                target="_blank"
                className="btn-primary flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={18} />
                <span>Book on WhatsApp</span>
                <FiArrowRight size={16} />
              </motion.a>

              <motion.a
                href="tel:9624742600"
                className="btn-secondary flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone size={18} />
                <span>Call: 96247 42600</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Showcase - Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Card 1 */}
              <motion.div
                className="glass rounded-2xl p-5 shadow-md flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                  <FiNavigation size={20} className="text-white" />
                </div>
                <h2 className="font-semibold text-lg text-brand-red mb-2 min-h-[3rem] flex items-center">Airport Transfers</h2>
                <p className="text-sm text-gray-600">Quick pickups & drop-offs at Bombay Airport</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="glass rounded-2xl p-5 shadow-md flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3">
                  <FiTruck size={20} className="text-white" />
                </div>
                <h2 className="font-semibold text-lg text-brand-red mb-2 min-h-[3rem] flex items-center">Luxury Vehicles</h2>
                <p className="text-sm text-gray-600">A.C. & Non-A.C. cars for all occasions</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="glass rounded-2xl p-5 shadow-md flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3">
                  <FiUsers size={20} className="text-white" />
                </div>
                <h2 className="font-semibold text-lg text-brand-red mb-2 min-h-[3rem] flex items-center">Bus & Tempo</h2>
                <p className="text-sm text-gray-600">Group travel for corporate & leisure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}