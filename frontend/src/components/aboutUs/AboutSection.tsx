import React from 'react';

const AboutSection: React.FC = ()  => (
    <section
        className="flex flex-col md:flex-row items-center justify-between mb-24 w-full md:w-[90%] mx-auto bg-pale-blue px-4 md:px-8 lg:px-16" // Adjusting padding for mobile friendliness
    >
        {/* Text Section */}
        <div className="flex flex-col items-start w-full space-y-3">
            <h2 className="text-olive-green text-3xl sm:text-3xl md:text-4xl font-poppins font-extrabold mb-8">About Us</h2> {/* Scaled down the font size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal">
                Meet the Faces of Stable <span className="text-olive-green">Solutions</span>: An Orchestra of Software Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-blue font-roboto font-medium mt-8 sm:mt-12 md:mt-16">
                Reach your Digital Professional Dreams,<br />
                Together with Stable Solutions
            </p>
        </div>

        {/* Image Section */}
        <img
            src="/assets/aboutus/puzzle-aboutus.svg"
            alt="Illustration of team collaboration"
            className="w-[80%] sm:w-[60%] md:w-[50%] h-auto mt-8 md:mt-0 md:ml-8 rounded-lg" // Scaled image based on screen size
        />
    </section>
);

export default AboutSection;
