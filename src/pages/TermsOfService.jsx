import React from 'react'

const TermsOfService = () => {
  return (
    <main className="pt-24 pb-16 bg-garden-cream">
      <div className="container-premium max-w-4xl">
        <h1 className="heading-lg font-display text-garden-dark mb-8">Terms of Service</h1>
        <div className="prose prose-lg prose-garden max-w-none">
          <p className="text-garden-stone">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-garden-stone leading-relaxed">
            By accessing or using the Texas Landscape Services website and services, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">2. Services Provided</h2>
          <p className="text-garden-stone leading-relaxed">
            Texas Landscape Services provides professional landscape management services including:
          </p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li>Commercial landscape management</li>
            <li>Residential estate landscape management</li>
            <li>Landscape renovation and design collaboration</li>
            <li>Water management and irrigation</li>
            <li>Pressure washing services</li>
            <li>Landscape maintenance and cleanup</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">3. Service Area</h2>
          <p className="text-garden-stone leading-relaxed">
            Our services are provided exclusively in the North Dallas–Fort Worth metropolitan area, including but not limited to:
            Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina, and surrounding areas.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">4. Client Responsibilities</h2>
          <p className="text-garden-stone leading-relaxed">As a client, you agree to:</p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li>Provide accurate property information and access for services.</li>
            <li>Communicate any specific landscape requirements or concerns.</li>
            <li>Pay for services as agreed upon in your service contract.</li>
            <li>Notify us of any changes to your property that may affect service delivery.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">5. Quotes and Estimates</h2>
          <p className="text-garden-stone leading-relaxed">
            All quotes and estimates provided by Texas Landscape Services are valid for 30 days. 
            Final pricing may vary based on site conditions, scope changes, or unforeseen circumstances.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">6. Payments and Billing</h2>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li>Payment terms will be outlined in your service agreement.</li>
            <li>Late payments may incur additional charges.</li>
            <li>All prices are in US dollars.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">7. Cancellation and Refund Policy</h2>
          <p className="text-garden-stone leading-relaxed">
            Please contact us directly for our cancellation and refund policy, as it may vary based on the service type and contract terms.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">8. Intellectual Property</h2>
          <p className="text-garden-stone leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of Texas Landscape Services 
            and is protected by copyright laws. You may not reproduce, distribute, or use any content without our express written permission.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-garden-stone leading-relaxed">
            Texas Landscape Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from 
            the use of our services. Our total liability is limited to the amount paid for the specific service in question.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">10. Force Majeure</h2>
          <p className="text-garden-stone leading-relaxed">
            We shall not be held liable for delays or failures in performance resulting from causes beyond our reasonable control, 
            including weather, natural disasters, strikes, or government actions.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">11. Governing Law</h2>
          <p className="text-garden-stone leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">12. Changes to Terms</h2>
          <p className="text-garden-stone leading-relaxed">
            We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">13. Contact Us</h2>
          <p className="text-garden-stone leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none pl-0 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li><strong>Email:</strong> <a href="mailto:info@txlandscapeservices.com" className="text-garden-green hover:underline">info@txlandscapeservices.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:4694559733" className="text-garden-green hover:underline">469-455-9733</a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default TermsOfService
