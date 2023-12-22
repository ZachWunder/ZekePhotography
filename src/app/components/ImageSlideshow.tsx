"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/c4ec31ad-7b2a-4c75-5839-8b886842e300/public",
  "https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/c58ee2b9-0bf6-41f6-7406-7a98e174fc00/public",
  "https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/ee167045-edfe-409c-0fb8-fbbf6cdf8100/public",
];

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute h-screen w-full overflow-hidden pointer-events-none">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
          style={{ opacity: index === currentImageIndex ? 1 : 0, zIndex: -1 }}
        >
          <Image
            className="pointer-events-none"
            src={image}
            alt={`Background image ${index}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlider;
