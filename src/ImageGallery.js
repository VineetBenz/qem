import React, { useState } from 'react';

const ImageGallery = () => {
  const images = [
    
    {
      src: '33.jpg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '32.jpg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '47.jpg',
      title: 'Office Seminar',
      category: 'office',
    },
    {
      src: '34.jpg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '46.jpg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '35.jpg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '45.jpeg',
      title: 'Office Meeting 2023',
      category: 'office',
    },
    {
      src: '54.jpeg',
      title: 'Mining Operations',
      category: 'mining',
    },
    {
      src: '50.jpeg',
      title: 'Mining Excavation',
      category: 'mining',
    },
    {
      src: '53.jpg',
      title: 'Mining Equipment',
      category: 'mining',
    },
    {
      src: '52.jpeg',
      title: 'Mining Operations',
      category: 'mining',
    },
    {
      src: '68.png',
      title: 'Mining Operations',
      category: 'mining',
    },
    {
      src: '60.png',
      title: 'Mining Operations',
      category: 'mining',
    },
    {
      src: '87.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '86.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '85.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '84.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '83.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '82.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '81.png',
      title: 'Mining Operations',
      category: 'CSR',
    },
    {
      src: '80.jpeg',
      title: 'Mining Operations',
      category: 'CSR',
    },
   
    // Add more images as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('office');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredImages = images.filter(
    (image) => image.category === selectedCategory
  );

  return (
    <div className="container mx-auto my-8 bg-gradient-to-r from-orange-100 via-orange-300 to-orange-500 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Image Gallery
        </h1>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="block rounded-full border-2 border-orange-500 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm bg-white text-orange-600 hover:bg-orange-100 transition-colors"
        >
          <option value="office">Office</option>
          <option value="mining">Mining</option>
          <option value="CSR">CSR</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative group bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {image.title}
            </h3>
            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
