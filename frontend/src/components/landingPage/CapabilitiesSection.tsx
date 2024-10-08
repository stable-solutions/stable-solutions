import React from 'react';
import DottedFeatureSection from './DottedFeatureSection';
import { useTranslation } from 'react-i18next';
import LogoText from '../LogoText';

const CapabilitiesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-off-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-2xl md:text-2xl font-poppins font-semibold mb-4 text-dark-blue">
          {t('landingpage.section3.title')}
        </h1>
      </div>

      {/* Adjusted line height based on screen size */}
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl sm:text-3xl md:text-3xl font-poppins font-extrabold text-dark-blue leading-tight sm:leading-snug md:leading-snug mb-4 sm:w-full md:w-3/5">
          {t('landingpage.section3.line1')} <LogoText />
        </div>
      </div>

      {/* Include the Dotted Feature Section */}
      <DottedFeatureSection />
    </div>
  );
};

export default CapabilitiesSection;
