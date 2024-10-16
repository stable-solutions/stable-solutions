import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const GreenDivider: React.FC = () => {
    const { t } = useTranslation(); // Initialize translation

    // State to track when the section is in view
    const [inView, setInView] = useState(false);
    const logosRef = useRef<HTMLDivElement>(null); // Reference for logos section

    // Intersection Observer to trigger animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true); // Set state to true when in view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (logosRef.current) {
            observer.observe(logosRef.current);
        }

        return () => {
            if (logosRef.current) {
                observer.unobserve(logosRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full h-auto bg-olive-green py-12"> {/* Added padding */}
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
                {/* Title Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-roboto font-semibold">
                        {t('partners.ourPartners')}
                    </h3>
                    <img 
                        src="/assets/landingpage/greendivider-section/partnericon-greendivider.svg" 
                        alt="partners-hand" 
                        className="h-12 md:h-12 lg:h-16 object-contain" 
                    />
                </div>

                {/* Logos Section with Staggered Animation */}
                <div 
                    ref={logosRef} // Reference for Intersection Observer
                    className="flex justify-center items-center space-x-8 w-full p-4"
                >
                    {/* Cami Studios Partner */}
                    <div
                        className={`flex flex-col items-center p-4 md:p-6 lg:p-12 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-21000 ease-out ${
                            inView ? 'opacity-100 translate-y-0 delay-[0ms]' : 'opacity-0 translate-y-20'
                        }`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <a href="https://www.cami.studio" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/assets/logos/partners/camistudios-partner.svg" 
                                alt="Cami Studios Partner Logo" 
                                className="h-20 md:h-32 lg:h-40 object-contain"
                            />
                        </a>
                    </div>

                    {/* Tapia 4 Services Partner */}
                    <div
                        className={`flex flex-col items-center p-3 md:p-6 lg:p-12 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-700 ease-out ${
                            inView ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <a href="https://www.tapia4service.com" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/assets/logos/partners/tapia4services-partner.svg" 
                                alt="Tapia 4 Services Partner Logo" 
                                className="h-20 md:h-32 lg:h-40 object-contain"
                            />
                        </a>
                    </div>

                    {/* Scaling Kingdoms Partner */}
                    <div
                        className={`flex flex-col items-center p-3 md:p-6 lg:p-8 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-700 ease-out ${
                            inView ? 'opacity-100 translate-y-0 delay-[300ms]' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <img 
                            src="/assets/logos/partners/scalingkingdoms-partner.svg" 
                            alt="Scaling Kingdoms Partner Logo" 
                            className="h-24 md:h-32 lg:h-40 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenDivider;
