import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from "framer-motion";
import '@fontsource/poppins';

// FlyingWord Component
const FlyingWord = ({ word, index, controls, color }) => {
  const directions = ["top", "right", "bottom", "left"];
  const direction = directions[index % directions.length];

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "top" ? -20 : direction === "bottom" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.span
      className={`inline-block mr-1 ${color}`}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.02,
      }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {word}
    </motion.span>
  );
};

// FlyingText Component
const FlyingText = ({ text, controls, color }) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <FlyingWord key={index} word={word} index={index} controls={controls} color={color} />
      ))}
    </>
  );
};

// WhatWeDo Component
const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="bg-[rgba(1,1,0,0.09)] py-12 px-4 lg:px-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            animate={controls}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            <FlyingText text="OUR" controls={controls} color="text-black" /> <FlyingText text="EXPERTISE" controls={controls} color="text-[#00008b]" />
          </motion.h1>
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-[#7b7b7b] mb-4 leading-relaxed"
            initial="hidden"
            animate={controls}
            variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          >
            <strong><em><FlyingText text="One of the Leaders in stone mining and associated minerals processing with end to end solutions including logistics with almost 100% vendor share in many infrastructure companies. Pioneers in introducing new technologies for eco-friendly infrastructure construction and mining." controls={controls} color="text-[#7b7b7b]" /></em></strong><br/><br/>
            <strong><em><FlyingText text="Large fleet of Heavy Earth Moving Machineries and trucks/tippers maintained in-house through own workshops. QEM has supplied aggregates to various major infrastructure projects, including highways and flyovers." controls={controls} color="text-[#7b7b7b]" /></em></strong>
          </motion.p>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{ 
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
            }}
          >
            <Link to="/Businesses">
              <motion.button
                className="bg-[#d4af37] text-white px-6 py-2 hover:bg-[#c39f2f] transition duration-300 text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FlyingText text="Read More >" controls={controls} color="text-white" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <motion.img 
              src="oe1.jpeg" 
              alt="Interior Design" 
              className="w-3/4 h-3/4 object-cover border-2 border-black absolute bottom-0 left-0 z-10"
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
              }}
            />
            <motion.img 
              src="oe2.jpeg" 
              alt="Renovation" 
              className="w-3/4 h-3/4 object-cover border-2 border-black absolute top-0 right-0"
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
