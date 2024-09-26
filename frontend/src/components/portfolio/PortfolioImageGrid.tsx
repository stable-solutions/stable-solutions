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
      
      {/* Container to center and slim the grid */}
      <div className="max-w-5xl mx-auto">  {/* Slimmed down to 5xl for a tighter desktop appearance */}
        
        {/* Portfolio Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${selectedImageIndex !== null ? 'blur-sm' : ''}`}>
          {portfolioImages.map((image, index) => (
            <div
              key={image.shortName}  // Using shortName as key
              className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 relative group"
              onClick={() => {
                setSelectedImageIndex(index); 
                console.log("Selected Image Index:", index);  // Log the clicked index
              }}  // Set clicked image index
            >
              {/* Add ::before for a subtle loading effect */}
              <div className="w-full h-64 md:h-60 lg:h-64 relative overflow-hidden border border-4 border-white rounded-2xl">
                {/* Lazy loading the image */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"  // Lazy load for performance
                  className="w-full h-full object-cover object-top transition-opacity duration-200 ease-in-out group-hover:opacity-90" 
                />
              </div>

              {/* Image title (below the image) */}
              <h3 className="mt-4 text-lg font-bold text-white font-poppins">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer for full-screen mode */}
      {selectedImageIndex !== null && (
        <ImageViewer
          src={portfolioImages[selectedImageIndex].fullSizeSrc}
          alt={portfolioImages[selectedImageIndex].alt}
          title={portfolioImages[selectedImageIndex].title}
          onClose={() => {
            setSelectedImageIndex(null);
            console.log("ImageViewer closed");  // Log when the viewer is closed
          }}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default PortfolioImageGrid;
