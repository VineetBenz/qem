import React from 'react';

const Introduction = () => {
  const styles = {
    section: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      padding: '2rem',
      boxSizing: 'border-box',
    },
    content: {
      maxWidth: '50%',
      textAlign: 'left',
    },
    heading: {
      color: '#ffffff',
      fontSize: '2.5rem',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    paragraph: {
      color: '#ffffff',
      lineHeight: '1.6',
      fontSize: '1rem',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
  };

  return (
    <section style={styles.section}>
      <video 
        style={styles.video}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="abc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Welcome to our QEM</h2>
          <p style={styles.paragraph}>
            At the outset we would like to introduce ourself as a professionally managed company 
            in the business of stone mining, crushing and supply of aggregates and coarse sand 
            to Delhi-NCR to the companies like Larsen and Toubro, Sadbhav Engineering, DLF, LOR, 
            B L Kashyap, DRA, PIL, C P Arora, ERA construction, HCC, etc. for last many years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;