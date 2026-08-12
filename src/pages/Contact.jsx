import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Building2
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '469-455-9733',
      href: 'tel:4694559733',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@txlandscapeservices.com',
      href: 'mailto:info@txlandscapeservices.com',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/14694559733',
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8:00 AM - 6:00 PM',
      color: 'bg-amber-500/10 text-amber-500'
    }
  ]

  const services = [
    'Commercial Landscape Management',
    'Residential Estate Management',
    'Landscape Renovation',
    'Water Management',
    'Pressure Washing',
    'Maintenance & Cleanup'
  ]

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
          <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">Get In Touch</span>
          <h1 className="heading-lg font-display mt-2">Let's Talk About Your Landscape</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
            Ready to transform your property? Contact us today for a consultation 
            and discover how professional landscape management can protect and enhance your investment.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2">
              <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Contact Information</span>
              <h2 className="heading-md font-display text-garden-dark mt-2">Get in Touch</h2>
              <p className="text-garden-stone text-base mt-4 leading-relaxed">
                Have questions about our landscape management services? Reach out to us 
                and we'll be happy to help.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-garden-cream rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className={`p-3 rounded-xl ${info.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-garden-stone uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} target={info.href.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer" className="text-garden-dark font-medium hover:text-garden-green transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-garden-dark font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Service Area Quick Info */}
              <div className="mt-8 p-6 bg-garden-green text-white rounded-2xl">
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 size={20} className="text-garden-gold-300" />
                  <span className="text-xs tracking-[0.2em] uppercase font-body text-garden-gold-300">Service Area</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Serving the entire North Dallas–Fort Worth metropolitan area, including 
                  Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina, and surrounding communities.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Frisco', 'Plano', 'McKinney', 'Denton', 'Prosper', 'Little Elm', 'Celina'].map((area) => (
                    <span key={area} className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-garden-cream p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-display text-garden-dark">Send a Message</h3>
                <p className="text-garden-stone text-sm mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 text-center py-12">
                    <div className="w-20 h-20 bg-garden-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-garden-green" />
                    </div>
                    <h4 className="text-2xl font-display text-garden-dark">Message Sent!</h4>
                    <p className="text-garden-stone mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 btn-primary inline-flex items-center space-x-2 px-6 py-2.5 text-sm"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-garden-dark mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-garden-dark mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-garden-dark mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark"
                        placeholder="(469) 555-1234"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-garden-dark mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-garden-dark mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-white border border-garden-border rounded-xl focus:ring-2 focus:ring-garden-green focus:border-transparent outline-none transition-all duration-300 text-garden-dark resize-none"
                        placeholder="Tell us about your property and what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full inline-flex items-center justify-center space-x-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-garden-stone text-center mt-4">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-garden-green text-white py-16">
        <div className="container-premium text-center">
          <h2 className="heading-md font-display">Prefer to Talk Directly?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Give us a call or send us a message. We're here to help with all your landscape management needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4694559733" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <Phone size={20} />
              <span>Call 469-455-9733</span>
            </a>
            <a href="https://wa.me/14694559733" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-garden-green inline-flex items-center justify-center space-x-2 px-8 py-4">
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
