import React from 'react';

// PortfolioHeader component to display the SVG header
const PortfolioHeader: React.FC = () => (
  <section className="bg-olive-green py-12 px-4 sm:px-8 w-full flex flex-col items-center space-y-4">
    {/* Portfolio Title - using the SVG */}
    <img 
      src="/assets/portfolio/title-portfolio.svg" 
      alt="Portfolio Title"
      className="w-full max-w-xs md:max-w-md"  // Adjust size as needed for responsiveness
    />
  </section>
);

export default PortfolioHeader;
