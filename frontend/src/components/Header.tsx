import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import LogoImage from '/assets/logos/logo-colored-official.svg';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Cost Estimator', href: '/cost-estimator' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

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

          {/* Logo Section for both desktop and mobile */}
          <div className="flex items-center space-x-2">
            <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
              {/* Adjust logo size for mobile */}
              <img src={LogoImage} alt="Stable Solutions" className="h-8 sm:h-7" />
              {/* Logo text only visible on desktop (md and above) */}
              <span className="hidden md:block text-xl sm:text-2xl font-bold text-dark-blue font-poppins font-extrabold ml-2">
                Stable Solutions
              </span>
            </div>
          </div>

          {/* Mobile Menu: Contact Us, LanguageSwitcher, and Burger Menu */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Contact Us button for mobile, slightly reduced width */}
            <button
              onClick={handleNavigation('/contact-us')}
              className="px-4 py-2 bg-olive-green text-white rounded-full text-sm sm:text-base font-poppins font-bold mx-auto"
              style={{ flexBasis: '65%' }}  // Slightly reduced width to make space
            >
              Contact Us
            </button>

            {/* LanguageSwitcher for mobile */}
            <div className="flex-shrink-0 mx-2 mr-4"> {/* Added more right margin */}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Toggle stays on the right */}
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Centered Navigation Items for desktop */}
          <nav className="hidden md:flex justify-center space-x-6 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNavigation(item.href)}
                className="text-dark-blue hover:text-olive-green px-2 py-1 rounded-md text-base font-poppins font-bold"
              >
                {item.label}
              </a>
            ))}
            <div className="text-xs">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Right-aligned Contact Us Button for desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleNavigation('/contact-us')}
              className="px-4 py-2 bg-olive-green text-white rounded-full text-base font-poppins font-bold" style={{ marginRight: '20px', width: '160px' }}>
              Contact Us
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
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-poppins"
                onClick={handleNavigation(item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 text-xs">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
