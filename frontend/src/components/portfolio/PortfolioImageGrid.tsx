import React, { useState } from 'react';
import ImageViewer from './ImageViewer.tsx';
import { portfolioImages } from './portfolioImagesData.ts';

const PortfolioImageGrid: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % portfolioImages.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + portfolioImages.length) % portfolioImages.length);
    }
  };

  return (
    <div className="relative py-4 px-4 sm:px-8 bg-olive-green"> {/* Reduce padding from py-12 to py-4 */}
      {/* Container to center and slim the grid */}
      <div className="max-w-5xl mx-auto">
        {/* Portfolio Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${selectedImageIndex !== null ? 'blur-sm' : ''}`}>
          {portfolioImages.map((image, index) => (
            <div
              key={image.shortName}
              className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 relative group"
              onClick={() => setSelectedImageIndex(index)}
            >
              {/* Add ::before for a subtle loading effect */}
              <div className="w-full h-64 md:h-60 lg:h-64 relative overflow-hidden border border-4 border-white rounded-2xl">
                {/* Lazy loading the image */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-opacity duration-200 ease-in-out group-hover:opacity-90" 
                />
              </div>

              {/* Image title (below the image) */}
              <h3 className="mt-4 text-lg font-bold text-white font-poppins">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <ImageViewer
          src={portfolioImages[selectedImageIndex].fullSizeSrc}
          alt={portfolioImages[selectedImageIndex].alt}
          title={portfolioImages[selectedImageIndex].title}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default PortfolioImageGrid;
