import { motion } from 'framer-motion'
import { FiUsers } from 'react-icons/fi'
import img1 from '../assets/vehicles/1.jpeg'
import img2 from '../assets/vehicles/2.jpeg'
import img3 from '../assets/vehicles/3.jpeg'
import img4 from '../assets/vehicles/4.jpeg'

const vehicles = [
  {
    name: 'Sedan (A.C.)',
    capacity: '4-5',
    features: ['Luxury A.C.', 'GPS Tracking', 'Premium Seats'],
    ideal: 'Airport Transfers, City Tours',
    image: img1
  },
  {
    name: 'Innova (A.C.)',
    capacity: '6-7',
    features: ['Spacious', 'Climate Control', 'Luggage Space'],
    ideal: 'Family Trips, Airport Transfers',
    image: img2
  },
  {
    name: 'Tempo Traveller',
    capacity: '13-17',
    features: ['Group Travel', 'A.C./Non-A.C.', 'Comfortable Seats'],
    ideal: 'Group Tours, Corporate Events',
    image: img3
  },
  {
    name: 'Bus',
    capacity: '30-45',
    features: ['Large Capacity', 'Reclining Seats', 'Entertainment'],
    ideal: 'Large Groups, Holiday Packages',
    image: img4
  }
]

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-3 sm:mb-4">Our Fleet</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Well-maintained vehicles for every travel need</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {vehicles.map((vehicle, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-lg sm:rounded-2xl overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Vehicle Image */}
              <div className="h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-200">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Vehicle Info */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-brand-red mb-2 sm:mb-3">{vehicle.name}</h3>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <FiUsers className="text-brand-gold flex-shrink-0" size={16} />
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">{vehicle.capacity} Seater</span>
                </div>
                <div className="space-y-1 mb-3 sm:mb-4 text-left">
                  {vehicle.features.map((feature, i) => (
                    <p key={i} className="text-xs sm:text-sm text-gray-600">✓ {feature}</p>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-gold font-semibold break-words">{vehicle.ideal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
