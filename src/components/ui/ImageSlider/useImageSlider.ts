import { useState } from 'react';

const useImageSlider = (images: string[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return { currentImageIndex, nextImage, previousImage };
};

export default useImageSlider;