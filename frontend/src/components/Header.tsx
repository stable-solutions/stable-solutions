import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

// Add the import for your logo here, adjust the path according to your project structure
import LogoImage from '/assets/logos/logo-colored-official.svg'; // <-- Add the correct path to your logo file here

const navItems = [
  { label: 'Home', href: '/' },  // Directly using "Home" instead of translation
  { label: 'About Us', href: '/about-us' },  // Hardcoded "About Us" instead of using translation
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { t } = useTranslation(); // Translation hook, though we're bypassing it for "About Us"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href) => (event) => {
    event.preventDefault();
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate(isSignedIn ? '/home' : '/');
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-5 lg:px-7">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
              {/* Render the Logo here */}
              <img src={LogoImage} alt="Stable Solutions" className="h-8 sm:h-10 mr-2" />  {/* Adjusted the height to be smaller */}
              
              {/* "Stable Solutions" Text */}
              <span className="text-2xl sm:text-3xl font-bold text-dark-blue font-poppins font-extrabold">
                Stable Solutions
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex flex-grow justify-center space-x-6 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNavigation(item.href)}
                className={`text-dark-blue hover:text-olive-green px-3 py-2 rounded-md text-lg font-poppins font-bold
                  ${item.isContact ? 'bg-olive-green text-dark-blue rounded-full' : ''}`}
              >
                {item.label} {/* Display "Home" and "About Us" directly */}
              </a>
            ))}
            {/* Adjust the LanguageSwitcher size */}
            <div className="text-sm">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Right-aligned Contact Us Button */}
          <div className="hidden md:block">
            <button
              className="px-8 py-3 bg-olive-green text-white rounded-full text-lg font-poppins font-bold"
              style={{ width: '200px' }}  // Making the button longer
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNavigation(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-poppins
                  ${item.isContact ? 'bg-olive-green text-dark-blue hover:bg-olive-green-dark rounded-full' : ''}`}
              >
                {item.label} {/* Display "Home" and "About Us" directly */}
              </a>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
