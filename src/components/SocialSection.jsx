import React, { useEffect, useRef } from 'react'
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  ArrowRight
} from 'lucide-react'

const SocialSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.social-item').forEach((el, i) => {
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

  const socialPlatforms = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/txlandscapeservices',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-pink-500/10 to-purple-600/10'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/txlandscapeservices',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-700/10'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@txlandscapeservices',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-red-700/10'
    },
    {
      icon: Twitter,
      name: 'Twitter/X',
      url: 'https://twitter.com/txlandscapes',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gradient-to-br from-gray-500/10 to-gray-700/10'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Connect With Us</span>
          <h2 className="heading-md font-display text-garden-dark mt-2">Follow Our Work</h2>
          <p className="text-garden-stone text-base mt-4 leading-relaxed">
            See our latest projects, get landscaping inspiration, and connect with us on social media.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item opacity-0 translate-y-8 transition-all duration-700 group"
              >
                <div className={`p-6 rounded-2xl ${platform.bgColor} border border-garden-border hover:shadow-xl transition-all duration-300 text-center group-hover:-translate-y-1`}>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-sm font-medium text-garden-dark mt-3">{platform.name}</h4>
                  <span className="text-xs text-garden-green font-medium mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Follow →
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SocialSection
