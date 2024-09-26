import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LogoImage from '/assets/logos/logo-white-lefttrans.svg';

// Define the navigation items
const navigation = {
    contactus: [
        { name: 'Contact Us', href: '/contact-us' },
    ],
    aboutus: [
        { name: 'Meet our Team', href: '/about-us' },
    ],
    company: [
        { name: 'Portfolio', href: '/portfolio' },
    ]
};

// Fixing the syntax of the Footer function component
const Footer: React.FC = () => {
    return (
        <footer className="bg-purple text-white py-4"> {/* Reduced padding-top and padding-bottom */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid layout for the footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left h-full"> {/* Align items toward the top */}
                    
                    {/* Logo and description */}
                    <div className="flex flex-col items-center justify-center h-full"> {/* Vertically centered logo */}
                        <img src={LogoImage} alt="Stable Solutions" className="h-20 mb-0 mx-0" />
                        
                        <h3 className="text-2xl font-poppins font-bold my-0 mt-0"> {/* Adjusted margin-top */}
                            <span className="text-white">Stable </span>
                            <span className="text-olive-green">Solutions</span>
                        </h3>

                        <p className="text-sm font-roboto font-bold mt-1 text-center">
                            The <span className="italic">one stop shop</span> for all your <br/> digital professional needs.
                        </p>

                        <div className="flex justify-center mt-2 space-x-4"> {/* Reduced margin-top */}
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-purple p-2 rounded-full hover:bg-olive-green">
                                <FaFacebookF className="text-white text-xl" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-purple p-2 rounded-full hover:bg-olive-green">
                                <FaInstagram className="text-white text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-purple p-2 rounded-full hover:bg-olive-green">
                                <FaLinkedinIn className="text-white text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* About Us Links */}
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8"> {/* Aligned toward the top */}
                        <h3 className="text-lg font-poppins font-semibold mb-2">About Us</h3>
                        <ul className="space-y-1">
                            {navigation.aboutus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8"> {/* Aligned toward the top */}
                        <h3 className="text-lg font-poppins font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Links */}
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8"> {/* Aligned toward the top */}
                        <h3 className="text-lg font-poppins font-semibold mb-2">Contact Us</h3>
                        <ul className="space-y-1">
                            {navigation.contactus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="mt-6 pt-4 border-t border-white text-center">
                    <p>&copy; {new Date().getFullYear()} Stable Solutions LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
