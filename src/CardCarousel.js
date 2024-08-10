import React from 'react';
import { useNavigate } from 'react-router-dom';

const cards = [
  { name: 'Mining Estate', image: 'mining.jpeg', path: '/mining-estate' },
  { name: 'Mineral Processing', image: 'mineral.jpeg', path: '/mineral-processing' },
  { name: 'Logistics', image: '53.jpg', path: '/logistics' },
  { name: 'Infrastructure', image: 'infra.jpeg', path: '/infrastructure' },
  { name: 'Industrial Parks', image: 'indistrial.jpeg', path: '/industrial-parks' },
];

const CardCarousel = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full py-10 bg-transparent">
      <h3 className="text-left text-3xl md:text-4xl font-bold text-gray-800 ml-4 md:ml-12 mb-8 uppercase tracking-wider">
        Our Verticals
      </h3>
      <div className="flex flex-wrap justify-center">
        {/* First row with 3 cards */}
        <div className="w-full flex justify-center mb-8">
          {cards.slice(0, 3).map((card, index) => (
            <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4" key={index}>
              <div className="relative md:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-all duration-500 ease-in-out hover:opacity-80">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{card.name}</h3>
                    <button
                      onClick={() => handleNavigation(card.path)}
                      className="absolute bottom-2 right-2 bg-transparent text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:border-blue-700 transform hover:-translate-y-1 hover:shadow-md"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with 2 cards */}
        <div className="w-full flex justify-center">
          {cards.slice(3).map((card, index) => (
            <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4" key={index}>
              <div className="relative md:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-all duration-500 ease-in-out hover:opacity-80">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{card.name}</h3>
                    <button
                      onClick={() => handleNavigation(card.path)}
                      className="absolute bottom-2 right-2 bg-transparent text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:border-blue-700 transform hover:-translate-y-1 hover:shadow-md"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
