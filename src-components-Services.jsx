import { motion } from 'framer-motion'
import { FiAirplane, FiTruck, FiUsers, FiClock, FiShield, FiSmile } from 'react-icons/fi'

const services = [
  {
    icon: FiAirplane,
    title: 'Airport Transfers',
    description: 'Direct pickups & drop-offs at Bombay Airport with on-time guarantee',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FiTruck,
    title: 'Car & Taxi Rental',
    description: 'A.C. and Non-A.C. vehicles for daily rentals and long journeys',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FiUsers,
    title: 'Group Travel',
    description: 'Buses and Tempo Travellers for corporate events and group tours',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FiClock,
    title: '24/7 Service',
    description: 'Round-the-clock availability for your travel needs',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: FiShield,
    title: 'Safe & Reliable',
    description: 'Professional drivers and well-maintained vehicles for your safety',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: FiSmile,
    title: 'Best Prices',
    description: 'Competitive rates without compromising on quality and comfort',
    color: 'from-pink-500 to-pink-600'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl font-bold text-brand-red mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-8 hover:shadow-xl transition group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brand-red mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
