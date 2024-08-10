import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '48.jpg', title: 'Entrance', category: 'OFFICE' },
    { src: '33.jpg', title: 'Conference Room', category: 'OFFICE' },
    { src: '32.jpg', title: 'Conference Room', category: 'OFFICE' },
    { src: '47.jpg', title: 'Workplace', category: 'OFFICE' },
    { src: '34.jpg', title: 'Office', category: 'OFFICE' },
    { src: '46.jpg', title: 'Lobby', category: 'OFFICE' },
    { src: '35.jpg', title: 'Workplace', category: 'OFFICE' },
    { src: '45.jpeg', title: 'Green', category: 'OFFICE' },
    { src: '54.jpeg', title: 'Mining Operations', category: 'MINING' },
    { src: '50.jpeg', title: 'Mining Excavation', category: 'MINING' },
    { src: '53.jpg', title: 'Mining Equipment', category: 'MINING' },
    { src: '52.jpeg', title: 'Mining Operations', category: 'MINING' },
    { src: '68.png', title: 'Mining Operations', category: 'MINING' },
    { src: '60.png', title: 'Mining Operations', category: 'MINING' },
    { src: '87.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '86.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '85.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '84.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '83.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '82.jpeg', title: 'CSR Activity', category: 'CSR' },
    { src: '81.png', title: 'CSR Activity', category: 'CSR' },
    { src: '80.jpeg', title: 'CSR Activity', category: 'CSR' },
    // Add more images as needed
  ];

  const categories = ['OFFICE', 'MINING', 'CSR'];

  return (
    <div className="container mx-auto my-8 bg-gray-100 p-6 rounded-lg shadow-lg">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h1 className="text-3xl font-extrabold text-black bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800">
            {category === 'OFFICE' ? 'Office Images' : category === 'MINING' ? 'Site Images' : 'CSR Images'}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {images
              .filter((image) => image.category === category)
              .map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-95"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
