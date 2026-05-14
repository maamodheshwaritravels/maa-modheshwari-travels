import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
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
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl font-bold text-brand-red mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to book your journey?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-brand-red mb-8">Contact Information</h3>

            <motion.a
              href="tel:9624742600"
              className="flex gap-4 p-6 glass rounded-xl hover:shadow-lg transition group"
              whileHover={{ x: 10 }}
            >
              <FiPhone className="text-brand-red flex-shrink-0 group-hover:scale-110 transition" size={28} />
              <div>
                <h4 className="font-semibold text-brand-red">Dipakbhai</h4>
                <p className="text-gray-700">96247 42600 / 78018 42600</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:9624742800"
              className="flex gap-4 p-6 glass rounded-xl hover:shadow-lg transition group"
              whileHover={{ x: 10 }}
            >
              <FiPhone className="text-brand-red flex-shrink-0 group-hover:scale-110 transition" size={28} />
              <div>
                <h4 className="font-semibold text-brand-red">Sanjaybhai</h4>
                <p className="text-gray-700">96247 42800</p>
              </div>
            </motion.a>

            <motion.div
              className="flex gap-4 p-6 glass rounded-xl"
              whileHover={{ x: 10 }}
            >
              <FiMapPin className="text-brand-red flex-shrink-0" size={28} />
              <div>
                <h4 className="font-semibold text-brand-red">Office Location</h4>
                <p className="text-gray-700">2-A, Raghuvir Society<br/>Opp. Old Bombay Market<br/>Umbarwada, SURAT-10</p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 p-6 glass rounded-xl"
              whileHover={{ x: 10 }}
            >
              <FiClock className="text-brand-red flex-shrink-0" size={28} />
              <div>
                <h4 className="font-semibold text-brand-red">Hours</h4>
                <p className="text-gray-700">24/7 Available<br/>We never sleep for your journey!</p>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/919624742600"
              target="_blank"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp size={24} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-brand-red mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-red transition resize-none"
                required
              ></textarea>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-brand-red to-red-600 text-white font-semibold hover:shadow-lg transition"
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
          className="mt-12 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.124!2d72.8239!3d21.1769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f41e3c1!2sModheshwari%20Travels!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
