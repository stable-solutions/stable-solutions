import React from 'react';
import { useTranslation } from 'react-i18next';

interface DottedFeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const DottedFeatureCard: React.FC<DottedFeatureCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-start border-dashed border-4 border-dark-blue rounded-2xl p-6 h-full transform duration-150 hover:border-purple bg-transparent">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12 mb-4" /> {/* Icon stays on top-left */}
        <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-dark-blue">
                {title}
            </h2>
            <p className="text-sm md:text-base font-roboto text-dark-blue"> {/* Roboto font for subtext */}
                {description}
            </p>
        </div>
    </div>
);

const DottedFeatureSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <DottedFeatureCard
                    icon="/assets/landingpage/capabilities-section/stack-capabilities.svg"
                    title={t('landingpage.capabilities.webdev.title')}
                    description={t('landingpage.capabilities.webdev.description')}
                />
                <DottedFeatureCard
                    icon="/assets/landingpage/capabilities-section/mobile-capabilities.svg"
                    title={t('landingpage.capabilities.mobiledev.title')}
                    description={t('landingpage.capabilities.mobiledev.description')}
                />
                <DottedFeatureCard
                    icon="/assets/landingpage/capabilities-section/desktop-capabilities.svg"
                    title={t('landingpage.capabilities.customdev.title')}
                    description={t('landingpage.capabilities.customdev.description')}
                />
                <DottedFeatureCard
                    icon="/assets/landingpage/capabilities-section/sparkle-capabilities.svg"
                    title={t('landingpage.capabilities.branding.title')}
                    description={t('landingpage.capabilities.branding.description')}
                />
            </div>
        </div>
    );
};

export default DottedFeatureSection;
