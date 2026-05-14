import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { FiCheckCircle as CheckIcon } from 'react-icons/fi'

const reasons = [
  'Professional & Experienced Drivers',
  'Fleet of Luxury A.C. Vehicles',
  'On-Time Airport Transfers',
  'Transparent Pricing',
  '24/7 Customer Support',
  'Fully Insured Vehicles',
  'GPS Tracking Available',
  'Customized Tour Packages'
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-4 sm:mb-6">Why Choose Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
              Trusted by hundreds of satisfied customers. We deliver excellence in every journey.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FiCheckCircle className="text-green-500 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '50+', label: 'Vehicles Fleet' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'On-Time Rate' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
