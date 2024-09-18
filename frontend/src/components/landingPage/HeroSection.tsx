import React from 'react';

const HeroSection: React.FC = () => (
    <div className="relative">
        <div className="relative h-[90vh] pt-32 pb-28 flex flex-col items-start justify-center bg-pale-blue text-left overflow-hidden px-6 md:px-12">
            {/* Container for the content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start w-full"> {/* Changed to justify-start */}
                
                {/* Text Section */}
                <div className="flex flex-col items-start w-full md:w-[50%] space-y-3 pl-8 pr-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal">
                        Elevate your Digital Professionalism with <span className="text-dark-blue">Stable&nbsp;</span><span className="text-olive-green">Solutions</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-dark-blue font-poppins font-bold mt-4">
                        Find solutions that align with your business goals and ensure high-quality results every time.
                    </p>

                    {/* Button and Arrow Section */}
                    <div className="w-full flex justify-start md:justify-start items-center mt-10 ml-20">
                        {/* Button */}
                        <button className="px-10 py-3 bg-olive-green text-white rounded-full text-base md:text-lg font-poppins font-semibold">
                            Let's Talk!
                        </button>

                        {/* Arrow Image - Hidden on mobile */}
                        <img 
                            src="/assets/hero-section/arrow-hero.svg" 
                            alt="arrow-hero" 
                            className="hidden md:block ml-6 w-40 h-auto"
                        />
                    </div>
                </div>

                {/* Rocket Image Section */}
                <div className="flex justify-start w-full md:w-[50%]"> {/* Added container with justify-start */}
                    <img
                        src="/assets/hero-section/rocket-hero.svg"
                        alt="rocket-hero"
                        className="w-full h-auto mt-6 md:mt-0"  // Brought closer to text and adjusted width
                    />
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
