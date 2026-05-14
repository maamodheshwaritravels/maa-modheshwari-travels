import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

// Dynamically import all vehicle images from assets/vehicles folder
// This will automatically include ANY new images added to the folder
const imageModules = import.meta.glob('../assets/vehicles/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true })

// Convert modules to array of image URLs
const allImages = Object.values(imageModules).map((module) => module.default).sort()

export default function VehicleGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(allImages[index])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(allImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % allImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(allImages[newIndex])
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red mb-3 sm:mb-4">Our Fleet Gallery</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Explore our luxury vehicles collection</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-40 sm:h-48"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Vehicle ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-semibold">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-3xl w-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-brand-red hover:bg-red-600 text-white p-2 rounded-full z-10"
              >
                <FiX size={24} />
              </button>

              {/* Image */}
              <div className="flex-1 bg-black rounded-t-lg sm:rounded-t-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt={`Vehicle ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-b-lg flex items-center justify-between">
                <button
                  onClick={goToPrevious}
                  className="p-2 hover:bg-gray-800 rounded transition"
                >
                  <FiChevronLeft size={24} />
                </button>

                <div className="text-xs sm:text-sm">
                  {currentIndex + 1} / {allImages.length}
                </div>

                <button
                  onClick={goToNext}
                  className="p-2 hover:bg-gray-800 rounded transition"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
