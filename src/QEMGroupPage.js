import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';
import MajorProjects from './MajorProjects';
import MiningLocations from './MiningLocations';

const QEMGroupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const businessAreas = [
    { name: 'Mining Estate', image: 'mining.jpeg', path: '/mining-estate' },
    { name: 'Mineral Processing', image: 'mineral.jpeg', path: '/mineral-processing' },
    { name: 'Logistics', image: '53.jpg', path: '/logistics' },
    { name: 'Infrastructure', image: 'infra.jpeg', path: '/infrastructure' },
    { name: 'Industrial Parks', image: 'indistrial.jpeg', path: '/industrial-parks' },
  ];

  const locations = [
    { name: 'Vill-Ramkumarpura, Jhunjhunu, Rajasthan', coords: [28.1292, 75.4022] },
    { name: 'Vill- Pichopa Kalan, Charkhi Dadri, Haryana', coords: [28.5839, 76.2656] },
    { name: 'Vill-Kheri Battar, Charkhi Dadri, Haryana', coords: [28.5839, 76.2656] },
    { name: 'Vill-Dera, Ambala, Haryana', coords: [30.3752, 76.7821] },
  ];

  const handleMarkerClick = (coords) => {
    const [lat, lng] = coords;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleBusinessAreaClick = (path) => {
    navigate(path);
  };

  return (
    <div className="qem-group-page">
      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="text-4xl font-bold">QEM Group</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section id="business" className="my-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-8">Business Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAreas.map((area) => (
              <motion.div
                key={area.name}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => handleBusinessAreaClick(area.path)}
              >
                <img src={area.image} alt={area.name} className="w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold p-4">{area.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="clients" className="my-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-8">Major Clients</h2>
          <Carousel />
        </section>

        <section id="activities" className="my-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-8">Business Activities</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Mining and Mineral Processing</h3>
            <p className="mb-6">
              QEM has a very efficient and competitive exploration and mining team with experts from all the related fields like geology, mining, explosives, etc required for extracting different minerals in an environment friendly manner. It is currently working at two sites of Massionary Stone Mines and one site of Silica Sand mine in the districts of Jhunjhunu and Sikar in the state of Rajasthan, with a production capacity of 160000 MT per month.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Crushing and Processing</h3>
            <p className="mb-6">
              QEM has tied up with SANDVIK ASIA LTD for processing the run of mines of different minerals. Currently, QEM is producing aggregates and stone dust from its Two-Stage SANDVIK crushing plant in Khetri tehsil's Ramkumarpura village in Rajasthan with a designed capacity of 1.2 Million MT per year.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Logistics</h3>
            <p>
              QEM believes in providing complete business solutions to its clients and runs a logistics branch. It owns a fleet of 30 vehicles for supplying aggregates and other materials to user's doorstep.
            </p>
          </div>
        </section>
        <MajorProjects />
        <MiningLocations />
      </main>
    </div>
  );
};

export default QEMGroupPage;
