import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  ChevronDown, 
  Building2, 
  Home, 
  RefreshCw, 
  Droplets, 
  SprayCan, 
  Scissors,
  Check,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const location = useLocation()
  const [openService, setOpenService] = useState(null)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const index = services.findIndex(s => s.id === id)
      if (index !== -1) {
        setOpenService(index)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            })
          }
        }, 300)
      }
    }
  }, [location])

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index)
  }

  const services = [
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial Landscape Management',
      tag: 'Commercial',
      image: '/services-images/CommercialLandscapeManagement.jpg',
      description: 'Professional grounds management for commercial properties across North Texas.',
      fullDescription: `Texas Landscape Services provides comprehensive commercial landscape management designed to protect your property investment and create a professional, welcoming environment for tenants, visitors, and stakeholders.

Our commercial services include:
• Complete grounds maintenance and turf management
• Seasonal color rotations and plant care
• Hardscape maintenance and pressure washing
• Irrigation system management and repairs
• Snow and ice management (seasonal)
• Property cleanup and debris removal

We serve property management companies, healthcare facilities, building owners, developers, HOAs, and commercial property owners across the North Dallas-Fort Worth metropolitan area.

Our commercial landscape management programs are customized to meet your specific property needs, budget requirements, and aesthetic goals.`,
      benefits: [
        'Enhances property value and curb appeal',
        'Reduces liability with professional maintenance',
        'Creates positive first impressions',
        'Extends life of landscape investments',
        'Improves tenant satisfaction and retention'
      ],
      keywords: 'commercial landscape management North Texas, commercial grounds maintenance, property management landscaping, HOA landscaping, healthcare facility landscaping'
    },
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Estate Management',
      tag: 'Residential',
      image: '/services-images/ResidentialEstateManagement.jpg',
      description: 'Premium landscape care for high-value residential estates.',
      fullDescription: `Texas Landscape Services delivers premium residential estate management that preserves and enhances the beauty, health, and value of your property.

Our residential services include:
• Customized landscape maintenance programs
• Lawn care and turf management
• Plant health care and disease management
• Irrigation system design and management
• Seasonal color and annual plantings
• Hardscape cleaning and maintenance
• Landscape renovations and enhancements

We understand that your home is your sanctuary. Our horticultural expertise ensures your landscape remains healthy, beautiful, and well-maintained throughout every season.

Whether you own a sprawling estate or a fine residential property, we create customized programs that reflect your personal style while protecting your investment.`,
      benefits: [
        'Preserves and increases property value',
        'Enhances curb appeal and enjoyment',
        'Expert plant health and disease management',
        'Water-efficient irrigation solutions',
        'Year-round professional care and attention'
      ],
      keywords: 'residential landscape management, estate landscaping, luxury landscaping, residential property maintenance, landscape care'
    },
    {
      id: 'renovation',
      icon: RefreshCw,
      title: 'Landscape Renovation',
      tag: 'Renovation',
      image: '/services-images/LandscapeRenovation.jpg',
      description: 'Transform existing landscapes with updated design and functionality.',
      fullDescription: `Landscape renovation is an investment in your property's future. Texas Landscape Services transforms tired, outdated, or underperforming landscapes into vibrant, functional outdoor spaces.

Our renovation services include:
• Comprehensive landscape assessment and planning
• Design collaboration with architects and designers
• Hardscape installation and updates
• Plant removal, replacement, and addition
• Irrigation system upgrades
• Soil improvement and drainage solutions
• Complete landscape makeovers

We collaborate with designers, architects, engineers, and contractors to ensure your renovation project meets your vision while preserving the value of your existing investment.

Whether you're updating a commercial property or revitalizing a residential estate, our renovation services deliver dramatic, lasting results.`,
      benefits: [
        'Updates outdated landscapes',
        'Improves property functionality',
        'Increases property value',
        'Enhances curb appeal dramatically',
        'Preserves existing investment value'
      ],
      keywords: 'landscape renovation, landscape makeover, commercial landscape renovation, residential landscape renovation, hardscape installation'
    },
    {
      id: 'water',
      icon: Droplets,
      title: 'Water Management',
      tag: 'Water',
      image: '/services-images/WaterManagement.jpg',
      description: 'Smart irrigation solutions balancing health, aesthetics, and conservation.',
      fullDescription: `Texas Landscape Services provides comprehensive water management solutions that balance landscape health, aesthetic beauty, and responsible resource conservation.

Our water management services include:
• Custom irrigation system design and installation
• Smart irrigation controller programming
• System audits and efficiency assessments
• Drip irrigation and water-efficient solutions
• Rain sensor installation and calibration
• Irrigation repairs and maintenance
• Water conservation consulting

We understand that water is a precious resource in Texas. Our water management programs ensure your landscape receives the optimal amount of water while minimizing waste and reducing costs.

Smart irrigation technology, combined with our horticultural expertise, ensures your landscape thrives while you conserve water and protect the environment.`,
      benefits: [
        'Reduces water waste and utility costs',
        'Maintains optimal plant health',
        'Complies with local watering restrictions',
        'Extends life of landscape investments',
        'Environmentally responsible management'
      ],
      keywords: 'water management, irrigation systems, smart irrigation, landscape water conservation, drip irrigation'
    },
    {
      id: 'pressure',
      icon: SprayCan,
      title: 'Pressure Washing',
      tag: 'Cleaning',
      image: '/services-images/PressureWashing.jpg',
      description: 'Commercial and residential pressure washing using environmentally safe products.',
      fullDescription: `Texas Landscape Services provides professional pressure washing services that restore the beauty and cleanliness of your commercial and residential properties.

Our pressure washing services include:
• Building and structure cleaning
• Parking lot and driveway cleaning
• Sidewalk and walkway cleaning
• Commercial pool decks
• Apartment and condo complexes
• Hotel and restaurant properties
• Fuel stations and retail properties
• Residential patios and driveways

We use environmentally safe cleaning products that are designed not to harm surrounding grass, plants, or trees. Our experienced team ensures thorough cleaning without damaging surfaces.

A clean property creates a positive impression for visitors, customers, and tenants while protecting your investment from deterioration caused by dirt, mold, and mildew.`,
      benefits: [
        'Restores property appearance',
        'Prevents surface deterioration',
        'Eco-friendly cleaning solutions',
        'Safe for surrounding vegetation',
        'Enhances property value'
      ],
      keywords: 'pressure washing, commercial pressure washing, residential pressure washing, property cleaning, exterior cleaning'
    },
    {
      id: 'maintenance',
      icon: Scissors,
      title: 'Maintenance & Cleanup',
      tag: 'Maintenance',
      image: '/services-images/Maintenance&Cleanup.jpg',
      description: 'Comprehensive property care for year-round landscape health and beauty.',
      fullDescription: `Texas Landscape Services provides comprehensive maintenance and cleanup services that keep your property looking its best throughout the year.

Our maintenance services include:
• Regular lawn mowing and edging
• Pruning and trimming of trees and shrubs
• Weed control and prevention
• Mulching and soil amendments
• Seasonal color rotations
• Leaf removal and cleanup
• Debris removal and hauling
• Storm damage cleanup

A well-maintained landscape not only looks beautiful but also protects your property investment and enhances its long-term value.

Our maintenance programs are customized to meet your specific property needs, whether you require weekly service or seasonal cleanup. We ensure your landscape remains healthy, attractive, and well-maintained throughout every season.`,
      benefits: [
        'Maintains property appearance year-round',
        'Prevents costly landscape problems',
        'Extends plant life and health',
        'Protects property investment',
        'Increases curb appeal'
      ],
      keywords: 'landscape maintenance, lawn care, property cleanup, seasonal landscaping, grounds maintenance'
    }
  ]

  return (
    <main className="pt-16 md:pt-20">
      {/* Page Header with Background Image */}
      <div className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url("/LandscapingServices.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container-premium relative z-10 text-white py-16 md:py-20">
          <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">Our Services</span>
          <h1 className="heading-lg font-display mt-2">Comprehensive Landscape Solutions</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
            Professional landscape management services designed to protect your property investment 
            and enhance its beauty, functionality, and long-term value.
          </p>
        </div>
      </div>

      {/* Services Accordion */}
      <section className="section-padding bg-garden-cream">
        <div className="container-premium max-w-5xl">
          {services.map((service, index) => {
            const Icon = service.icon
            const isOpen = openService === index

            return (
              <div 
                key={service.id}
                id={service.id}
                className="mb-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-garden-border/30"
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(index)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-garden-green/5 transition-colors duration-200 group"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-xl ${isOpen ? 'bg-garden-green text-white' : 'bg-garden-green-pale text-garden-green'} transition-colors duration-300 flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2">
                        <h2 className="text-xl md:text-2xl font-display text-garden-dark group-hover:text-garden-green transition-colors">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-garden-stone text-sm md:text-base mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className="text-garden-stone group-hover:text-garden-green" />
                  </div>
                </button>

                {/* Service Content - Expandable */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[2800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-garden-border/30">
                    {/* Image */}
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>

                    {/* Full Description */}
                    <div className="prose prose-garden max-w-none text-garden-stone leading-relaxed whitespace-pre-line">
                      {service.fullDescription}
                    </div>

                    {/* Benefits */}
                    <div className="mt-6">
                      <h4 className="font-display text-lg text-garden-dark mb-3">Key Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-garden-stone">
                            <Check size={16} className="text-garden-green flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-garden-border/30 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-sm text-garden-stone">
                        <strong className="text-garden-dark">Service Areas:</strong> Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina
                      </span>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center space-x-2 text-garden-green font-medium hover:text-garden-green-dark transition-colors group"
                      >
                        <span>Request a Consultation</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-garden-green text-white py-16">
        <div className="container-premium text-center">
          <h2 className="heading-md font-display">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Contact us today for a consultation and discover how professional landscape management 
            can protect and enhance your property investment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <span>Request a Consultation</span>
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

export default Services
