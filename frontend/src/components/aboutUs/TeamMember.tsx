// TeamMember.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import the social icons

// TeamMember component
const TeamMember = ({ name, role, imgSrc }) => {
  return (
    <div className="mt-10 mr-10 relative w-48 h-62 bg-purple rounded-xl p-6 flex flex-col justify-end ">
      {/* Image positioned off-center */}
      <div className="absolute -top-16 -left-6">
        <img
          src={imgSrc}
          alt={`${name}'s picture`}
          className="w-[150px] h-[150px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-4 right-4 flex flex-col items-center space-y-2 text-white">
        <a href="#" className="hover:text-gray-300">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Text Content (name, role) */}
      <div className="mt-auto pt-24">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-gray-100">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
