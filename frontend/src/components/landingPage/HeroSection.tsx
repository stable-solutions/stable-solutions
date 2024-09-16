import React from 'react';

const HeroSection: React.FC = () => (
    <div className="relative" style={{ transform: 'scale(0.75)', transformOrigin: 'top center' }}>
        <div className="relative h-[90vh] pt-40 pb-32 flex flex-col items-start justify-center bg-pale-blue text-left overflow-hidden px-10">
            {/* Container for the content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
                
                {/* Text Section */}
                <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal">
                        Elevate your Digital Professionalism with <span className="text-dark-blue">Stable</span> <span className="text-olive-green">Solutions</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dark-blue mt-6">
                        Find solutions that align with your business goals and ensure high-quality results every time.
                    </p>
                    <div className="w-full flex justify-center">
                        <button className="px-12 py-4 bg-olive-green text-white rounded-full text-lg md:text-xl font-poppins font-semibold mt-8">
                            Let's Talk!
                        </button>
                    </div>
                </div>

                {/* Rocket Image Section */}
                <img
                    src="/assets/hero-section/rocket-hero.svg"
                    alt="rocket-hero"
                    className="w-full max-w-[600px] h-auto md:max-w-[600px] mt-8 md:mt-0 md:ml-6"
                />
            </div>
        </div>
    </div>
);

export default HeroSection;
