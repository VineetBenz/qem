import React from 'react';

// Adjust the path as needed

const Infrastructure = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Infrastructure</h1>
      <img 
        src={'infra.jpeg'} 
        alt="Infrastructure" 
        className="w-full h-auto rounded-lg shadow-lg mb-6" 
      />
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          QEM’s infrastructure is a cornerstone of our operational success, driving efficiency and productivity across our mining and processing activities. Our facilities are designed to support high production volumes, maintain stringent quality standards, and ensure timely delivery of products. We invest significantly in advanced technology and logistics to enhance our infrastructure capabilities and meet the growing demands of our clients.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Key Facilities</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-lg leading-relaxed">
            Our advanced two-stage SANDVIK crushing plant is strategically located in Ramkumarpura village, Khetri tehsil, Rajasthan. This site was chosen for its accessibility and proximity to key mining areas.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Capacity</h3>
          <p className="text-lg leading-relaxed">
            The plant boasts a robust capacity of 1.2 Million MT per year, efficiently processing run-of-mine materials into a range of products including aggregates, stone dust, coarse sand, and silica sand. This capacity allows us to meet high demand and ensure a steady supply of essential materials.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
