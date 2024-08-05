import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useInView } from 'react-intersection-observer';

const MiningLocations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    // Simulating data fetch
    const fetchedLocations = [
      { id: 1, name: 'Vill-Ramkumarpura', district: 'Jhunjhunu', state: 'Rajasthan', lat: 28.1, lon: 75.8 },
      { id: 2, name: 'Vill- Pichopa Kalan', district: 'Charkhi Dadri', state: 'Haryana', lat: 28.6, lon: 76.3 },
      { id: 3, name: 'Vill-Kheri Battar', district: 'Charkhi Dadri', state: 'Haryana', lat: 28.5, lon: 76.2 },
      { id: 4, name: 'Vill-Dera', district: 'Ambala', state: 'Haryana', lat: 30.4, lon: 77.1 },
    ];
    setLocations(fetchedLocations);
    setIsLoading(false);
  }, []);

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mining-locations" style={{ display: 'flex', height: '100vh', margin: '0 15%', fontFamily: 'Arial, sans-serif' }}>
      <motion.div 
        className="content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ flex: 1, padding: '20px', overflowY: 'auto' }}
      >
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>Mining & Crushing Locations</h2>
        <ul className="location-list" style={{ listStyleType: 'none', padding: 0 }}>
          <AnimatePresence>
            {locations.map((location) => (
              <motion.li
                key={location.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: location.id * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff'
                }}
              >
                <h3 style={{ color: '#2c3e50', marginBottom: '5px' }}>{location.name}</h3>
                <p style={{ color: '#7f8c8d', margin: 0 }}>{location.district}, {location.state}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
      <motion.div 
        className="map-container"
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        style={{ 
          flex: 1, 
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{ 
          width: '100%',
          height: '80vh',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          border: '3px solid #3498db', // Added border here
        }}>
          {locations.length > 0 && (
            <MapContainer 
              center={[locations[0].lat, locations[0].lon]} 
              zoom={6} 
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {locations.map((location) => (
                <Marker key={location.id} position={[location.lat, location.lon]} icon={customIcon}>
                  <Popup>
                    <div>
                      <h3 style={{ color: '#2c3e50', marginBottom: '5px' }}>{location.name}</h3>
                      <p style={{ color: '#7f8c8d', margin: 0 }}>{location.district}, {location.state}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MiningLocations;