import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const HeroSection: React.FC = () => {
  const navigate = useNavigate();  // Initialize navigation

  // Function to handle navigation to the contact us page
  const handleContactClick = () => {
    navigate('/contact-us');  // Navigate to contact-us page
  };

  return (
    <div className="relative">
      <div className="relative h-auto md:h-auto pt-2 md:pt-20 pb-20 md:pb-12 flex flex-col items-start justify-center bg-pale-blue text-left overflow-hidden px-6 md:px-12">
        {/* Container for the content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start w-full mt-12 md:mt-2"> 
            
          {/* Text Section */}
          <div className="flex flex-col items-start w-full md:w-[50%] space-y-4 md:space-y-3 pl-0 md:pl-0 md:pr-0 md:ml-40">
            <h1 className="text-4xl sm:text-4xl md:text-4xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal ">
              Elevate your Digital Professionalism with <span className="text-dark-blue">Stable&nbsp;</span><span className="text-olive-green">Solutions</span>
            </h1>
            <p className="text-lg sm:text-lg md:text-2xl text-dark-blue font-roboto font-bold mt-4 md:mt-4 lg:mt-40">
              Find solutions that align with your business goals and ensure high-quality results every time.
            </p>

            {/* Button and Arrow Section */}
            <div className="w-full flex justify-start md:justify-start items-center mt-8 md:mt-12 ">
              {/* Button - added onClick to navigate */}
              <button 
                onClick={handleContactClick}  // Set button to navigate to contact-us
                className="px-8 py-3 sm:px-10 sm:py-3 bg-olive-green text-white rounded-full text-sm sm:text-base md:text-lg font-poppins font-semibold"
              >
                Let's Talk!
              </button>

              {/* Arrow Image - Hidden on mobile */}
              <img 
                src="/assets/landingpage/hero-section/arrow-hero.svg" 
                alt="arrow-hero" 
                className="hidden md:block ml-4 sm:ml-4 w-24 sm:w-8 md:w-40 h-auto"
              />
            </div>
          </div>

          {/* Rocket Image Section */}
          <div className="flex justify-start items-star w-3/4 mt-8 md:mt-4 md:w-[50%] md:pl-0 md:ml-0 md:mr-44">
            <img
              src="/assets/landingpage/hero-section/phonerocketv3-hero.svg"
              alt="rocket-hero"
              className="w-full md:w-full h-auto mx-auto items-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
