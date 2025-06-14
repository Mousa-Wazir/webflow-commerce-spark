
import React, { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
        <img 
          src={images[selectedImage]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
              selectedImage === index ? 'border-black' : 'border-gray-200'
            }`}
          >
            <img 
              src={image}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
