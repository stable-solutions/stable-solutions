import React from 'react';

const TeamHeader: React.FC = ()  => (
    <div className="flex flex-col items-center w-full space-y-3 pl-8 pr-6 mt-24">
        {/* Title */}
        <h1 className="text-2xl sm:text-2xl md:text-2xl font-poppins font-bold text-olive-green leading-snug md:leading-normal">
          Get in Touch
        </h1>

        {/* Subtitle with conditional line break */}
        <p className="text-2xl md:text-2xl text-dark-blue font-poppins font-extrabold mt-16 text-center">
          Your Gateway to Professionalism: Contact 
          <span className="hidden md:inline"> <br /> </span> {/* Line break only visible on medium screens and above */}
          Us and Unlock a World of Possibilities
        </p>
    </div> 
);

export default TeamHeader;
