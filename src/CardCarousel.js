import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { name: 'Mining Estate', image: 'mining.jpeg' },
  { name: 'Mineral Processing', image: 'mineral.jpeg' },
  { name: 'Logistics', image: 'log.jpeg' },
  { name: 'Infrastructure', image: 'infra.jpeg' },
  { name: 'Industrial Parks', image: 'industrial.jpeg' },
];

const CardCarousel = () => {
  const containerVariants = {
    animate: {
      x: [0, -100 * cards.length + 100, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className="w-full overflow-hidden py-10 bg-transparent">
      <h3 className="text-left text-3xl md:text-4xl font-bold text-gray-800 ml-4 md:ml-12 mb-8 uppercase tracking-wider">
        Our Verticals
      </h3>
      <motion.div
        className="flex"
        variants={containerVariants}
        animate="animate"
      >
        {cards.concat(cards).map((card, index) => (
          <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={index}>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 transition-all duration-500 ease-in-out hover:bg-opacity-80">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">{card.name}</h3>
                  <button className="absolute bottom-2 right-2 bg-transparent text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:border-blue-700 transform hover:-translate-y-1 hover:shadow-md">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardCarousel;