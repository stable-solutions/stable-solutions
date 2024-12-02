import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageViewer from '../portfolio/ImageViewer.tsx';
import { portfolioImages } from '../portfolio/portfolioImagesData.ts'; // Import portfolio data
import { ArrowRight } from 'lucide-react';  // Using an icon from lucide-react

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();

  // State for selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Function to navigate to the Portfolio page
  const handleViewMoreClick = () => {
    navigate('/portfolio');
  };

  // Get the first 6 images
  const displayedImages = portfolioImages.slice(0, 6);

  // Navigation for ImageViewer
  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % displayedImages.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + displayedImages.length) % displayedImages.length);
    }
  };

  return (
    <section className="bg-olive-green py-12 px-4 sm:px-8 w-full flex flex-col items-center space-y-12">
      {/* Portfolio Title - using the SVG */}
      <img
        src="/assets/portfolio/title-portfolio.svg"
        alt="Portfolio Title"
        className="w-full max-w-m md:max-w-lg"
      />

      {/* Portfolio Grid */}
      <div className="max-w-5xl mx-auto">
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${selectedImageIndex !== null ? 'blur-sm' : ''}`}>
          {displayedImages.map((image, index) => (
            <div
              key={image.shortName}
              className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 relative group"
              onClick={() => setSelectedImageIndex(index)} // Open ImageViewer
            >
              {/* Image Container */}
              <div className="w-full h-64 md:h-60 lg:h-64 relative overflow-hidden border border-4 border-white rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-opacity duration-200 ease-in-out group-hover:opacity-90"
                />
              </div>

              {/* Image Title */}
              <h3 className="mt-4 text-lg font-bold text-white font-poppins">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <button
        onClick={handleViewMoreClick}
        className="mt-8 px-8 py-3 border-2 border-solid border-white bg-transparent text-white rounded-full text-base sm:text-md font-poppins font-semibold flex items-center space-x-2 hover:text-purple hover:border-purple transition-colors"
      >
        <span>View More</span> 
        <ArrowRight size={20} />
      </button>

      {/* ImageViewer Component */}
      {selectedImageIndex !== null && (
        <ImageViewer
          src={displayedImages[selectedImageIndex].fullSizeSrc}
          alt={displayedImages[selectedImageIndex].alt}
          title={displayedImages[selectedImageIndex].title}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
