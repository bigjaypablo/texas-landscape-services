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
          <div className="lg:mt-0 mt-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg rounded-lg">
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
            <div className="mt-2 text-xs text-garden-stone/60 text-center">© Google Maps</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
