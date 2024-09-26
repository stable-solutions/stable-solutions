import React from 'react';

const ContactSection = () => (
  <section className="bg-pale-blue py-10 px-4 sm:px-6">
    <div className="w-full lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-[35%,65%] gap-6">
      
      {/* Left Section - Contact Information */}
      <div className="bg-purple text-white p-6 space-y-6 rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-none">
        
        {/* Office Address */}
        <div className="border border-white border-3 rounded-lg p-4 space-y-3">
          <h3 className="text-md font-poppins font-bold">Office Address</h3>
          <div className="flex items-start space-x-3">
            {/* SVG Icon for Address */}
            <div className="w-10 h-10 flex-shrink-0">
              <img src="/assets/contactus/mapicon-contactus.svg" alt="Map Icon" className="w-full h-full" />
            </div>
            <p className="font-poppins text-md">
              255 S Orange Ave <br /> 
              Suite 104 #1765 <br /> 
              Orlando, FL 32801 USA
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="border border-white border-3 rounded-lg p-4 space-y-3">
          <h3 className="text-md font-poppins font-bold">Phone Number</h3>
          <div className="flex items-start space-x-3">
            {/* SVG Icon for Phone */}
            <div className="w-10 h-10 flex-shrink-0">
              <img src="/assets/contactus/phoneicon-contactus.svg" alt="Phone Icon" className="w-full h-full" />
            </div>
            <p className="font-poppins text-md">+1 407-451-8193</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="border border-white border-3 rounded-lg p-4 space-y-3">
        <h3 className="text-md font-poppins font-bold">Email Us</h3>
        <div className="flex items-start space-x-3">
            {/* SVG Icon for Email */}
            <div className="w-10 h-10 flex-shrink-0">
            <img src="/assets/contactus/emailicon-contactus.svg" alt="Email Icon" className="w-full h-full" />
            </div>

            {/* Display unbroken email on mobile and broken email on desktop */}
            <p className="font-poppins text-md">
            {/* Unbroken email for mobile */}
            <span className="block md:hidden">support@stablesolutions.pro</span>

            {/* Broken email for desktop (md and above) */}
            <span className="hidden md:block">
                support<br />
                @stablesolutions.pro
            </span>
            </p>
        </div>
        </div>

      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-pale-blue rounded-lg p-6">
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourname">
              Your Name
            </label>
            <input
              id="yourname"
              type="text"
              placeholder="Enter your name"
              className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="youremail">
              Your Email
            </label>
            <input
              id="youremail"
              type="email"
              placeholder="Enter your email address"
              className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourphone">
              Your Phone
            </label>
            <input
              id="yourphone"
              type="text"
              placeholder="Enter your phone number"
              className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
              required
            />
          </div>

          {/* Business Field */}
          <div>
            <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourbusiness">
              Your Business
            </label>
            <input
              id="yourbusiness"
              type="text"
              placeholder="Enter your business"
              className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourmessage">
              Your Message :)
            </label>
            <textarea
              id="yourmessage"
              rows="4"
              placeholder="Enter your message"
              className="w-full border-2 border-dashed border-dark-blue rounded-lg px-3 py-1 placeholder-gray-500 font-poppins text-sm"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-olive-green text-white py-2 px-6 rounded-full font-poppins font-semibold text-sm hover:bg-green-600 transition"
          >
            Submit Now
            <span className="ml-2">➔</span>
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
