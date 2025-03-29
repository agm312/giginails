'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [imageError, setImageError] = useState(false);
  
  const designs = [
    {
      title: "Rainbow Sparkles",
      description: "Colorful rainbow design with sparkly purple base",
      imageUrl: "/images/rainbow-sparkles.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Nail Art Gallery
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse through our collection of beautiful nail designs created especially for young nail enthusiasts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-pink-100">
                <Image
                  src={design.imageUrl}
                  alt={design.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  onError={(e) => {
                    console.error(`Failed to load image for ${design.title}`);
                    setImageError(true);
                  }}
                />
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Image not available</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {design.title}
                </h3>
                <p className="text-gray-600">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Love what you see? Book an appointment for your little one today!
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-secondary transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
} 