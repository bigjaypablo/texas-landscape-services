import React from 'react'
import { Phone, Mail, ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-garden-green text-white">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md font-display">Let's Take Care of Your Landscape</h2>
          <p className="text-white/80 text-base mt-4 leading-relaxed">
            Contact us today for a consultation and discover how professional landscape management can protect and enhance your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="mailto:info@txlandscapeservices.com" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <span>Request a Consultation</span>
              <ArrowRight size={20} />
            </a>
            <a href="tel:4694559733" className="btn-secondary border-white text-white hover:bg-white hover:text-garden-green inline-flex items-center justify-center space-x-2 px-8 py-4">
              <Phone size={20} />
              <span>Call 469-455-9733</span>
            </a>
          </div>
          <div className="mt-6 text-white/60 text-sm">
            <a href="mailto:info@txlandscapeservices.com" className="hover:text-white transition-colors">info@txlandscapeservices.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
