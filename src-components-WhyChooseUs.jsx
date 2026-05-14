import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

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
    <section id="why-us" className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl font-bold text-brand-red mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Trusted by hundreds of satisfied customers. We deliver excellence in every journey.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 p-4 glass rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FiCheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="space-y-6"
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
                className="glass rounded-2xl p-8 text-center hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-serif text-5xl font-bold text-brand-red mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
