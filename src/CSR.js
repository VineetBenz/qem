import React, { useState, useEffect } from 'react';

const images = ['9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', '23.jpeg'];

const CSR = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen mt-12 mb-12 bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="bg-black bg-opacity-50 text-white p-8 max-w-lg rounded-bl-2xl mt-[-50px]">
        <h2 className="text-3xl mb-4">Corporate Social Responsibility</h2>
        <p className="text-base leading-relaxed mb-4">
          QEM Group is committed to sustainable development by fostering strong relationships with surrounding communities.
          Their CSR and Periphery Development activities focus on healthcare, education, talent promotion, sports, art and culture,
          environmental protection, energy conservation, clean water and sanitation, skill development, livelihood promotion,
          infrastructure development, post-disaster recovery, hunger eradication, and other community initiatives. These efforts
          have made a positive impact on the socio-economic development of the peripheral areas and beyond. The organization's
          dedication to community well-being is central to its sustainability strategy.
        </p>
        <button className="bg-white text-green-600 border-0 py-2 px-4 text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default CSR;
