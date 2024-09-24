import React from 'react';
import { LogoText } from './branding/LogoText';
import LogoImage from '/assets/logos/logo-colored-official.svg';

// Define the navigation items
const navigation = {
    contactus: [
        { name: 'Contact Us', href: '/contact-us' },
    ],
    aboutus: [
        { name: 'Meet our Team', href: '/about-us' },
    ],
    services: [
        { name: "Portfolio", href: "/portfolio" },
    ]
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-purple text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0 flex flex-col items-center justify-center">
                        <div className="flex items-center scale-110">
                            <img src={LogoImage} alt="Stable Solutions" className="h-8 sm:h-7" />
                            <LogoText />
                        </div>
                        <h3 className="text-lg font-semibold mb-4">The one stop shop for all your digital professional needs.</h3>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <ul className="space-y-2">
                            {navigation.aboutus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-purple-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-purple-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <ul className="space-y-2">
                            {navigation.contactus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-purple-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p>&copy; {new Date().getFullYear()} Stable Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;