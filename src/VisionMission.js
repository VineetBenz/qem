import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const VisionMission = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    gsap.to('.typing-text', {
      duration: 2,
      text: 'Vision & Mission',
      ease: 'none',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-300 to-blue-700 text-center min-h-screen w-full relative"
    >
      <h1 className="typing-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 shadow-lg">
        {/* The GSAP animation will update this text */}
      </h1>
      <Tilt options={{ max: 25, scale: 1.05 }}>
        <div
          ref={ref}
          className={`bg-white bg-opacity-90 rounded-lg p-8 shadow-xl max-w-4xl w-full mb-8 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } transition-opacity duration-800 ease-out`}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              "To be the leading Mining and Infrastructure company by utilizing advanced technology, providing the most cost effective solutions, and implementing best practices in project management"
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              "To serve sincerely, efficiently and build mutual relationship with customers satisfaction, social obligation and active environment friendly policy"
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default VisionMission;
