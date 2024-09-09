import React from 'react';
import { LogoText } from './branding/LogoText';

// Define the navigation items
const navigation = {
    resources: [
        { name: 'Blog', href: '/blog' },
    ],
    company: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Careers', href: '/careers' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0">
                        <LogoText />
                    <h3 className="text-lg font-semibold mb-4">Your Path to App Success</h3>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Resources</h3>
                        <ul className="space-y-2">
                            {navigation.resources.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-purple-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-purple-600">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            {navigation.company.map((item) => (
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