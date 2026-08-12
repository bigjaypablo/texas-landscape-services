import React, { useEffect, useRef } from 'react'
import { Star, Users, Building2, Award, Clock, ExternalLink } from 'lucide-react'

const TrustSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.trust-item').forEach((el, i) => {
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

  const stats = [
    { icon: Star, number: '5.0', label: 'Average Rating', sub: 'Based on real Google reviews' },
    { icon: Users, number: '100+', label: 'Happy Clients', sub: 'Across North Texas' },
    { icon: Building2, number: '50+', label: 'Commercial Properties', sub: 'Managed & Maintained' },
    { icon: Award, number: '5+', label: 'Years of Excellence', sub: 'Serving the community' },
  ]

  const reviews = [
    {
      name: 'Gary Moore',
      role: 'Homeowner',
      location: 'North Texas',
      rating: 5,
      text: 'Kevin, Keith and their crew did an outstanding job on our landscaping. They went over and above what we were expecting. They did such a phenomenal job that my sister and mother are having work done at their homes. If you go with Texas Landscape Services, I promise you will not be disappointed.',
      image: null
    },
    {
      name: 'Lady Chassagne',
      role: 'Local Guide',
      location: 'North Texas',
      rating: 5,
      text: 'Despite being SWAMPED with work, Kevin took the time to listen to my concerns and answer ALL my many questions! I was treated like a million dollar client. Their extensive knowledge and commitment to quality and excellence proves that the TLS approach—SERVICE, CREATIVITY, TEAMWORK, RESULTS—genuinely works.',
      image: null
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-premium">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="trust-item opacity-0 translate-y-8 transition-all duration-700 text-center p-6 bg-garden-cream rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-garden-green/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-garden-green" />
                </div>
                <p className="text-3xl font-display text-garden-dark">{stat.number}</p>
                <p className="text-sm font-medium text-garden-dark">{stat.label}</p>
                <p className="text-xs text-garden-stone mt-0.5">{stat.sub}</p>
              </div>
            )
          })}
        </div>

        {/* Reviews */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Testimonials</span>
          <h2 className="heading-md font-display text-garden-dark mt-2">What Our Clients Say</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-garden-gold-300 text-garden-gold-300" />
              ))}
            </div>
            <span className="ml-3 text-garden-stone text-sm">5.0 out of 5 stars • Based on Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="trust-item opacity-0 translate-y-8 transition-all duration-700 bg-garden-cream p-6 md:p-8 rounded-2xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-garden-gold-300 text-garden-gold-300" />
                ))}
              </div>
              <p className="text-garden-stone text-sm md:text-base leading-relaxed">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-garden-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-garden-green/20 flex items-center justify-center text-garden-green font-medium text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-garden-dark">{review.name}</p>
                    <p className="text-xs text-garden-stone">{review.role} • {review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews CTA */}
        <div className="text-center mt-10">
          <a 
            href="https://maps.app.goo.gl/t7uThgRenXYNaapM8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 text-garden-green hover:text-garden-green-dark transition-colors font-medium group"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-3 flex items-center justify-center space-x-1">
            <span className="text-xs text-garden-stone">Want to leave a review?</span>
            <a 
              href="https://maps.app.goo.gl/t7uThgRenXYNaapM8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-garden-green hover:underline"
            >
              Share your experience →
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-garden-border">
          <div className="flex items-center space-x-2 text-sm text-garden-stone">
            <Clock size={16} className="text-garden-green" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-garden-stone">
            <Award size={16} className="text-garden-green" />
            <span>Certified Professionals</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-garden-stone">
            <Users size={16} className="text-garden-green" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-garden-stone">
            <Building2 size={16} className="text-garden-green" />
            <span>Commercial & Residential</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
