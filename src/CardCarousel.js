import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { name: 'Mining Estate', image: 'mining.jpeg' },
  { name: 'Mineral Processing', image: 'mineral.jpeg' },
  { name: 'Logistics', image: 'log.jpeg' },
  { name: 'Infrastructure', image: 'infra.jpeg' },
  { name: 'Industrial Parks', image: 'indistrial.jpeg' }, // Corrected here
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
    <div className="carousel-container">
      <h3 className="section-title">Our Verticals</h3>
      <motion.div
        className="carousel"
        variants={containerVariants}
        animate="animate"
      >
        {cards.concat(cards).map((card, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img src={card.image} alt={card.name} />
              <div className="card-overlay">
                <h3>{card.name}</h3>
                <button className="read-more">More</button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
          background: transparent;
        }

        .section-title {
          text-align: left;
          font-size: 36px;
          font-weight: 700;
          color: #333;
          margin-left: 50px;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .carousel {
          display: flex;
        }

        .card {
          flex: 0 0 ${100 / cards.length}%;
          padding: 20px;
          box-sizing: border-box;
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease-in-out;
        }

        .card:hover .card-content {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease-in-out;
        }

        .card:hover img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 20px;
          transition: background 0.5s ease-in-out;
        }

        .card:hover .card-overlay {
          background: rgba(0, 0, 0, 0.8);
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 600;
        }

        .read-more {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background-color: transparent;
          color: #FFFF00;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .read-more:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;