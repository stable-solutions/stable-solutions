import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './branding/Logo';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { label: 'header.home', href: '/' },
  { label: 'header.about', href: '/about-us' },
  { label: 'header.contact', href: '/contact-us', isContact: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { t } = useTranslation();

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
          <div className="flex items-center">
            <div onClick={handleLogoClick} className="cursor-pointer">
              <Logo />
            </div>
          </div>
          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNavigation(item.href)}
                className={`text-dark-blue hover:text-olive-green px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200
                  ${item.isContact ? 'bg-olive-green text-white hover:bg-olive-green-dark rounded-full' : ''}`}
              >
                {t(item.label)}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleNavigation(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50
                    ${item.isContact ? 'bg-olive-green text-white hover:bg-olive-green-dark rounded-full' : ''}`}
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;