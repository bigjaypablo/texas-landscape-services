import React from 'react'
import { ArrowRight, MapPin } from 'lucide-react'

const ServiceArea = () => {
  const areas = ['Frisco', 'Plano', 'McKinney', 'Denton', 'Prosper', 'Little Elm', 'Celina']

  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-garden-stone text-xs tracking-[0.2em] uppercase font-body">Service Area</span>
            <h2 className="heading-md font-display text-garden-dark mt-2">North Dallas–Fort Worth</h2>
            <p className="text-garden-stone text-base mt-4 leading-relaxed">
              Professional landscape management services across the entire North Dallas–Fort Worth metropolitan area.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
                <span key={area} className="px-4 py-2 bg-garden-green-pale text-garden-green text-sm font-medium rounded-lg">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-start space-x-3">
              <div className="w-1 h-16 bg-garden-green mt-1" />
              <div>
                <p className="text-sm text-garden-dark font-medium">Serving the entire North Dallas–Fort Worth region</p>
                <p className="text-xs text-garden-stone mt-1">Including surrounding areas</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://www.google.com/maps/dir//Frisco+Plano+McKinney+Denton+Prosper+Little+Elm+Celina+TX/@33.1556,-96.7707,10z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-garden-green hover:text-garden-green-dark transition-colors inline-flex items-center space-x-2"
              >
                <MapPin size={16} />
                <span>View Full Map</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Static Map - No API Key Required */}
          <div className="lg:mt-0 mt-8">
            <a 
              href="https://www.google.com/maps/dir//Frisco+Plano+McKinney+Denton+Prosper+Little+Elm+Celina+TX/@33.1556,-96.7707,10z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg rounded-lg bg-gradient-to-br from-garden-green/5 to-garden-green/20 border border-garden-green/10">
                {/* Static Map Visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full max-w-md mx-auto">
                    {/* Simple map representation */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(circle, #1a3a2a 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                    
                    {/* Service area markers */}
                    <div className="absolute top-[15%] left-[55%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse">
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Frisco</span>
                    </div>
                    
                    <div className="absolute top-[35%] left-[40%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '0.2s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Plano</span>
                    </div>
                    
                    <div className="absolute top-[20%] left-[72%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">McKinney</span>
                    </div>
                    
                    <div className="absolute top-[5%] left-[15%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '0.6s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Denton</span>
                    </div>
                    
                    <div className="absolute top-[12%] left-[45%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.8s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '0.8s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Prosper</span>
                    </div>
                    
                    <div className="absolute top-[30%] left-[25%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '1s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Little Elm</span>
                    </div>
                    
                    <div className="absolute top-[2%] left-[78%]">
                      <div className="w-3 h-3 bg-garden-green rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1.2s' }}>
                        <div className="absolute inset-0 w-6 h-6 bg-garden-green/20 rounded-full -m-1.5 animate-ping" style={{ animationDelay: '1.2s' }} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-garden-green whitespace-nowrap">Celina</span>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-1.5 h-1.5 bg-garden-green/30 rounded-full" />
                    </div>

                    {/* "Click to open map" overlay */}
                    <div className="absolute inset-0 bg-garden-green/0 group-hover:bg-garden-green/5 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                        <span className="text-garden-green text-sm font-medium flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>View Interactive Map</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] text-garden-stone/40">
                  Click to open in Google Maps
                </div>
              </div>
            </a>
            <div className="mt-2 text-xs text-garden-stone/60 text-center">© Google Maps</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
