import React from 'react';

// Contact hero section component
const ContactHeroSection = () => (
  <section className="bg-olive-green py-10 px-4 sm:px-6 w-full"> {/* Full width green background and reduced padding */}
    
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"> {/* Center content with auto margin */}
      
      {/* Left Section - Text Content */}
      <div className="text-left md:w-[45%] space-y-4"> {/* Reduced width and space */}
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-poppins font-bold leading-tight">
          Your Bridge to Success: Connect with us today and take your digital professionalism to the next level!
        </h1>

        {/* Subtitle */}
        <p className="text-dark-blue text-md sm:text-lg md:text-lg font-poppins font-semibold">
        We're more than ready to start a conversation about your project. We're committed to delivering high-quality, innovative solutions that meet your exact needs. Don't hesitate to reach out—let's shape the future of you online together!
        </p>
      </div>

      {/* Right Section - Contact Hero Image */}
      <div className="mt-6 md:mt-0 md:w-[40%] flex justify-center">
        {/* The image has been reduced in size */}
        <img 
          src="/assets/contactus/contacthero-contactus.svg" 
          alt="Contact Hero Illustration" 
          className="w-full max-w-[300px] md:max-w-[400px] h-auto"  
        />
      </div>
      
    </div>
    
  </section>
);

export default ContactHeroSection;
