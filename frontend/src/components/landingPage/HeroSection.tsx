import React from 'react';

const HeroSection: React.FC = () => (
    <div className="relative">
        <div className="relative h-auto md:h-[90vh] pt-16 md:pt-32 pb-20 md:pb-28 flex flex-col items-start justify-center bg-pale-blue text-left overflow-hidden px-6 md:px-12">
            {/* Container for the content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start w-full"> 
                
                {/* Text Section */}
                <div className="flex flex-col items-start w-full md:w-[50%] space-y-4 md:space-y-3 pl-0 md:pl-8 pr-0 md:pr-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal">
                        Elevate your Digital Professionalism with <span className="text-dark-blue">Stable&nbsp;</span><span className="text-olive-green">Solutions</span>
                    </h1>
                    <p className="text-md sm:text-lg md:text-2xl text-dark-blue font-poppins font-bold mt-4 md:mt-4">
                        Find solutions that align with your business goals and ensure high-quality results every time.
                    </p>

                    {/* Button and Arrow Section */}
                    <div className="w-full flex justify-start md:justify-start items-center mt-8 md:mt-10">
                        {/* Button */}
                        <button className="px-8 py-3 sm:px-10 sm:py-3 bg-olive-green text-white rounded-full text-sm sm:text-base md:text-lg font-poppins font-semibold">
                            Let's Talk!
                        </button>

                        {/* Arrow Image - Hidden on mobile */}
                        <img 
                            src="/assets/landingpage/hero-section/arrow-hero.svg" 
                            alt="arrow-hero" 
                            className="hidden md:block ml-4 sm:ml-6 w-24 sm:w-32 md:w-40 h-auto"
                        />
                    </div>
                </div>

                {/* Rocket Image Section */}
                <div className="flex justify-start w-full mt-8 md:mt-0 md:w-[50%]"> {/* Added container with justify-start */}
                    <img
                        src="/assets/landingpage/hero-section/rocket-hero.svg"
                        alt="rocket-hero"
                        className="w-3/4 sm:w-full h-auto mx-auto"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
