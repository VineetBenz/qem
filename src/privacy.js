import React from 'react';

const TermsAndPrivacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Terms of Service and Privacy Policy</h1>
        
      </header>
      
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Service</h2>
        <p className="text-gray-700 mb-4">
          By engaging our mining and infrastructure services, you agree to the following terms:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Compliance with all local, state, and federal mining and construction regulations.</li>
          <li>Adherence to our safety protocols and environmental guidelines at all project sites.</li>
          <li>Timely payment for services rendered as per the agreed contract terms.</li>
          <li>Proper handling and maintenance of any leased or borrowed equipment.</li>
          <li>Immediate reporting of any accidents, incidents, or potential hazards.</li>
          <li>Respect for indigenous land rights and local community agreements.</li>
          <li>Confidentiality regarding proprietary mining techniques and infrastructure designs.</li>
        </ul>
      </section>
      
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
        
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>We collect and store geological data, site surveys, and project plans securely.</li>
          <li>Personal information of employees and contractors is kept confidential and used only for necessary operational and legal purposes.</li>
          <li>We employ industry-standard encryption for all digital communications and data storage.</li>
          <li>Environmental impact assessments and reports are shared only with relevant authorities and stakeholders.</li>
          <li>We do not sell or share client information with third parties unless required by law.</li>
          <li>Surveillance and monitoring data from project sites are used solely for security and safety purposes.</li>
          <li>You may request access to your personal data or project information at any time.</li>
        </ul>
      </section>
      
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection and Security</h2>
        <p className="text-gray-700 mb-4">We take additional measures to protect sensitive information:</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          
          <li>Strict access controls to physical and digital assets.</li>
          <li>Ongoing employee training on data protection and cybersecurity.</li>
          <li>Compliance with international data protection standards, including GDPR where applicable.</li>
        </ul>
      </section>
      
      {/* <footer className="text-center text-gray-600 mt-8">
        {/* <p className="mb-2">Last updated: August 10, 2024</p>
        <p>For any queries, please contact our legal department at <a href="mailto:legal@mineinfra.com" className="text-blue-600 hover:underline">legal@mineinfra.com</a></p>
      </footer> */}
    </div>
  );
};

export default TermsAndPrivacy;