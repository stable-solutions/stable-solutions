import React, { useState } from 'react';
import ImageViewer from './ImageViewer';
import { portfolioImages } from './portfolioImagesData.ts';  // Import the data from the data file

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
    <div className="relative py-12 px-4 sm:px-8 bg-olive-green">

      {/* Portfolio Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${selectedImageIndex !== null ? 'blur-sm' : ''}`}>
        {portfolioImages.map((image, index) => (
          <div
            key={image.shortName}  // Using shortName as key
            className="border border-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedImageIndex(index)}  // Set clicked image index
          >
            {/* Thumbnail image */}
            <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />

            {/* Image description */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold text-dark-blue font-poppins">{image.title}</h3>
              <p className="text-md text-gray-600 font-poppins">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer for full-screen mode */}
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
