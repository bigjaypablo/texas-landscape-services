import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.service-item').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('opacity-100', 'translate-y-0')
              el.classList.remove('opacity-0', 'translate-y-8')
            }, i * 150)
          })
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: 1,
      title: 'Commercial Landscape Management',
      description: 'Professional grounds management for property management companies, healthcare facilities, building owners, and developers across North Texas.',
      image: '/services-images/CommercialLandscapeManagement.jpg',
      tag: 'Commercial',
      anchor: 'commercial'
    },
    {
      id: 2,
      title: 'Residential Estate Management',
      description: 'Premium landscape care for high-value residential estates, focusing on long-term health, aesthetic excellence, and property value preservation.',
      image: '/services-images/ResidentialEstateManagement.jpg',
      tag: 'Residential',
      anchor: 'residential'
    },
    {
      id: 3,
      title: 'Landscape Renovation',
      description: 'Transform existing landscapes with updated design, improved functionality, and preserved investment value through professional renovation.',
      image: '/services-images/LandscapeRenovation.jpg',
      tag: 'Renovation',
      anchor: 'renovation'
    },
    {
      id: 4,
      title: 'Water Management',
      description: 'Smart irrigation solutions balancing landscape health, aesthetics, and resource conservation through efficient water management practices.',
      image: '/services-images/WaterManagement.jpg',
      tag: 'Water',
      anchor: 'water'
    },
    {
      id: 5,
      title: 'Pressure Washing',
      description: 'Commercial and residential pressure washing using environmentally safe products that protect surrounding grass, plants, and trees.',
      image: '/services-images/PressureWashing.jpg',
      tag: 'Cleaning',
      anchor: 'pressure'
    },
    {
      id: 6,
      title: 'Maintenance & Cleanup',
      description: 'Comprehensive property care including regular maintenance, seasonal cleanup, and ongoing landscape health management year-round.',
      image: '/services-images/Maintenance&Cleanup.jpg',
      tag: 'Maintenance',
      anchor: 'maintenance'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-garden-cream">
      <div className="container-premium">
        <div className="max-w-3xl mb-12">
          <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Our Services</span>
          <h2 className="heading-md font-display text-garden-dark mt-2">Explore our wide range of services</h2>
          <p className="text-garden-stone text-base mt-4 leading-relaxed">From commercial properties to residential estates, we provide professional landscape management across the entire North Dallas–Fort Worth region.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-item opacity-0 translate-y-8 transition-all duration-700 group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="relative overflow-hidden h-48 sm:h-56 bg-garden-green-pale">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-garden-green text-xs font-medium px-3 py-1 uppercase tracking-wider">{service.tag}</span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display text-garden-dark group-hover:text-garden-green transition-colors duration-300">{service.title}</h3>
                <p className="text-garden-stone text-sm mt-2 leading-relaxed">{service.description}</p>
                <Link 
                  to={`/services#${service.anchor}`} 
                  className="mt-4 flex items-center text-sm font-body text-garden-green group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center space-x-2 px-8 py-3">View All Services <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}

export default Services
