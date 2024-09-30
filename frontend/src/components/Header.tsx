import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import LogoImage from '/assets/logos/logo-colored-official.svg';
import { useTranslation } from 'react-i18next';
import LogoText from './LogoText';

const navItems = [
  { label: 'header.home', href: '/' },
  { label: 'header.about', href: '/about-us' },
  { label: 'header.portfolio', href: '/portfolio' }, // Added Portfolio link here
  { label: 'header.contact', href: '/contact-us' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Add types to href and event parameters
  const handleNavigation = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-pale-blue fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-5 lg:px-7">
        <div className="flex justify-between items-center py-4">

          {/* Logo Section for both desktop and mobile */}
          <div className="flex items-center space-x-2">
            <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
              {/* Adjust logo size for mobile */}
              <img src={LogoImage} alt="Stable Solutions" className="h-8 sm:h-7" />
              {/* Logo text only visible on desktop (md and above) */}
              <span className="hidden md:block text-xl sm:text-2xl font-bold text-dark-blue font-poppins font-extrabold ml-2">
                <LogoText />
              </span>
            </div>
          </div>

          {/* Mobile Menu: Contact Us, LanguageSwitcher, and Burger Menu */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Contact Us button for mobile, slightly reduced width */}
            <button
              onClick={() => navigate('/contact-us')}
              className="px-4 py-2 bg-olive-green text-white rounded-full text-sm sm:text-base font-poppins font-bold mx-auto"
              style={{ flexBasis: '65%' }}
            >
              {t('header.contactButton')}
            </button>

            {/* LanguageSwitcher for mobile */}
            <div className="flex-shrink-0 mx-2 mr-4">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Toggle stays on the right  Q: What is this?*/}
            <button onClick={toggleMenu} className="text-dark-blue hover:text-gray-900 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                {t(`${item.label.toLowerCase()}`)}
              </a>
            ))}
          </nav>

          {/* Right-aligned Contact Us Button and LanguageSwitcher for desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-4 py-2 bg-olive-green text-white rounded-full text-base font-poppins font-bold mr-4"
              style={{ width: '180px' }}
            >
              {t('header.contact')}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-pale-blue items-start">
          <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block w-[40%] mx-auto text-center px-3 py-4 bg-pale-blue rounded-3xl border-4 border-dark-blue border-dashed text-sm font-poppins font-bold text-dark-blue hover:text-olive-green"
                onClick={handleNavigation(item.href)}
                style={{
                  padding: '12px 16px', 
                  boxSizing: 'border-box', 
                }}
              >
                {t(`${item.label.toLowerCase()}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
