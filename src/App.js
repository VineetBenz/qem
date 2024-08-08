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
import CareersPage from './CareersPage.js';
import TeamGrid from './TeamGrid.js';
import CSR from './CSR.js';
import QEMGroupPage from './QEMGroupPage.js';
import ContactUs from './ContactUs.js';
import CSRpage from './CSRpage.js';
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
              {/* <ContactUs /> */}
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/CareersPage" element={<CareersPage />} />
          <Route path="/Businesses" element={<QEMGroupPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/CSRpage" element={<CSRpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;