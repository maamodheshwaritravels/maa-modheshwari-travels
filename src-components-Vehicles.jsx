import { motion } from 'framer-motion'
import { FiUsers } from 'react-icons/fi'

const vehicles = [
  {
    name: 'Sedan (A.C.)',
    capacity: '4-5',
    features: ['Luxury A.C.', 'GPS Tracking', 'Premium Seats'],
    ideal: 'Airport Transfers, City Tours',
    emoji: '🚗'
  },
  {
    name: 'Innova (A.C.)',
    capacity: '6-7',
    features: ['Spacious', 'Climate Control', 'Luggage Space'],
    ideal: 'Family Trips, Airport Transfers',
    emoji: '🚙'
  },
  {
    name: 'Tempo Traveller',
    capacity: '13-17',
    features: ['Group Travel', 'A.C./Non-A.C.', 'Comfortable Seats'],
    ideal: 'Group Tours, Corporate Events',
    emoji: '🚐'
  },
  {
    name: 'Bus',
    capacity: '30-45',
    features: ['Large Capacity', 'Reclining Seats', 'Entertainment'],
    ideal: 'Large Groups, Holiday Packages',
    emoji: '🚌'
  }
]

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl font-bold text-brand-red mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-600">Well-maintained vehicles for every travel need</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-6 text-center hover:shadow-2xl transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition">{vehicle.emoji}</div>
              <h3 className="font-semibold text-xl text-brand-red mb-3">{vehicle.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <FiUsers className="text-brand-gold" />
                <span className="text-gray-700 font-medium">{vehicle.capacity} Seater</span>
              </div>
              <div className="space-y-2 mb-4">
                {vehicle.features.map((feature, i) => (
                  <p key={i} className="text-sm text-gray-600">✓ {feature}</p>
                ))}
              </div>
              <p className="text-xs text-brand-gold font-semibold">{vehicle.ideal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
