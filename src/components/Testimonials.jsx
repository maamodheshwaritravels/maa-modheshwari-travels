import { motion } from 'framer-motion'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { FiStar } from 'react-icons/fi'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Malaylathiya',
    city: 'Surat',
    rating: 5,
    text: 'Praised driver Himanshubhai\'s behavior and overall travel experience. Recommended the bus service strongly.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Deepak',
    city: 'Surat',
    rating: 5,
    text: 'Mentioned affordable pricing, safety procedures, insurance coverage, and fast booking process.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Dharmesh Dumasia',
    city: 'Surat',
    rating: 5,
    text: 'Highlighted new taxis, polite driver, smooth driving, punctuality, and value for money.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Ajay Mangle',
    city: 'Surat',
    rating: 5,
    text: 'Appreciated driver guidance and route knowledge that helped reach on time.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Soham',
    city: 'Surat',
    rating: 5,
    text: 'Mentioned seamless booking, multilingual assistance, and hassle-free service.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Krish Kukadiya',
    city: 'Surat',
    rating: 5,
    text: 'Praised cleanliness, sanitization, insurance coverage, reasonable prices, and timely reservations.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Nitin',
    city: 'Surat',
    rating: 5,
    text: 'Shared experience hiring Tata Winger for trip; praised seating comfort, charging ports, interiors, and driver behavior.',
    avatar: '👨‍💼',
    source: 'JustDial'
  },
  {
    name: 'Rajnikant Nakarani',
    city: 'Surat',
    rating: 5,
    text: 'Called it a family-friendly tour company with supportive staff and excellent service quality.',
    avatar: '👨‍💼',
    source: 'JustDial'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

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
          <p className="text-base sm:text-lg md:text-xl text-gray-600">What our satisfied customers say</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={current}
          >
            <div className="text-3xl sm:text-4xl mb-4">{testimonials[current].avatar}</div>
            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FiStar key={i} className="text-brand-gold fill-brand-gold w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 italic">"{testimonials[current].text}"</p>
            <h3 className="font-semibold text-base sm:text-lg text-brand-red">{testimonials[current].name}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{testimonials[current].city}</p>
            {testimonials[current].source && (
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold">
                ⭐ From {testimonials[current].source}
              </div>
            )}
          </motion.div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <motion.button
              onClick={prev}
              className="p-2 sm:p-3 rounded-full bg-brand-red text-white hover:bg-red-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-2 sm:p-3 rounded-full bg-brand-red text-white hover:bg-red-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
