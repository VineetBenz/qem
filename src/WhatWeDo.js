import React from 'react';

const WhatWeDo = () => {
  return (
    <div style={styles.WhatWeDo}>
      <div style={styles.textSection}>
        <h1 style={styles.heading}>
          
          OUR <span style={styles.highlight}>EXPERTISE</span>
        </h1>
        <p style={styles.paragraph}>
        One of the Leaders in stone mining and associated minerals processing with end to end solutions including logistics with almost100% vendor share in many infrastructure companies. Pioneers in introducing new technologies for eco-friendly infrastructure construction and mining.<br/>
        Large fleet of Heavy Earth Moving Machineries and trucks/tippers maintained in-house through own workshops.Rich experience of promoters in construction and stone industrywith sound financial track record backed up by a core team oftechnical and financial personnel with proven track record.
        </p>
        <button style={styles.projectButton}>Read More &gt;</button>
      </div>
      <div style={styles.imagesSection}>
        <div style={styles.imageWrapper}>
          <img src="oe1.jpeg" alt="Interior Design" style={styles.image1} />
          <img src="oe2.jpeg" alt="Renovation" style={styles.image2} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  WhatWeDo: {
    display: 'flex',
    height: '70vh',
    
    backgroundColor: 'rgba(1, 1, 0, 0.09)',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  textSection: {
    maxWidth: '50%',
  },
  heading: {
    fontSize: '2.5rem',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  highlight: {
    color: '#d4af37', // Gold color
  },
  paragraph: {
    fontSize: '1.4rem',
    color: '#7b7b7b',
    marginBottom: '20px',
  },
  projectButton: {
    backgroundColor: '#d4af37', // Gold color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  imagesSection: {
    position: 'relative',
    top:'40px',
    left:'-400px',
    
    
  },
  imageWrapper: {
    position: 'relative',
  },
  image1: {
   
    top: '50px',
    left: '90px',
    
    maxWidth: '400px',
    position: 'relative',
    zIndex: 1,
    border: '2px solid #000',
  },
  image2: {
    maxWidth: '410px',

    position: 'absolute',
    top: '-130px',
    left: '350px',
    zIndex: 0,
    border: '2px solid #000',
  },
};

export default WhatWeDo;
