import React from 'react';
import { useTranslation } from 'react-i18next';

const GreenDivider: React.FC = () => {
    const { t } = useTranslation(); // Initialize translation

    return (
        <div className="w-full h-auto bg-olive-green py-12"> {/* Added py-12 for top/bottom padding */}
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
                {/* Flex column with spacing between title, logos, and accent image */}

                {/* Top Section - Our Partners Title */}
                <div className="flex flex-col items-center">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-roboto font-semibold">
                        {t('partners.ourPartners')}
                    </h3>
                    <img 
                        src="/assets/landingpage/greendivider-section/partnericon-greendivider.svg" 
                        alt="parnters-hand" 
                        className="h-12 md:h-12 lg:h-16 object-contain" 
                    />
                </div>

                {/* Logos Section - Logos with Padding and Rounded Dashed Border */}
                <div className="flex justify-center items-center space-x-8 w-full p-4">
                    {/* Flexbox for partner logos centered horizontally */}

                    {/* Cami Studios Partner */}
                    <div className="flex flex-col items-center p-4 md:p-6 lg:p-12 rounded-full bg-white/10 hover:bg-white/20">
                        <a href="https://www.cami.studio" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/assets/logos/partners/camistudios-partner.svg" 
                                alt="Cami Studios Partner Logo" 
                                className="h-20 md:h-32 lg:h-40 object-contain"
                            />
                        </a>
                    </div>

                    {/* Tapia 4 Services Partner */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-12 rounded-full bg-white/10 hover:bg-white/20">
                        <a href="https://www.tapia4service.com" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/assets/logos/partners/tapia4services-partner.svg" 
                                alt="Tapia 4 Services Partner Logo" 
                                className="h-20 md:h-32 lg:h-40 object-contain"
                            />
                        </a>
                    </div>

                    {/* Scaling Kingdoms Partner */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-8 rounded-full bg-white/10 hover:bg-white/20">
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
