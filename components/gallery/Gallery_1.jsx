'use client';

import { useState } from 'react';

const images = [
  {
    src: '/images/gallery/1.png',
    alt: 'Fresh coffee being served at Il Molino',
  },
  {
    src: '/images/gallery/2.png',
    alt: 'Selection of handmade pastries at Il Molino',
  },
  {
    src: '/images/gallery/3.png',
    alt: 'Brunch dish with focaccia and salad on a wooden table',
  },
  {
    src: '/images/gallery/4.png',
    alt: 'Warm and cozy café interior with wooden chairs and plants',
  },
  {
    src: '/images/gallery/5.png',
    alt: 'Outdoor seating area with coffee cups and croissants',
  },
  {
    src: '/images/gallery/6.png',
    alt: 'Barista preparing espresso behind the counter',
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className="cursor-pointer group relative overflow-hidden rounded-lg border hover:shadow-lg transition"
              onClick={() => setSelectedImage({ src, alt })}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              aria-label="Close gallery image"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}