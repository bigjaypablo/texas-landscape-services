import React, { useState } from 'react'
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // Generate gallery images from 1 to 14
  const galleryImages = Array.from({ length: 14 }, (_, i) => {
    const num = i + 1
    const categories = ['Commercial', 'Residential', 'Renovation', 'Maintenance', 'Commercial', 'Residential', 'Renovation', 'Maintenance', 'Commercial', 'Residential', 'Renovation', 'Maintenance', 'Commercial', 'Residential']
    const titles = [
      'Commercial Property Landscape',
      'Residential Estate Garden',
      'Landscape Renovation Project',
      'Professional Maintenance Service',
      'Corporate Campus Grounds',
      'Luxury Home Landscaping',
      'Complete Landscape Makeover',
      'Seasonal Cleanup Service',
      'Commercial Property Care',
      'Estate Landscape Design',
      'Hardscape Renovation',
      'Irrigation System Installation',
      'Commercial Grounds Maintenance',
      'Residential Property Management'
    ]
    return {
      id: num,
      title: titles[i],
      category: categories[i],
      image: `/gallery-images/Gallery${num}.jpg`
    }
  })

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[30vh] md:min-h-[35vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url("/LandscapingServices.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container-premium relative z-10 text-white py-16 md:py-20">
          <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">Portfolio</span>
          <h1 className="heading-lg font-display mt-2">Our Work</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
            A showcase of professional landscape management across commercial and residential properties 
            throughout North Dallas–Fort Worth.
          </p>
        </div>
      </div>

      {/* Gallery Grid - Clean Masonry Style */}
      <section className="section-padding bg-garden-cream">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div className="text-white w-full">
                    <h3 className="font-display text-sm md:text-base">{image.title}</h3>
                    <p className="text-xs text-white/70 mt-0.5">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full text-white text-[10px]">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary inline-flex items-center space-x-2 px-8 py-3">
              <span>Ready to Transform Your Property?</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <X size={32} />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full max-h-[80vh] relative">
            <div className="relative overflow-hidden rounded-lg bg-black">
              <img
                src={galleryImages[currentImage].image}
                alt={galleryImages[currentImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-display text-xl">
                  {galleryImages[currentImage].title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {galleryImages[currentImage].category}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-white/40">
                    {currentImage + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-garden-green text-white py-16">
        <div className="container-premium text-center">
          <h2 className="heading-md font-display">Have a Project in Mind?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Let's discuss how we can transform your landscape. Contact us for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </a>
            <a href="tel:4694559733" className="btn-secondary border-white text-white hover:bg-white hover:text-garden-green inline-flex items-center justify-center space-x-2 px-8 py-4">
              Call 469-455-9733
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallery
