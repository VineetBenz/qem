import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MiningLocations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch
    const fetchedLocations = [
      {
        id: 1,
        name: 'Corporate Office',
        address: '701, 7th Floor, Ambience Mall, NH-8, Gurgaon, Haryana PIN - 122001',
        contact: '0124-4257899, 4147899, 4004599',
        email: 'info@qemindia.com',
        type: 'corporate'
      },
      {
        id: 2,
        name: 'Massionary Stone Mines & Crushing Plant',
        address: 'Vill-Ramkumarpura, Via-Papurana, Tehsil - Khetri, Distt. - Jhunjhunu, Rajasthan',
        contact: '+91 - 9660357963',
        type: 'mine'
      },
      {
        id: 6,
        name: 'Granite Mines & Manufacturing',
        address: 'Vill. Surkhand, Tehsil - Kanore, Distt. - Udaipur, Rajasthan',
        contact: '+91 - 9660357963',
        type: 'mine'
      },
      {
        id: 7,
        name: 'Massionary Stone Mines & Crushing Plant',
        address: 'Vill. Chhaupoli, Tehsil - Udaipurwati, Distt. - Neemkathana, Rajasthan',
        contact: '+91 - 9660357963',
        type: 'site'
      },
      {
        id: 8,
        name: 'Massionary Stone Mines & Crushing Plant',
        address: 'VPO. Jharinda, Via-Toda, Neemkathana, Distt. - Sikar, Rajasthan',
        contact: '+91 - 9351719580',
        type: 'site'
      },
      {
        id: 9,
        name: 'Silica Sand Mines',
        address: 'VPO. Sohanpura, Via-Patan, Distt. - Sikar, Rajasthan',
        contact: '+91 - 9660057127',
        type: 'mine'
      }
    ];
    setLocations(fetchedLocations);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="mining-locations flex flex-col h-screen mx-4 md:mx-16 font-sans">
      {/* <h6><b>Locations</b></h6> */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-grow">
        <div className="p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Corporate Locations</h2>
          <AnimatePresence>
            {locations.filter(location => location.type === 'corporate').map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: location.id * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                className="mb-4 p-4 rounded-lg shadow bg-white"
              >
                <h3 className="text-lg text-gray-800 mb-1">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600">Contact: {location.contact}</p>
                <p className="text-gray-600">Email: {location.email}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Mining & Crushing Locations</h2>
          <AnimatePresence>
            {locations.filter(location => location.type === 'mine').map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: location.id * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                className="mb-4 p-4 rounded-lg shadow bg-white"
              >
                <h3 className="text-lg text-gray-800 mb-1">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600">Contact: {location.contact}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">Mining & Crushing Locations</h2>
          <AnimatePresence>
            {locations.filter(location => location.type === 'site').map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: location.id * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                className="mb-4 p-4 rounded-lg shadow bg-white"
              >
                <h3 className="text-lg text-gray-800 mb-1">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600">Contact: {location.contact}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MiningLocations;
