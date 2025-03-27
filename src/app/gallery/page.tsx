'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [imageError, setImageError] = useState(false);
  
  const designs = [
    {
      id: 1,
      title: "Butterfly Dreams",
      description: "Delicate butterfly designs perfect for little princesses",
      imageUrl: "/designs/placeholder1.jpg"
    },
    {
      id: 2,
      title: "Rainbow Sparkles",
      description: "Colorful and sparkly designs that kids love",
      imageUrl: "https://i.imgur.com/VxBQK6B.jpg"
    },
    {
      id: 3,
      title: "Unicorn Magic",
      description: "Magical unicorn-themed nail art",
      imageUrl: "/designs/placeholder3.jpg"
    },
    {
      id: 4,
      title: "Flower Garden",
      description: "Pretty floral designs for nature lovers",
      imageUrl: "/designs/placeholder4.jpg"
    },
    {
      id: 5,
      title: "Sweet Treats",
      description: "Cute candy and dessert-themed designs",
      imageUrl: "/designs/placeholder5.jpg"
    },
    {
      id: 6,
      title: "Princess Party",
      description: "Royal designs fit for a princess",
      imageUrl: "/designs/placeholder6.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">Our Nail Designs</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse through our collection of beautiful nail designs created especially for kids.
          Each design can be customized to your child's preferences!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div key={design.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative bg-pink-100">
                {design.id === 2 ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={design.imageUrl}
                      alt={design.title}
                      fill
                      className="object-cover"
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-pink-300 text-lg">Image Coming Soon</div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{design.title}</h3>
                <p className="text-gray-600">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for? We can create custom designs too!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
} 