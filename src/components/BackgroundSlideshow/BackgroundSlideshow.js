import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const images = [
  `${process.env.PUBLIC_URL}/assets/images/Scene1.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene2.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene3.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene4.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene5.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene6.jpg`,
  `${process.env.PUBLIC_URL}/assets/images/Scene7.jpg`
];

// Preload images
const preloadImages = (srcArray) => {
  const imgArray = [];
  srcArray.forEach((src) => {
    const img = new Image();
    img.src = src;
    imgArray.push(img);
  });
};

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images); // Preload all images

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slideshow"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`
      }}
    />
  );
};

export default BackgroundSlideshow;
