import React from 'react';

const AboutSection = () => (
    <section
        className="flex flex-col md:flex-row items-center justify-between mb-12 w-full md:w-[90%] mx-auto bg-pale-blue"
    >
        {/* Text Section */}
        <div className="flex flex-col items-start w-full space-y-3">
            <h2 className="text-olive-green text-3xl font-poppins font-extrabold">About Us</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal">
                Meet the Faces of Stable <span className="text-olive-green">Solutions</span>: An Orchestra of Software Development
            </h1>
            <p className="text-lg md:text-2xl text-dark-blue font-roboto font-medium mt-16">
                Reach your Digital Professional Dreams,<br />
                Together with Stable Solutions
            </p>
        </div>

        {/* Image Section */}
        <img
            src="/assets/aboutus/puzzle-aboutus.svg"
            alt="Illustration of team collaboration"
            className="w-full h-auto ml-8 mr-8 mt-8 md:mt-0 md:ml-8 rounded-lg"
        />
    </section>
);

export default AboutSection;
