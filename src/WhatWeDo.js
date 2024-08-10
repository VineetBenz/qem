import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhatWeDo = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/Businesses');
  };

  return (
    <div className="bg-[rgba(1,1,0,0.09)] py-12 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
            OUR <span className="text-[#d4af37]">EXPERTISE</span>
          </h1>
          <p className="text-base text-3xl lg:text-lg text-[#7b7b7b] mb-4">
            <strong><em>One of the Leaders in stone mining and associated minerals processing with end to end solutions including logistics with almost 100% vendor share in many infrastructure companies. Pioneers in introducing new technologies for eco-friendly infrastructure construction and mining.</em></strong><br/><br/>
            <strong><em>Large fleet of Heavy Earth Moving Machineries and trucks/tippers maintained in-house through own workshops. Rich experience of promoters in construction and stone industry with sound financial track record backed up by a core team of technical and financial personnel with proven track record.</em></strong>
          </p>
          <button
            onClick={handleReadMoreClick}
            className="bg-[#d4af37] text-white px-6 py-2 hover:bg-[#c39f2f] transition duration-300"
          >
            Read More &gt;
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <img 
              src="oe1.jpeg" 
              alt="Interior Design" 
              className="w-3/4 h-3/4 object-cover border-2 border-black absolute bottom-0 left-0 z-10"
            />
            <img 
              src="oe2.jpeg" 
              alt="Renovation" 
              className="w-3/4 h-3/4 object-cover border-2 border-black absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
