import React from 'react';
import { motion } from 'framer-motion';

const BusinessActivities = () => {
  const activities = [
    {
      title: "Mining and Mineral Processing",
      content: "At Quality Earth Minerals, we have mastered the art and science of mining and mineral processing. Our expertise goes beyond mere extraction; we transform raw materials into valuable resources that fuel infrastructure development and industrial growth. We employ cutting-edge, eco-friendly mining methods to extract stone and minerals efficiently while minimizing environmental impact. Our crushing and screening plants, with a combined capacity of 900 TPH, ensure high-quality aggregates that meet the most demanding specifications. From stone aggregates to silica sand, we process a wide range of minerals to cater to varied industry needs. QEM is currently working at two sites of Masonary Stone Mines and one site of Silica Sand mine in the districts of Jhunjhunu and Sikar in the state of Rajasthan, with a production capacity of 160,000 MT per month. Rigorous quality checks at every stage ensure consistent, high-grade output that exceeds industry standards.",
      icon: "⛏️"
    },
    {
      title: "Crushing and Processing",
      content: "Quality Earth Minerals (QEM) excels in crushing and processing, transforming raw stone into premium construction aggregates vital for India's infrastructure growth. Our advanced crushing and screening plants, strategically located in Rajasthan and Haryana, boast a combined capacity of 900 TPH, serving the PAN India market and beyond. We employ a multi-stage crushing process to produce a diverse range of precisely sized aggregates, manufactured sand, and stone dust, all meeting rigorous quality standards. Our operations incorporate eco-friendly technologies and efficient material handling systems, optimizing productivity while minimizing environmental impact. With the ability to customize our output for specific project needs and a track record of supplying major infrastructure projects. QEM does not just crush stone - we create the foundation for India's development, one aggregate at a time. QEM has tied up with SANDVIK ASIA LTD for processing the run of mines of different minerals. Currently, QEM is producing aggregates and stone dust from its Two-Stage SANDVIK crushing plant in Khetri tehsil's Ramkumarpura village in Rajasthan with a designed capacity of 1.2 Million MT per year.",
      icon: "🏭"
    },
    {
      title: "Logistics",
      content: "QEM established its logistics branch in 2008-2009. We offer comprehensive logistics solutions, seamlessly integrating with our mining and processing operations to ensure efficient delivery of materials. Our logistics capabilities extend beyond mere transportation, encompassing strategic route planning, load optimization, and real-time tracking systems to maximize efficiency. With a focus on reliability and punctuality. Logistics services have become an integral part of our end-to-end solutions, supporting major infrastructure projects and contributing to our reputation as a dependable partner in the construction and mining industries. Currently, we transport approximately 1000 MT of aggregates daily with a fleet of 30 dedicated TATA vehicles. This fleet includes: TATA 2518 tippers, TATA 3118 LPT trucks, TATA 4018 Tip-trailers.",
      icon: "🚛"
    },
    {
      title: "Infrastructure",
      content: "Quality Earth Minerals (QEM) has established itself as a key player in infrastructure development, leveraging its expertise in mining, processing, and logistics to contribute significantly to India's growing infrastructure needs. Through our subsidiary, QEM Infra Projects Private Limited, we engage in a wide range of infrastructure projects across the country. We supply high-quality aggregates and execute projects for national highways, state roads, and urban infrastructure. Our materials and expertise have been crucial in numerous bridge and flyover projects, enhancing urban mobility. Our experienced team provides end-to-end project management services, ensuring timely and quality execution. We incorporate eco-friendly techniques and materials in our infrastructure projects, aligning with global sustainability goals.",
      icon: "🏗️"
    },
    {
      title: "Industrial Parks",
      content: "Our industrial parks are strategically located near key mining sites and transportation routes. This strategic placement minimizes logistics costs and optimizes supply chain efficiency. Each park is situated near major highways and transportation networks, ensuring easy access for the movement of raw materials and finished products. QEM recognizes the importance of strategically designed areas in optimizing manufacturing processes, enhancing logistical efficiency, and providing a collaborative environment for businesses. Our commitment to developing and maintaining state-of-the-art industrial parks ensures that companies have access to top-tier infrastructure, cutting-edge technology, and a robust support network, all of which contribute to operational excellence in the market.",
      icon: "🏢"
    }
  ];

  return (
    <section id="activities" className="my-16 px-4 bg-gradient-to-b from-gray-100 to-white">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-black">BUSINESS </span>
        <span className="text-[#00008b]">ACTIVITIES</span>
      </motion.h2>
      <div className="space-y-12">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex items-center">
              <span className="text-4xl mr-4">{activity.icon}</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                {activity.title}
              </h3>
            </div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                {activity.content}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessActivities;
