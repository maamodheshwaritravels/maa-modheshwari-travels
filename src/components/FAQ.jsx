import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FiChevronDown as ChevronIcon } from 'react-icons/fi'

const faqs = [
  {
    q: 'Do you provide 24/7 service?',
    a: 'Yes, we operate round-the-clock. You can book for any time of the day or night.'
  },
  {
    q: 'What are your vehicle options?',
    a: 'We have Sedans, Innova, Tempo Travellers (13-17 seater), and Buses (30-45 seater) available.'
  },
  {
    q: 'Are your vehicles A.C.?',
    a: 'We have both A.C. and Non-A.C. vehicles available. You can choose based on your preference.'
  },
  {
    q: 'How do I book?',
    a: 'You can book via WhatsApp at 96247 42600, call Dipakbhai at 96247 42600, or Sanjaybhai at 96247 42800.'
  },
  {
    q: 'Do you offer airport transfers to Bombay?',
    a: 'Yes, we specialize in Bombay Airport transfers with on-time pickup and drop-off guarantees.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI, debit/credit cards, and online bank transfers.'
  }
]

function FAQItem({ item, idx }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 px-4 sm:px-6 flex justify-between items-center hover:bg-gray-50 transition"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-800 text-left">{item.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="flex-shrink-0 ml-4">
          <FiChevronDown className="text-brand-red w-5 h-5 sm:w-5 sm:h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 px-4 sm:px-6 pb-4 sm:pb-6"
          >
            <p className="text-sm sm:text-base text-gray-700">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-3 sm:mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className="glass rounded-lg sm:rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} item={faq} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
