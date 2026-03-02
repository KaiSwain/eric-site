import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/images/IMG_7246 (1).jpeg', alt: '' },
    { src: '/images/Eich%20and%20Kevin%20Sorbo%20(1).jpeg', alt: '' },
    { src: '/images/IMG_7193%20(1).jpeg', alt: '' },
    { src: '/images/Eich%20and%20DQuaid.jpeg', alt: '' },
    { src: '/images/unnamed-6.jpg', alt: '' },
   // { src: '/images/unnamed.jpg', alt: 'Eric Eichinger' },
    { src: '/images/unnamed2.jpg', alt: '' },
    { src: '/images/unnamed%203.jpg', alt: '' },
    { src: '/images/unnamed%204.jpg', alt: '' },
    { src: '/images/unnamed%205.jpg', alt: '' },
    { src: '/images/Dennis-Quaid-2.jpg', alt: '' },
    { src: '/images/FullSizeR.jpg', alt: '' },
    { src: '/images/Howie-Klausner.jpg', alt: '' },
    { src: '/images/IMG_4543.jpg', alt: '' },
    { src: '/images/IMG_4549.jpg', alt: '' },
    { src: '/images/IMG_7282.jpg', alt: '' },
    { src: '/images/eandk%20pic.jpg', alt: '' },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">Gallery</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Behind the Scenes
          </h2>
          <div className="divider-red w-24 mx-auto"></div>
        </div>

        {/* Photo Grid - Flexbox ordered */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden group rounded-lg w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/spartanfaith152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-red-800/50 text-neutral-400 hover:text-red-400 text-sm font-medium tracking-wide transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            FOLLOW ON INSTAGRAM
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
