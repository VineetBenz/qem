import React from 'react';

const Introduction = () => {
  return (
    <section className="relative overflow-hidden w-full h-screen font-sans">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="ab.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-start p-4 sm:p-6 md:p-8">
        <div className="w-full md:max-w-[70%] lg:max-w-[50%] text-left">
          <h2 className="text-white text-3xl sm:text-4xl mb-2 sm:mb-4 font-bold shadow-lg">
            Welcome to our QEM
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed shadow-md">
            Quality Earth Minerals (QEM) was incorporated in 2008 under Companies Act 1956 as a private limited entity and has been engaged in stone mining and processing ownership based mining leases mainly for various construction companies. It is also involved in infrastructure development activities in Delhi-NCR. QEM is a mining and crushing company in private sector has reached the production of substantial quantity of 7,00,000 Metric Tonnes till March 2024. Projection of approx 15,00,0000 Metric Tonnes for the year ended March 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;