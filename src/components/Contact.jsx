import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappText = `Hello, I'm ${formData.name}. ${formData.message}`
    window.open(`https://wa.me/919624742600?text=${encodeURIComponent(whatsappText)}`, '_blank')
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Ready to book your journey?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-red mb-4 sm:mb-6 md:mb-8">Contact Information</h3>

            <motion.a
              href="tel:9624742600"
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 glass rounded-lg sm:rounded-xl hover:shadow-lg transition group"
              whileHover={{ x: 10 }}
            >
              <FiPhone className="text-brand-red flex-shrink-0 group-hover:scale-110 transition" size={24} />
              <div className="min-w-0">
                <h4 className="font-semibold text-brand-red text-sm sm:text-base">Dipakbhai</h4>
                <p className="text-gray-700 text-xs sm:text-sm break-words">96247 42600 / 78018 42600</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:9624742800"
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 glass rounded-lg sm:rounded-xl hover:shadow-lg transition group"
              whileHover={{ x: 10 }}
            >
              <FiPhone className="text-brand-red flex-shrink-0 group-hover:scale-110 transition" size={24} />
              <div className="min-w-0">
                <h4 className="font-semibold text-brand-red text-sm sm:text-base">Sanjaybhai</h4>
                <p className="text-gray-700 text-xs sm:text-sm break-words">96247 42800</p>
              </div>
            </motion.a>

            <motion.div
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 glass rounded-lg sm:rounded-xl"
              whileHover={{ x: 10 }}
            >
              <FiMapPin className="text-brand-red flex-shrink-0" size={24} />
              <div className="min-w-0">
                <h4 className="font-semibold text-brand-red text-sm sm:text-base">Office Location</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">2-A, Raghuvir Society<br/>Opp. Old Bombay Market<br/>Umbarwada, SURAT-10</p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 glass rounded-lg sm:rounded-xl"
              whileHover={{ x: 10 }}
            >
              <FiClock className="text-brand-red flex-shrink-0" size={24} />
              <div className="min-w-0">
                <h4 className="font-semibold text-brand-red text-sm sm:text-base">Hours</h4>
                <p className="text-gray-700 text-xs sm:text-sm">24/7 Available<br/>We never sleep for your journey!</p>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/919624742600"
              target="_blank"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-red mb-4 sm:mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition text-sm sm:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition text-sm sm:text-base"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition resize-none text-sm sm:text-base"
                required
              ></textarea>

              <motion.button
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-brand-red to-red-600 text-white font-semibold hover:shadow-lg transition text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          className="mt-8 sm:mt-12 rounded-lg sm:rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96 md:h-[500px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1242314396524!2d72.82388342346822!3d21.17689908559803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ecafbffffff%3A0x8d8c8c8c8c8c8c8c!2sRaghuvir%20Society%2C%20Opp%20Old%20Bombay%20Market%2C%20Umbarwada%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1715862234567"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maa Modheshwari Travels Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
