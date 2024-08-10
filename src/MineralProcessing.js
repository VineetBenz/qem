import React from 'react';


const MineralProcessing = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Mineral Processing</h1>
      <img 
        src={'mineral.jpeg'} 
        alt="Mineral Processing" 
        className="w-full h-auto rounded-lg shadow-lg mb-6" 
      />
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          At QEM, mineral processing is a cornerstone of our operations, driven by our commitment to efficiency, sustainability, and innovation. Our state-of-the-art processing facilities and strategic partnerships ensure that we deliver high-quality products to meet the diverse needs of our clients.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Current Processing Capabilities</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">1. Advanced Crushing Technology</h3>
          <p className="text-lg leading-relaxed">
            QEM has partnered with SANDVIK ASIA LTD, a leader in mining equipment and crushing technology. Our processing capabilities are highlighted by:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
            <li>
              <strong>Two-Stage SANDVIK Crushing Plant:</strong> Located at our site in Ramkumarpura village, Khetri tehsil, this facility has a capacity of 1.2 Million MT per year. The two-stage process efficiently transforms raw materials into:
              <ul className="list-disc list-inside mt-2">
                <li>Aggregates: Essential for construction and infrastructure projects.</li>
                <li>Stone Dust: Used in various construction and industrial applications.</li>
                <li>Coarse Sand and Silica Sand: Key components for concrete and other construction materials.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. Comprehensive Product Range</h3>
          <p className="text-lg leading-relaxed">
            Our processing plant produces a wide array of finished goods, including:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
            <li>
              <strong>Aggregates:</strong> Sourced from our masonry stone mines, supplied in various grades for construction use.
            </li>
            <li>
              <strong>Stone Dust:</strong> A byproduct of our crushing operations, used in construction and as a base material in various applications.
            </li>
            <li>
              <strong>Coarse Sand and Silica Sand:</strong> Processed to meet specific industrial and construction requirements.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            We supply these products to esteemed clients on a trading basis, ensuring timely delivery and adherence to quality standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MineralProcessing;
