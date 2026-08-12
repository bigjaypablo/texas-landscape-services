import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      id: 1,
      question: 'What areas do you serve?',
      answer: 'We serve the entire North Dallas–Fort Worth metropolitan area, including Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina, and surrounding communities.'
    },
    {
      id: 2,
      question: 'What services do you offer?',
      answer: 'We offer comprehensive landscape management services including Commercial Landscape Management, Residential Estate Management, Landscape Renovation, Water Management, Pressure Washing, and Maintenance & Cleanup services.'
    },
    {
      id: 3,
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer free consultations for all new clients. Contact us to schedule a visit and discuss your landscape needs.'
    },
    {
      id: 4,
      question: 'Are you licensed and insured?',
      answer: 'Yes, Texas Landscape Services is fully licensed and insured. We carry comprehensive liability insurance to protect our clients and their properties.'
    },
    {
      id: 5,
      question: 'Do you work with both commercial and residential clients?',
      answer: 'Absolutely! We serve both commercial properties (property management companies, healthcare facilities, building owners, developers, HOAs) and residential estates and properties.'
    },
    {
      id: 6,
      question: 'What is the TLS Approach?',
      answer: 'The TLS Approach is our core philosophy based on four principles: Service, Creativity, Teamwork, and Results. These principles guide everything we do, from initial consultation to ongoing landscape management.'
    },
    {
      id: 7,
      question: 'Do you offer emergency or same-day services?',
      answer: 'We offer priority service for urgent landscape needs. Contact us directly and we\'ll do our best to accommodate your request as quickly as possible.'
    },
    {
      id: 8,
      question: 'How do I schedule a service?',
      answer: 'You can schedule a service by contacting us via phone at 469-455-9733, email at info@txlandscapeservices.com, or by filling out the contact form on our Contact page.'
    },
    {
      id: 9,
      question: 'Do you use environmentally friendly products?',
      answer: 'Yes! We are committed to environmentally responsible practices. Our pressure washing uses eco-friendly products designed not to harm surrounding grass, plants, or trees. We also practice water-conscious management and sustainable irrigation solutions.'
    },
    {
      id: 10,
      question: 'Do you offer maintenance contracts?',
      answer: 'Yes, we offer customized maintenance programs for both commercial and residential properties. These can be tailored to your specific needs and budget, whether you require weekly, bi-weekly, or monthly service.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">FAQ</span>
          <h1 className="heading-lg font-display mt-2">Frequently Asked Questions</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
            Find answers to the most common questions about our landscape management services.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-garden-cream">
        <div className="container-premium max-w-4xl">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-garden-stone" />
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-garden-border/30"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-garden-green/5 transition-colors duration-200 group"
                    >
                      <span className="text-base md:text-lg font-medium text-garden-dark group-hover:text-garden-green transition-colors">
                        {faq.question}
                      </span>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown size={20} className="text-garden-stone group-hover:text-garden-green" />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-garden-stone leading-relaxed border-t border-garden-border/30 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-12">
                <p className="text-garden-stone">No questions found matching your search.</p>
              </div>
            )}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-garden-border/30">
            <h3 className="text-xl font-display text-garden-dark">Still Have Questions?</h3>
            <p className="text-garden-stone mt-2">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center space-x-2 px-8 py-3">
                <span>Contact Us</span>
              </Link>
              <a href="tel:4694559733" className="btn-secondary inline-flex items-center justify-center space-x-2 px-8 py-3">
                <span>Call 469-455-9733</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-garden-green text-white py-16">
        <div className="container-premium text-center">
          <h2 className="heading-md font-display">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can transform your landscape.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <span>Request a Consultation</span>
            </Link>
            <a href="tel:4694559733" className="btn-secondary border-white text-white hover:bg-white hover:text-garden-green inline-flex items-center justify-center space-x-2 px-8 py-4">
              Call 469-455-9733
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQ
