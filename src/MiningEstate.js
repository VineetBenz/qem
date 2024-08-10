import React from 'react';



const MiningEstate = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Mining Estate</h1>
      <img 
        src={'mining.jpeg'} 
        alt="Mining Estate" 
        className="w-full h-auto rounded-lg shadow-lg mb-6" 
      />
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed">
          QEM Mining Estate is a leader in sustainable mining and mineral processing. Our commitment to environmental stewardship guides all our operations.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Current Operations</h2>
        <p className="text-lg leading-relaxed">
          Our robust and efficient exploration and mining team is composed of experts in various fields including geology, mining, and explosives. We are dedicated to extracting minerals in an environmentally friendly manner.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
          <li>
            <strong>Masonry Stone Mines:</strong> We operate two sites in Jhunjhunu and Sikar districts of Rajasthan, with a production capacity of 160,000 MT per month. 60% of this production consists of finished goods.
          </li>
          <li>
            <strong>Silica Sand Mine:</strong> Located in Rajasthan, this site diversifies our mineral extraction portfolio.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MiningEstate;
