import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
  { name: 'Mining Estate', image: 'mining.jpeg' },
  { name: 'Mineral Processing', image: 'mineral.jpeg' },
  { name: 'Logistics', image: 'log.jpeg' },
  { name: 'Infrastructure', image: 'infra.jpeg' },
  { name: 'Industrial Parks', image: 'indistrial.jpeg' },
];

const CardCarousel = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
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
          drag="x"
          dragConstraints={{ left: -((cards.length - 1) * (100 / cards.length) * (window.innerWidth / 100)), right: 0 }}
          dragElastic={0.1}
          whileTap={{ cursor: "grabbing" }}
          style={{
            x: mousePosition.x * 0.02 - window.innerWidth / 2 * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {cards.map((card, index) => (
            <motion.div
              className="card"
              key={index}
              variants={cardVariants}
              style={{
                transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.02}px) translateY(${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
              }}
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
          cursor: grab;
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
    </motion.div>
  );
};

export default CardCarousel;