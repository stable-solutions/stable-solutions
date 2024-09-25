import React from 'react';

const TeamHeader: React.FC = ()  => (
    <div className="flex flex-col items-center w-full space-y-3 pl-8 pr-6">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-poppins font-extrabold text-olive-green leading-snug md:leading-normal">
        Our Team
        </h1>
        <p className="text-5xl md:text-5xl text-dark-blue font-poppins font-extrabold mt-4 text-center">
        Teamwork makes the DREAM <br/> work:  Our Effort, Your Success
        </p>
    </div> 
);

export default TeamHeader;