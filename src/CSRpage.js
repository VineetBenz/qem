import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

// Import images statically
import img1 from './9.jpeg';
import img2 from './10.jpeg';
import img3 from './11.jpeg';
import img4 from './12.jpeg';
import img5 from './23.jpeg';

const images = [img1, img2, img3, img4, img5, '35.jpeg','36.jpeg','37.jpeg','38.jpeg'];

const CSRPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-200 to-white-100 -z-10"></div>
      <div className="container mx-auto p-4">
        <div
          className={`text-center transition-opacity duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
            Our Commitment to Sustainable Development
          </h1>
          <p className="text-lg mb-8 text-gray-600">
          QEM Group is committed to sustainable development by fostering strong relationships with surrounding communities. Our Focus Areas include Healthcare, Education, Talent Promotion, Sports, Art, and Culture, Environmental Protection, Energy Conservation, Clean Water and Sanitation, Skill Development, Livelihood Promotion, Infrastructure Development, Post-Disaster Recovery, Hunger Eradication, and Other Community Initiatives. Their CSR and Periphery Development activities focus on these key areas, making a positive impact on the socio-economic development of the peripheral areas and beyond. The organization's dedication to community well-being is central to its sustainability strategy.
          </p>
        </div>

        <div ref={ref} className="relative w-full h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-in-out transform ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-full scale-95'
              }`}
            >
              <img
                src={image}
                alt={`CSR activity ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
