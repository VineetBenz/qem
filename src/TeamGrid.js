import React, { useState, useEffect, useRef } from 'react';

const teamMembers = [
  { name: 'Alex Johnson', position: 'CEO', bio: 'Alex has over 20 years of experience in the industry.', photo: 'logo.png' },
  { name: 'Sam Taylor', position: 'VP Growth & Development', bio: 'Sam leads our expansion efforts across new markets.', photo: 'logo.png' },
  { name: 'Jordan Lee', position: 'VP Finance & Operations', bio: 'Jordan oversees all financial and operational aspects of our company.', photo: 'logo.png' },
  { name: 'Casey Morgan', position: 'VP Strategy', bio: 'Casey develops our long-term strategic initiatives.', photo: 'logo.png' },
  { name: 'Riley Parker', position: 'VP Sales & Marketing', bio: 'Riley drives our sales growth and marketing campaigns.', photo: 'logo.png' },
  { name: 'Quinn Davis', position: 'Creative Director', bio: 'Quinn brings innovative design solutions to all our projects.', photo: 'logo.png' },
  { name: 'Avery Wilson', position: 'Sr. Account Executive', bio: 'Avery manages relationships with our key clients.', photo: 'logo.png' },
  { name: 'Drew Thompson', position: 'Founding Partner', bio: 'Drew co-founded our company and guides our overall vision.', photo: 'logo.png' },
  { name: 'Taylor Reed', position: 'Founding Partner', bio: 'Taylor co-founded our company and leads our technological innovations.', photo: 'logo.png' },
];

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 100;
    const maxDistance = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const styles = {
    container: {
      position: 'relative',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      zIndex: 1,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '70px',
    },
    member: {
      cursor: 'pointer',
      margin: '0 10px',
      width: '180px',
    },
    photo: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    name: {
      margin: '10px 0 5px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    position: {
      margin: 0,
      color: '#666',
      fontSize: '14px',
    },
    details: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      maxWidth: '300px',
      borderRadius: '5px',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },
    canvas: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    },
  };

  const renderMemberCard = (member, index) => (
    <div key={index} style={styles.member} onClick={() => setSelectedMember(member)}>
      <img src={member.photo} alt={member.name} style={styles.photo} />
      <h3 style={styles.name}>{member.name}</h3>
      <p style={styles.position}>{member.position}</p>
    </div>
  );

  return (
    <>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.container}>
        <h2>Meet The Team</h2>
        <div style={styles.row}>
          {teamMembers.slice(0, 5).map(renderMemberCard)}
        </div>
        <div style={styles.row}>
          {teamMembers.slice(5).map(renderMemberCard)}
        </div>
        {selectedMember && (
          <div style={styles.details}>
            <span style={styles.closeButton} onClick={() => setSelectedMember(null)}>X</span>
            <img src={selectedMember.photo} alt={selectedMember.name} style={styles.photo} />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.position}</p>
            <p>{selectedMember.bio}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamGrid;