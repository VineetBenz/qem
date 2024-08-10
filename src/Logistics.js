import React from 'react';


const Logistics = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Logistics</h1>
      <img 
        src={'53.jpg'} 
        alt="Logistics" 
        className="w-full h-auto rounded-lg shadow-lg mb-6" 
      />
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          At QEM, we believe in providing a comprehensive business solution to our clients. This includes managing all business activities ourselves— from controlling the source and mining minerals to processing and transporting finished goods directly to clients' doors. 
        </p>
        <p className="text-lg leading-relaxed mt-4">
          One of the biggest challenges in the construction material sector is reliable transportation. Many projects face delays and failures due to the unorganized and unreliable outsourced transportation chains.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Logistics Solution</h2>
        <p className="text-lg leading-relaxed">
          To address these issues, QEM established its logistics branch in 2008-2009. We handle the transportation of aggregates and allied products to our esteemed clients. Our in-house logistics facility has helped us achieve and surpass our sales targets efficiently.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Currently, we transport approximately 1000 MT of aggregates daily with a fleet of 30 dedicated TATA vehicles. This fleet includes:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
          <li>TATA 2518 tippers</li>
          <li>TATA 3118 LPT trucks</li>
          <li>TATA 4018 Tip-trailers</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          We are also developing another fleet for our Patan zone mining and crushing activities, which is currently under planning.
        </p>
      </section>
    </div>
  );
};

export default Logistics;
