import React from 'react'
import { Shield, Users, Leaf, Recycle } from 'lucide-react'
import { Link } from 'react-router-dom'

const WhyTLS = () => {
  const pillars = [
    { icon: Shield, label: 'Customized Landscape Programs', desc: 'Tailored solutions designed around your property needs and budget.' },
    { icon: Users, label: 'Commercial & Residential Expertise', desc: 'Decades of experience across both commercial and residential properties.' },
    { icon: Leaf, label: 'Horticultural Knowledge', desc: 'Expert plant selection, color theory, and landscape performance.' },
    { icon: Recycle, label: 'Water-Conscious Management', desc: 'Smart irrigation and sustainable practices for resource conservation.' },
  ]

  return (
    <section className="section-padding bg-garden-warm">
      <div className="container-premium">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Why Texas Landscape Services</span>
          <h2 className="heading-md font-display text-garden-dark mt-2">Professional Landscape Management</h2>
          <p className="text-garden-stone text-base mt-4 leading-relaxed">
            We provide professional landscape management that protects your property investment and enhances its long-term value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
                <div className="p-3 bg-garden-green-pale rounded-lg flex-shrink-0">
                  <Icon size={22} className="text-garden-green" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-garden-dark">{pillar.label}</h4>
                  <p className="text-garden-stone text-sm mt-1 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2 px-8 py-3">Start a Conversation</Link>
        </div>
      </div>
    </section>
  )
}

export default WhyTLS
