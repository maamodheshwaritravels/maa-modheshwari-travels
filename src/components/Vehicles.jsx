import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiUsers, FiChevronLeft, FiChevronRight, FiX, FiImage } from 'react-icons/fi'
import img1 from '../assets/vehicles/1.jpeg'
import img2 from '../assets/vehicles/2.jpeg'
import img3 from '../assets/vehicles/3.jpeg'
import img4 from '../assets/vehicles/4.jpeg'

// Additional gallery images per category
import tempo01 from '../assets/vehicles/tempo01.jpg'
import tempo02 from '../assets/vehicles/tempo02.jpg'
import tempo03 from '../assets/vehicles/tempo03.jpg'
import tempo04 from '../assets/vehicles/tempo04.jpg'
import tempo05 from '../assets/vehicles/tempo05.jpg'
import tempo09 from '../assets/vehicles/tempo09.jpg'
import tempo11 from '../assets/vehicles/tempo11.jpg'
import tempo12 from '../assets/vehicles/tempo12.jpg'
import tempo13 from '../assets/vehicles/tempo13.jpg'

const vehicles = [
  {
    name: 'Sedan (A.C.)',
    capacity: '4-5',
    features: ['Luxury A.C.', 'GPS Tracking', 'Premium Seats'],
    ideal: 'Airport Transfers, City Tours',
    image: img1,
    gallery: [img1, img2]
  },
  {
    name: 'Innova (A.C.)',
    capacity: '6-7',
    features: ['Spacious', 'Climate Control', 'Luggage Space'],
    ideal: 'Family Trips, Airport Transfers',
    image: img2,
    gallery: [img2, img3]
  },
  {
    name: 'Tempo Traveller',
    capacity: '13-17',
    features: ['Group Travel', 'A.C./Non-A.C.', 'Comfortable Seats'],
    ideal: 'Group Tours, Corporate Events',
    image: img3,
    gallery: [img3, tempo01, tempo02, tempo03, tempo04, tempo05]
  },
  {
    name: 'Bus',
    capacity: '30-45',
    features: ['Large Capacity', 'Reclining Seats', 'Entertainment'],
    ideal: 'Large Groups, Holiday Packages',
    image: img4,
    gallery: [img4, tempo09, tempo11, tempo12, tempo13]
  }
]

export default function Vehicles() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryTitle, setGalleryTitle] = useState('')

  const openGallery = (vehicle) => {
    setGalleryImages(vehicle.gallery)
    setGalleryIndex(0)
    setGalleryTitle(vehicle.name)
    setGalleryOpen(true)
  }

  const closeGallery = () => setGalleryOpen(false)

  const goToPrevious = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNext = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

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
              className="glass rounded-lg sm:rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col"
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
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
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
                <p className="text-xs sm:text-sm text-brand-gold font-semibold break-words mb-3">{vehicle.ideal}</p>
                
                {/* View Gallery Button */}
                <button
                  onClick={() => openGallery(vehicle)}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-brand-red hover:text-brand-red transition text-xs sm:text-sm font-medium"
                >
                  <FiImage size={14} />
                  View Gallery ({vehicle.gallery.length} photos)
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {galleryOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGallery}
        >
          <motion.div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-brand-red hover:bg-red-600 text-white p-2 rounded-full z-10"
            >
              <FiX size={24} />
            </button>

            <div className="flex-1 bg-black rounded-t-lg overflow-hidden">
              <img
                src={galleryImages[galleryIndex]}
                alt={`${galleryTitle} - Photo ${galleryIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-b-lg flex items-center justify-between">
              <button onClick={goToPrevious} className="p-2 hover:bg-gray-800 rounded transition">
                <FiChevronLeft size={24} />
              </button>
              <div className="text-center">
                <p className="text-sm sm:text-base font-medium">{galleryTitle}</p>
                <p className="text-xs text-gray-400">{galleryIndex + 1} / {galleryImages.length}</p>
              </div>
              <button onClick={goToNext} className="p-2 hover:bg-gray-800 rounded transition">
                <FiChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}