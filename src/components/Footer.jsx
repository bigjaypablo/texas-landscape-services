import React from 'react'
import { Phone, Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const areas = ['Frisco', 'Plano', 'McKinney', 'Denton', 'Prosper', 'Little Elm', 'Celina']

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/txlandscapeservices', label: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com/txlandscapeservices', label: 'Facebook' },
    { icon: Youtube, url: 'https://youtube.com/@txlandscapeservices', label: 'YouTube' },
    { icon: Twitter, url: 'https://twitter.com/txlandscapes', label: 'Twitter' },
  ]

  return (
    <footer className="bg-garden-dark text-white pt-16 pb-8">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <img 
              src="/TLS-newlogo.png" 
              alt="Texas Landscape Services" 
              className="h-20 w-auto object-contain mb-4 logo-white-bg"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            />
            <p className="text-sm text-white/40 mt-2 leading-relaxed">
              Professional commercial and residential landscape management across North Dallas–Fort Worth.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-white/40">
                <Phone size={16} className="text-white/30" />
                <a href="tel:4694559733" className="hover:text-white transition-colors">469-455-9733</a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/40">
                <Mail size={16} className="text-white/30" />
                <a href="mailto:info@txlandscapeservices.com" className="hover:text-white transition-colors">info@txlandscapeservices.com</a>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-white/40 hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-medium text-white/40 mb-4">Services</h4>
            <ul className="space-y-2">
              {['Commercial Management', 'Residential Management', 'Landscape Renovation', 'Water Management', 'Pressure Washing', 'Maintenance & Cleanup'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-medium text-white/40 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-sm text-white/40 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-medium text-white/40 mb-4">Service Area</h4>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span key={area} className="text-xs bg-white/5 px-3 py-1.5 text-white/50 rounded border border-white/5">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <div className="w-full h-32 overflow-hidden rounded bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Frisco+Plano+McKinney+Denton+Prosper+Little+Elm+Celina+TX&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Texas Landscape Services Service Area Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-white/20">&copy; {currentYear} Texas Landscape Services. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm text-white/20">
            <Link to="/privacy" className="hover:text-white/40 transition-colors">Privacy Policy</Link>
            <span className="w-px h-4 bg-white/10" />
            <Link to="/terms" className="hover:text-white/40 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
