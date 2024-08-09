import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const MajorProjects = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'DMRC Delhi',
      details: 'Total length: 348 km, covering Delhi NCR',
      color: 'bg-red-400',
      image: 'delhi.jpeg',
    },
    {
      id: 2,
      title: 'Kolkata Metro Rail Corporation',
      details: 'Total length: 33.5 km, serving Kolkata metropolitan area',
      color: 'bg-teal-400',
      image: 'kol.jpeg',
    },
    {
      id: 3,
      title: 'National High Speed Rail Corporation Limited (NHSRCL)',
      details: 'Mumbai-Ahmedabad High Speed Rail Corridor: 508 km',
      color: 'bg-blue-400',
      image: 'nhsclr.jpeg',
    },
    {
      id: 4,
      title: 'Mumbai Metro Rail Corporation',
      details: 'Total length: 337 km (planned), serving Mumbai Metropolitan Region',
      color: 'bg-orange-300',
      image: 'mumbai.jpeg',
    },
    {
      id: 5,
      title: 'Lucknow Metro Rail Corporation',
      details: 'Total length: 33.5 km, serving Lucknow city',
      color: 'bg-green-300',
      image: 'lo.jpeg',
    },
    {
      id: 6,
      title: 'Upcoming Projects',
      details: 'Various metro and high-speed rail projects across India',
      color: 'bg-yellow-400',
      image: 'upc.jpeg',
    },
  ];

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleClick = (projectId) => {
    navigate(`/`);
  };

  return (
    <animated.div style={springProps} className="p-5">
      <h1 className="text-3xl font-bold mb-6">Major Projects</h1>
      
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <Tilt key={project.id} options={{ max: 25, scale: 1.05 }}>
            <motion.div
              className={`${project.color} rounded-lg overflow-hidden w-72 h-96 shadow-md cursor-pointer m-4 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg`}
              onClick={() => handleClick(project.id)}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-48"
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} project`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-5 flex-grow flex flex-col">
                <h2 className="text-gray-800 text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm flex-grow overflow-auto">{project.details}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </animated.div>
  );
};

export default MajorProjects;