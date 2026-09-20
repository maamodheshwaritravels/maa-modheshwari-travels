import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

// Dynamically import all vehicle images from assets/vehicles folder
const imageModules = import.meta.glob('../assets/vehicles/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true })

// Image metadata map: filename -> { category, label }
const imageMetadata = {
  '1.jpeg': { category: 'Cars', label: 'Luxury Sedan – AC' },
  '2.jpeg': { category: 'Cars', label: 'Innova Crysta – 7 Seater' },
  '3.jpeg': { category: 'Cars', label: 'Premium SUV – AC' },
  '4.jpeg': { category: 'Cars', label: 'Comfort Sedan – AC' },
  'tempo01.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – 17 Seater' },
  'tempo02.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Interior' },
  'tempo03.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – 12 Seater' },
  'tempo04.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Exterior' },
  'tempo05.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Side View' },
  'tempo06.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – AC' },
  'tempo07.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Deluxe' },
  'tempo08.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Standard' },
  'tempo09.jpg': { category: 'Bus', label: 'Mini Bus – 20 Seater' },
  'tempo10.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Compact' },
  'tempo11.jpg': { category: 'Bus', label: 'Luxury Bus – 35 Seater' },
  'tempo12.jpg': { category: 'Bus', label: 'Tourist Bus – 45 Seater' },
  'tempo13.jpg': { category: 'Bus', label: 'AC Bus – Interior' },
  'tempo14.jpg': { category: 'Bus', label: 'Coach Bus – Premium' },
  'tempo15.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Premium' },
  'tempo16.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Fleet' },
  'tempo17.jpg': { category: 'Bus', label: 'Bus – Exterior View' },
  'tempo18.jpg': { category: 'Tempo Traveller', label: 'Tempo Traveller – Group' },
}

// Duplicates to exclude (Issue #15): tempo19 ≈ tempo16, tempo20 ≈ tempo15
const duplicateFiles = ['tempo19.jpg', 'tempo20.jpg']

// Build image array with metadata, excluding duplicates
const allImages = Object.entries(imageModules)
  .map(([path, module]) => {
    const filename = path.split('/').pop()
    if (duplicateFiles.includes(filename)) return null
    const meta = imageMetadata[filename] || { category: 'Other', label: `Vehicle` }
    return { src: module.default, filename, ...meta }
  })
  .filter(Boolean)
  .sort((a, b) => a.filename.localeCompare(b.filename))

// Extract unique categories
const categories = ['All', ...new Set(allImages.map(img => img.category))]

const INITIAL_SHOW_COUNT = 8

export default function VehicleGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredImages = activeCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category === activeCategory)

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_SHOW_COUNT)
  const hasMore = filteredImages.length > INITIAL_SHOW_COUNT && !showAll

  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(filteredImages[index])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setShowAll(false)
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
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">Explore our luxury vehicles collection</p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.filename}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-40 sm:h-48"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(filteredImages.indexOf(image))}
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover group-hover:brightness-75 transition"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 sm:px-3 sm:py-3">
                <p className="text-white text-xs sm:text-sm font-medium truncate">{image.label}</p>
                <p className="text-white/70 text-[10px] sm:text-xs">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-lg bg-brand-red text-white font-semibold hover:shadow-lg transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All {filteredImages.length} Vehicles
            </motion.button>
          </div>
        )}

        {showAll && filteredImages.length > INITIAL_SHOW_COUNT && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(false)}
              className="text-brand-red font-semibold text-sm hover:underline transition"
            >
              Show Less
            </button>
          </div>
        )}

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
              <div className="flex-1 bg-black rounded-t-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation & Caption */}
              <div className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-b-lg flex items-center justify-between">
                <button
                  onClick={goToPrevious}
                  className="p-2 hover:bg-gray-800 rounded transition"
                >
                  <FiChevronLeft size={24} />
                </button>

                <div className="text-center">
                  <p className="text-sm sm:text-base font-medium">{selectedImage.label}</p>
                  <p className="text-xs text-gray-400">{currentIndex + 1} / {filteredImages.length}</p>
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