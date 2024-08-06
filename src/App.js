import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Introduction from './Introduction.js';
import CardCarousel from './CardCarousel.js';
import Carousel from './Carousel';
import WhatWeDo from './WhatWeDo.js';
// import BoardOfDirectors from './BoardOfDirectors.js';
import MiningLocations from './MiningLocations.js';
// import VisionMission from './VisionMission.js';
import Footer from './Footer.js';
import AboutUs from './AboutUs.js';
import TeamGrid from './TeamGrid.js';
import CSR from './CSR.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Introduction />
              <CardCarousel />
              <Carousel />
              <WhatWeDo />
              < TeamGrid />
              {/* <BoardOfDirectors /> */}
              <MiningLocations />
              <CSR />
              {/* <VisionMission /> */}
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;