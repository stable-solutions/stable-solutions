import React from 'react';

const PortfolioHero: React.FC = () => (
  <section className="bg-pale-blue py-12 px-4 sm:px-8 w-full md:w-[90%] mx-auto"> {/* Adjust width and center */}
    <div className="w-full mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:px-8 lg:px-16 md:mt-20"> {/* Added padding for alignment */}
      
      {/* Left Section - Text Content */}
      <div className="text-left md:w-[55%] space-y-4">
        {/* Results Header */}
        <h3 className="text-olive-green text-md sm:text-lg md:text-xl font-poppins font-bold">
          Our results
        </h3>
        
        {/* Title */}
        <h1 className="text-dark-blue text-xl sm:text-2xl md:text-3xl font-poppins font-extrabold leading-tight">
          From Idea to Reality: How <br />
          Stable <span className="text-olive-green">Solutions</span> Turns Vision into Results
        </h1>

        {/* Subtitle */}
        <p className="text-dark-blue text-sm sm:text-base md:text-lg font-poppins font-medium mt-4">
          Driving business growth is at the core of what we do at Stable Solutions, guiding you through 
          the modern landscape to broaden your reach and build lasting systems of success.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="mt-8 md:mt-0 md:w-[45%] flex justify-center md:mr-12">
        <img 
          src="/assets/portfolio/target-portfolio.svg"  // Make sure the correct file path is used
          alt="Target Portfolio Illustration"
          className="w-full max-w-[300px] md:max-w-[450px] h-auto"
        />
      </div>
    </div>
  </section>
);

export default PortfolioHero;
