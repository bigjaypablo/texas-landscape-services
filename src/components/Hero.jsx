import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Phone, Play, Pause } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('opacity-100', 'translate-y-0')
              el.classList.remove('opacity-0', 'translate-y-8')
            }, i * 200)
          })
        }
      })
    }, { threshold: 0.1 })
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch(() => {})
    }
  }, [isVideoLoaded])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover object-center" muted loop playsInline autoPlay preload="auto" onLoadedData={() => setIsVideoLoaded(true)}>
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Header overlay - only affects the top portion for logo visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        {/* Subtle gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      <button onClick={toggleVideo} className="absolute bottom-24 right-4 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-full shadow-2xl hover:scale-105">
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>

      <div className="container-premium relative z-10 py-12 sm:py-16">
        <div className="max-w-2xl">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 border border-garden-gold-300/30 text-garden-gold-300 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-body backdrop-blur-sm bg-black/20">North Dallas–Fort Worth</span>
          </div>
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-4 sm:mt-6">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal leading-[1.1] drop-shadow-2xl text-white">Professional Landscape Management</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light italic mt-2 sm:mt-3 drop-shadow-xl text-garden-gold-300/90">for North Texas Properties</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-gray-200/90 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-lg leading-relaxed font-body drop-shadow-xl">Serving commercial properties, residential estates, and HOAs across Frisco, Plano, McKinney, Denton, and beyond.</p>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="/contact" className="btn-primary group bg-white text-garden-green hover:bg-garden-cream shadow-2xl text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">Book Your Service Today <ArrowRight size={16} className="ml-2 inline" /></a>
            <a href="/services" className="btn-secondary border-white/60 text-white hover:bg-white hover:text-garden-green backdrop-blur-md bg-black/20 border-2 shadow-xl text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">Explore Services</a>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center space-x-2 backdrop-blur-md bg-black/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/5"><Phone size={14} className="text-garden-gold-300" /><a href="tel:4694559733" className="hover:text-white transition-colors">469-455-9733</a></span>
            <span className="backdrop-blur-md bg-black/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/5">info@txlandscapeservices.com</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block z-10">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm bg-black/10"><div className="w-1 h-2.5 bg-white/30 rounded-full mt-2 animate-bounce" /></div>
      </div>
    </section>
  )
}

export default Hero
