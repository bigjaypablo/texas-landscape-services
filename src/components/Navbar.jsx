import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  const getTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-garden-dark' : 'text-white'
    }
    return 'text-garden-dark'
  }

  const getMenuIconColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-garden-dark' : 'text-white'
    }
    return 'text-garden-dark'
  }

  const getHeaderBg = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }
    return 'bg-white shadow-sm'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderBg()}`}>
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/TLS-newlogo.png" 
              alt="Texas Landscape Services" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-body font-medium transition-colors hover:text-garden-green ${
                  isActive(item.href) ? 'text-garden-green border-b-2 border-garden-green' : getTextColor()
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className={`btn-primary text-sm px-6 py-2.5 ${isHomePage && !isScrolled ? 'bg-white text-garden-green hover:bg-garden-cream' : ''}`}>
              Book Now
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-1.5 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={22} className={getMenuIconColor()} />
            ) : (
              <Menu size={22} className={getMenuIconColor()} />
            )}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 top-16 bg-white shadow-xl transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <div className="container-premium py-6">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-body font-medium py-3 px-4 rounded-lg hover:bg-garden-green/5 transition-colors ${
                  isActive(item.href) ? 'text-garden-green bg-garden-green/5' : 'text-garden-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 pt-6 border-t border-garden-border/50 space-y-3">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center text-sm py-3"
            >
              Book Now
            </Link>
            <a
              href="tel:4694559733"
              className="flex items-center justify-center space-x-2 text-garden-dark font-body text-sm py-2"
            >
              <Phone size={16} />
              <span>469-455-9733</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
