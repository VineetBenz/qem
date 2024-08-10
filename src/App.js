import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Introduction from './Introduction.js';
import CardCarousel from './CardCarousel.js';
import Carousel from './Carousel';
import WhatWeDo from './WhatWeDo.js';
// import BoardOfDirectors from './BoardOfDirectors.js';
//import MiningLocations from './MiningLocations.js';
import MineralProcessing from './MineralProcessing'; // Adjust path as needed
import Logistics from './Logistics'; // Adjust path as needed
import Infrastructure from './Infrastructure'; // Adjust path as needed
import IndustrialParks from './IndustrialParks';
// import VisionMission from './VisionMission.js';
import Footer from './Footer.js';
import AboutUs from './AboutUs.js';
import CareersPage from './CareersPage.js';
import DivisionTabs from './DivisionTabs.js';
import CSR from './CSR.js';
import QEMGroupPage from './QEMGroupPage.js';
import ContactUs from './ContactUs.js';
import CSRpage from './CSRpage.js';
import ImageGallery from './ImageGallery.js';
import MajorProjects from './MajorProjects.js';
import MiningEstate from './MiningEstate.js'; 
import TermsAndPrivacy from './privacy.js';
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
              <MajorProjects />
              <DivisionTabs />
              
              {/* <BoardOfDirectors /> */}
              {/* <MiningLocations /> */}
              {/* OUR PROJECTS */}
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
          <Route path="/ImageGallery" element={<ImageGallery />} />
          <Route path="/mining-estate" element={<MiningEstate />} />
          <Route path="/mineral-processing" element={<MineralProcessing />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/industrial-parks" element={<IndustrialParks />} />
          <Route path="/privacy" element={<TermsAndPrivacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;