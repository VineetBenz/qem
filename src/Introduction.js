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
      height: '100vh',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent overlay
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
        <source src="abcd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Welcome to our QEM</h2>
          <p style={styles.paragraph}>
          Quality Earth Minerals (QEM) was incorporated in 2008 under Companies Act 1956 as a private limited entity and has been engaged in stone mining and processing ownership based mining leases mainly for various construction companies. It is also involved in infrastructure development activities in Delhi-NCR. QEM is a mining and crushing company in private sector has reached the production of substantialquantity of 7,00,000 Metric Tonnes till March 2024. Projection of approx 15,00,0000 Metric Tonnes for the year ended March 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;