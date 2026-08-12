import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Palette, 
  Users, 
  TrendingUp,
  Shield,
  Leaf,
  Heart,
  ArrowRight,
  Building2,
  Home,
  Droplets,
  MapPin,
  Gift,
  Calendar
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Service',
      description: 'Customized programs designed around property needs and budgets.',
      color: 'from-emerald-500/20 to-emerald-600/10'
    },
    {
      icon: Palette,
      title: 'Creativity',
      description: 'Knowledge of plant materials, colour, texture, and plant performance.',
      color: 'from-amber-500/20 to-amber-600/10'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Professional collaboration focused on achieving the best result.',
      color: 'from-blue-500/20 to-blue-600/10'
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Consistent, professional exterior environments designed to support property objectives and investment.',
      color: 'from-purple-500/20 to-purple-600/10'
    }
  ]

  const communityInitiatives = [
    { icon: Heart, label: 'Employee Volunteer Programs' },
    { icon: Gift, label: 'Donations of Time & Services' },
    { icon: Calendar, label: 'Community Event Participation' },
    { icon: Users, label: 'Local Charity Support' }
  ]

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section with Background Image */}
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
          <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">About Us</span>
          <h1 className="heading-lg font-display mt-2">Service. Creativity. Teamwork. Results.</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
            Texas Landscape Services provides professional commercial and residential landscape management 
            built on four core principles that guide everything we do.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Our Story</span>
              <h2 className="heading-md font-display text-garden-dark mt-2">Professional Landscape Management for North Texas</h2>
            </div>
            <div className="space-y-4 text-garden-stone leading-relaxed mt-6 max-w-3xl mx-auto">
              <p>
                Texas Landscape Services provides professional commercial and residential landscape management, 
                landscape renovation, landscape design collaboration, water management, pressure washing, 
                maintenance, and cleanup services across the North Dallas–Fort Worth metropolitan area.
              </p>
              <p>
                We serve commercial properties, property management companies, healthcare facilities, building owners, 
                developers, homeowners associations, and residential estates. Our approach focuses on maintaining 
                attractive, healthy, functional landscapes while helping protect your property investment.
              </p>
              <p>
                With a commitment to service, creativity, teamwork, and results, we deliver consistent, professional 
                exterior environments designed to support your property objectives and long-term investment goals.
              </p>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2 px-8 py-3">
                <span>Work With Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - The TLS Approach */}
      <section className="section-padding bg-garden-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-garden-gold-300 text-xs tracking-[0.3em] uppercase font-body">Our Philosophy</span>
            <h2 className="heading-md font-display mt-2">The TLS Approach</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              Four principles that guide everything we do, from initial consultation to ongoing landscape management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-display">{value.title}</h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-garden-warm">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Why Choose Us</span>
            <h2 className="heading-md font-display text-garden-dark mt-2">Expertise You Can Trust</h2>
            <p className="text-garden-stone text-base mt-4 leading-relaxed">
              We combine horticultural knowledge, professional collaboration, and a commitment to excellence 
              to deliver exceptional landscape management services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">
              <div className="p-2 bg-garden-green-pale rounded-lg flex-shrink-0">
                <Shield size={20} className="text-garden-green" />
              </div>
              <div>
                <h4 className="font-display text-garden-dark">Customized Landscape Programs</h4>
                <p className="text-garden-stone text-sm mt-1">Tailored solutions designed around your property needs and budget.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">
              <div className="p-2 bg-garden-green-pale rounded-lg flex-shrink-0">
                <Users size={20} className="text-garden-green" />
              </div>
              <div>
                <h4 className="font-display text-garden-dark">Commercial & Residential Expertise</h4>
                <p className="text-garden-stone text-sm mt-1">Experience across both commercial and residential properties.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">
              <div className="p-2 bg-garden-green-pale rounded-lg flex-shrink-0">
                <Leaf size={20} className="text-garden-green" />
              </div>
              <div>
                <h4 className="font-display text-garden-dark">Horticultural Knowledge</h4>
                <p className="text-garden-stone text-sm mt-1">Expert plant selection, color theory, and landscape performance.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">
              <div className="p-2 bg-garden-green-pale rounded-lg flex-shrink-0">
                <Droplets size={20} className="text-garden-green" />
              </div>
              <div>
                <h4 className="font-display text-garden-dark">Water-Conscious Management</h4>
                <p className="text-garden-stone text-sm mt-1">Smart irrigation and sustainable practices for resource conservation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Community Commitment</span>
            <h2 className="heading-md font-display text-garden-dark mt-2">Rooted in the Community We Serve</h2>
            <p className="text-garden-stone text-base mt-4 leading-relaxed">
              Texas Landscape Services believes in giving back to the communities that make North Texas exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {communityInitiatives.map((initiative, index) => {
              const Icon = initiative.icon
              return (
                <div key={index} className="bg-garden-green-pale p-6 rounded-xl text-center hover:bg-garden-green/10 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-garden-green/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-garden-green" />
                  </div>
                  <p className="text-sm font-medium text-garden-dark">{initiative.label}</p>
                </div>
              )
            })}
          </div>
          
          <div className="mt-8 text-center text-sm text-garden-stone">
            <p>Upper-management and office employees dedicate at least 16 volunteer hours annually.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-garden-green text-white py-16">
        <div className="container-premium text-center">
          <h2 className="heading-md font-display">Ready to Work Together?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Let's discuss your landscape management needs and create a customized program 
            that protects and enhances your property investment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-garden-green hover:bg-garden-cream inline-flex items-center justify-center space-x-2 px-8 py-4">
              <span>Get Started</span>
              <ArrowRight size={20} />
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

export default About
