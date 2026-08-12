import React, { useState, useEffect } from 'react'
import { MessageCircle, Phone, Mail, X, Send } from 'lucide-react'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(scrollY > heroHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Us',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      href: 'tel:4694559733',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      href: 'https://wa.me/14694559733',
    },
    {
      icon: Send,
      label: 'Messenger',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      href: 'https://m.me/txlandscapeservices',
    },
    {
      icon: Mail,
      label: 'Email',
      color: 'bg-rose-500',
      hoverColor: 'hover:bg-rose-600',
      href: 'mailto:info@txlandscapeservices.com',
    }
  ]

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative">
          {/* Options */}
          <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-3">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center space-x-3 
                  transform transition-all duration-300 ease-out
                  ${isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-50'}
                `}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={(e) => {
                  if (!isOpen) e.preventDefault()
                }}
              >
                <span className="text-sm font-medium text-garden-dark bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {option.label}
                </span>
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center 
                  ${option.color} text-white shadow-lg 
                  hover:scale-110 transition-transform duration-200
                  ${option.hoverColor}
                `}>
                  <option.icon size={20} />
                </div>
              </a>
            ))}
          </div>

          {/* Main Button */}
          <button
            onClick={toggleMenu}
            className={`
              w-16 h-16 rounded-full flex items-center justify-center
              shadow-2xl transition-all duration-300 relative
              ${isOpen ? 'bg-garden-dark rotate-45' : 'bg-garden-green hover:bg-garden-green/90'}
              hover:scale-110 transform
            `}
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <MessageCircle size={28} className="text-white" />
            )}
            
            {/* Pulse Animation */}
            {!isOpen && (
              <span className="absolute inset-0 rounded-full animate-ping bg-garden-green/30" />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default FloatingContact
