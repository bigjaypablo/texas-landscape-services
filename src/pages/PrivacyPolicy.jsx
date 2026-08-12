import React from 'react'

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-16 bg-garden-cream">
      <div className="container-premium max-w-4xl">
        <h1 className="heading-lg font-display text-garden-dark mb-8">Privacy Policy</h1>
        <div className="prose prose-lg prose-garden max-w-none">
          <p className="text-garden-stone">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">1. Introduction</h2>
          <p className="text-garden-stone leading-relaxed">
            Texas Landscape Services ("we", "our", "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-garden-stone leading-relaxed">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and address.</li>
            <li><strong>Property Information:</strong> Property address, property type, and landscape needs.</li>
            <li><strong>Usage Data:</strong> How you interact with our website, including pages visited and time spent.</li>
            <li><strong>Communication Data:</strong> Records of your communications with us via phone, email, or our contact forms.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-garden-stone leading-relaxed">We use your information to:</p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li>Provide and maintain our landscape management services.</li>
            <li>Respond to your inquiries and consultation requests.</li>
            <li>Send you service updates, quotes, and appointment reminders.</li>
            <li>Improve our website and service offerings.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">4. How We Share Your Information</h2>
          <p className="text-garden-stone leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (e.g., payment processors, CRM systems).</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">5. Data Security</h2>
          <p className="text-garden-stone leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">6. Your Privacy Rights</h2>
          <p className="text-garden-stone leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Withdraw consent at any time.</li>
          </ul>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">7. Cookies</h2>
          <p className="text-garden-stone leading-relaxed">
            Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-garden-stone leading-relaxed">
            Our services are not directed to children under 13, and we do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-garden-stone leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2 className="text-2xl font-display text-garden-dark mt-8 mb-4">10. Contact Us</h2>
          <p className="text-garden-stone leading-relaxed">
            If you have any questions about this privacy policy, please contact us:
          </p>
          <ul className="list-none pl-0 text-garden-stone leading-relaxed space-y-2 mt-2">
            <li><strong>Email:</strong> <a href="mailto:info@txlandscapeservices.com" className="text-garden-green hover:underline">info@txlandscapeservices.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:4694559733" className="text-garden-green hover:underline">469-455-9733</a></li>
            <li><strong>Address:</strong> North Dallas–Fort Worth, Texas</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy
