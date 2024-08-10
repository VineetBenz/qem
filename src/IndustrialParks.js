import React from 'react';

// Ensure the image path is correct

const IndustrialParks = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Industrial Parks</h1>
      <img 
        src={'indistrial.jpeg'} 
        alt="Industrial Parks" 
        className="w-full h-auto rounded-lg shadow-lg mb-6" 
      />
      <section>
        <p className="text-lg leading-relaxed mb-6">
          QEM's commitment to enhancing its operational capabilities includes the development and management of state-of-the-art industrial parks. These parks are designed to foster efficiency, innovation, and growth across various sectors, serving as hubs for our mining, processing, and logistics operations.
        </p>
        <p className="text-lg leading-relaxed">
          Our industrial parks are strategically located near key mining sites and transportation routes. This strategic placement minimizes logistics costs and optimizes supply chain efficiency. Each park is situated near major highways and transportation networks, ensuring easy access for the movement of raw materials and finished products.
        </p>
      </section>
    </div>
  );
};

export default IndustrialParks;
