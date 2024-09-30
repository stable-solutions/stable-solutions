import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LogoImage from '/assets/logos/logo-white-lefttrans.svg';
import LogoText from './LogoText';
import { useTranslation, Trans } from 'react-i18next';

// Define the navigation items
const navigation = {
    contactus: [
        { name: 'footer.contactus', href: '/contact-us' },
    ],
    aboutus: [
        { name: 'footer.meetourteam', href: '/about-us' },
    ],
    company: [
        { name: 'footer.portfolio', href: '/portfolio' },
    ]
};

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-purple text-white py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left h-full">
                    
                    {/* Logo and description */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <img src={LogoImage} alt="Stable Solutions" className="h-20 mb-0 mx-0" />
                        
                        <h3 className="text-2xl font-poppins font-bold my-0 mt-0">
                            <LogoText />
                        </h3>

                        <p className="text-sm font-roboto font-bold mt-1 text-center">
                            <Trans i18nKey="footer.description">
                                The <strong>one stop shop</strong> for all your <br/> <strong>digital professional needs</strong>.
                            </Trans>
                        </p>

                        <div className="flex justify-center mt-2 space-x-4">
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
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8">
                        <h3 className="text-lg font-poppins font-semibold mb-2">{t('footer.aboutus')}</h3>
                        <ul className="space-y-1">
                            {navigation.aboutus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{t(item.name)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8">
                        <h3 className="text-lg font-poppins font-semibold mb-2">{t('footer.company')}</h3>
                        <ul className="space-y-1">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{t(item.name)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Links */}
                    <div className="flex flex-col items-center md:items-center justify-start h-full md:mt-8">
                        <h3 className="text-lg font-poppins font-semibold mb-2">{t('footer.contactus')}</h3>
                        <ul className="space-y-1">
                            {navigation.contactus.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-olive-green font-poppins">{t(item.name)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="mt-6 pt-4 border-t border-white text-center">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
