import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/images/unnamed-6.jpg', alt: 'Eric with Jon Voight' },
    { src: '/images/unnamed.jpg', alt: 'Eric Eichinger' },
    { src: '/images/unnamed%201.jpg', alt: 'Eric with Reagan film cast' },
    { src: '/images/unnamed2.jpg', alt: 'Eric Eichinger' },
    { src: '/images/unnamed%203.jpg', alt: 'Eric at event' },
    { src: '/images/unnamed%204.jpg', alt: 'Eric speaking' },
    { src: '/images/unnamed%205.jpg', alt: 'Eric at premiere' },
    { src: '/images/Dennis-Quaid-2.jpg', alt: 'Eric with Dennis Quaid' },
    { src: '/images/FullSizeR.jpg', alt: 'Eric with Jon Voight' },
    { src: '/images/Howie-Klausner.jpg', alt: 'Eric with Howie Klausner' },
    { src: '/images/IMG_4543.jpg', alt: 'Eric and guests at event' },
    { src: '/images/IMG_4549.jpg', alt: 'Hollywood sign photo at event venue' },
    { src: '/images/IMG_7282.jpg', alt: 'Eric with actor at premiere event' },
    { src: '/images/Jon-Voight.jpg', alt: 'Eric with Jon Voight portrait' },
    { src: '/images/eandk%20pic.jpg', alt: 'Eric and his wife on the red carpet' },
  ]

  return (
    <section id="gallery" className="py-32 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-amber-700 font-medium tracking-widest text-sm mb-4">GALLERY</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Recent Moments
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        {/* Photo Grid - Natural aspect ratios */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden group w-full block break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/spartanfaith152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-stone-300 text-stone-600 hover:border-amber-700 hover:text-amber-700 text-sm font-medium tracking-wide transition-colors"
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
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
