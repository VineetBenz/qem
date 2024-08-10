import React, { useState, useEffect, useRef } from 'react';

const teamData = {
  'Office': [
    { name: 'Alex Johnson', position: 'CEO', bio: 'Alex has over 20 years of experience in the industry.', photo: 'avatar1.jpeg' },
    { name: 'Sam Taylor', position: 'VP Growth & Development', bio: 'Sam leads our expansion efforts across new markets.', photo: 'avatar2.jpeg' },
    // Add more members as needed
  ],
  'Mining': [
    { name: 'Jordan Lee', position: 'VP Finance & Operations', bio: 'Jordan oversees all financial and operational aspects of our company.', photo: 'avatar3.jpeg' },
    { name: 'Casey Morgan', position: 'VP Strategy', bio: 'Casey develops our long-term strategic initiatives.', photo: 'avatar1.jpeg' },
    // Add more members as needed
  ],
  'Sales': [
    { name: 'Riley Parker', position: 'VP Sales & Marketing', bio: 'Riley drives our sales growth and marketing campaigns.', photo: 'avatar2.jpeg' },
    { name: 'Quinn Davis', position: 'Creative Director', bio: 'Quinn brings innovative design solutions to all our projects.', photo: 'avatar3.jpeg' },
    // Add more members as needed
  ],
  'Support': [
    { name: 'Avery Wilson', position: 'Sr. Account Executive', bio: 'Avery manages relationships with our key clients.', photo: 'avatar1.jpeg' },
    { name: 'Drew Thompson', position: 'Founding Partner', bio: 'Drew co-founded our company and guides our overall vision.', photo: 'avatar2.jpeg' },
    { name: 'Taylor Reed', position: 'Founding Partner', bio: 'Taylor co-founded our company and leads our technological innovations.', photo: 'avatar3.jpeg' },
    // Add more members as needed
  ],
  'Design': [
    { name: 'Emily Clark', position: 'Lead Designer', bio: 'Emily creates visually stunning designs and user interfaces.', photo: 'avatar1.jpeg' },
    { name: 'Olivia Martinez', position: 'UX/UI Designer', bio: 'Olivia ensures a seamless and intuitive user experience.', photo: 'avatar2.jpeg' },
    { name: 'James Wilson', position: 'Graphic Designer', bio: 'James designs graphics that communicate our brand effectively.', photo: 'avatar3.jpeg' },
    // Add more members as needed
  ],
  // Add more divisions as needed
};

const DivisionTabs = () => {
  const [activeTab, setActiveTab] = useState('Office');
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
      ctx.fillStyle = 'rgba(255, 225, 225, 0.7)';
      ctx.strokeStyle = 'rgba(225, 225, 225, 0.7)';

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

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />
      <div className="relative text-center p-6 font-sans">
        <h2 className="text-2xl font-bold mb-6">Meet The Team</h2>
        <div className="flex justify-center mb-6 border-b-2 border-gray-300">
          {Object.keys(teamData).map((division) => (
            <button
              key={division}
              className={`py-2 px-4 text-lg font-medium ${
                activeTab === division ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(division)}
            >
              {division}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {teamData[activeTab].map((member, index) => (
            <div
              key={index}
              className="cursor-pointer w-40 text-center"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
        {selectedMember && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg z-50 max-w-md rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <img src={selectedMember.photo} alt={selectedMember.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selectedMember.name}</h3>
            <p className="text-gray-600 mb-2">{selectedMember.position}</p>
            <p>{selectedMember.bio}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DivisionTabs;
