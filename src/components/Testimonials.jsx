import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-3 sm:mb-4">Customer Reviews</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">See what our customers have to say</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Elfsight Reviews Widget */}
          <div className="elfsight-app-0b25cad4-0558-4a0e-8c22-10e6622c5d8f" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}
