import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
  { name: 'Minning Estate', image: '6.jpeg' },
  { name: 'Mineral Processing', image: '6.jpeg' },
  { name: 'Logistics', image: '6.jpeg' },
  { name: 'Infrastructure', image: '6.jpeg' },
  { name: 'Indistrial parks', image: '6.jpeg' },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex >= cards.length - 1) {
        setDirection(-1);
      } else if (currentIndex <= 0) {
        setDirection(1);
      }
      setCurrentIndex((prevIndex) => prevIndex + direction);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex, direction]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="carousel-container"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="section-title">Our Verticals</h3>
      <div className="carousel">
        <motion.div
          className="carousel-inner"
          animate={{ x: `${currentIndex * (direction === 1 ? -20 / cards.length : 30 / cards.length)}%` }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          {cards.map((card, index) => (
            <motion.div
              className="card"
              key={index}
              variants={cardVariants}
            >
              <div className="card-content">
                <img src={card.image} alt={card.name} />
                <div className="card-overlay">
                  <h3>{card.name}</h3>
                  <button className="read-more">More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
          width: 100%;
        }

        .carousel-inner {
          display: flex;
        }

        .card {
          flex: 0 0 ${100 / cards.length}%;
          padding: 20px;
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .card:hover .card-content {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
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
          transition: all 0.3s ease;
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
    </motion.div>
  );
};

export default CardCarousel;