import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Rajesh Patel',
    city: 'Surat',
    rating: 5,
    text: 'Excellent service! The driver was professional and the car was spotlessly clean. Will definitely book again.',
    avatar: '👨‍💼'
  },
  {
    name: 'Priya Sharma',
    city: 'Ahmedabad',
    rating: 5,
    text: 'Best airport transfer service. On-time pickup, courteous driver, and very comfortable journey.',
    avatar: '👩‍💼'
  },
  {
    name: 'Vikram Singh',
    city: 'Mumbai',
    rating: 5,
    text: 'Booked for group travel. The tempo was spacious, driver was experienced, and prices were reasonable.',
    avatar: '👨‍💼'
  },
  {
    name: 'Anjali Verma',
    city: 'Surat',
    rating: 5,
    text: 'Very reliable! I book with them for my monthly airport runs. Customer service is top-notch.',
    avatar: '👩‍💼'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl font-bold text-brand-red mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600">What our satisfied customers say</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={current}
          >
            <div className="text-4xl mb-4">{testimonials[current].avatar}</div>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FiStar key={i} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[current].text}"</p>
            <h3 className="font-semibold text-lg text-brand-red">{testimonials[current].name}</h3>
            <p className="text-sm text-gray-600">{testimonials[current].city}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-brand-red text-white hover:bg-red-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-brand-red text-white hover:bg-red-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
