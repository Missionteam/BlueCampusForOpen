import React from 'react';
import useImageSlider from './useImageSlider';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const { currentImageIndex, nextImage } = useImageSlider(images);

  return (
    <div 
      className="w-full h-3/4 border-2 border-black rounded-t-lg overflow-hidden relative"
      onClick={nextImage}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-transform duration-200 ease-in-out transform ${
            index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;