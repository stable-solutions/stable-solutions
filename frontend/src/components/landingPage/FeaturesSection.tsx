import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-off-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="w-full md:w-3/5">
          <h1 className="text-4xl sm:text-4xl md:text-4xl font-poppins font-bold mb-4 text-dark-blue leading-tight">
            {t('landingpage.section2.line1')}
          </h1>
          <p className="text-xl md:text-xl font-poppins font-bold mb-8 text-dark-blue leading-normal">
            {t('landingpage.section2.line2')}
          </p>
        </div>

        {/* Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-4">
            <img src="/assets/landingpage/features-section/AI-features.svg" alt="AI tools icon" className="w-16 h-16" />
            <div>
              <h2 className="text-2xl md:text-2xl font-poppins font-bold text-dark-blue mb-2">{t('landingpage.section2.title1')}</h2>
              <p className="text-lg font-roboto text-dark-blue leading-normal">
                {t('landingpage.section2.line3')}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/assets/landingpage/features-section/design-features.svg" alt="Creative design icon" className="w-16 h-16" />
            <div>
              <h2 className="text-2xl md:text-2xl font-poppins font-bold text-dark-blue mb-2">{t('landingpage.section2.title2')}</h2>
              <p className="text-lg font-roboto text-dark-blue leading-normal">
                {t('landingpage.section2.line4')}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/assets/landingpage/features-section/fullservice-features.svg" alt="Digital full service icon" className="w-16 h-16" />
            <div>
              <h2 className="text-2xl md:text-2xl font-poppins font-bold text-dark-blue mb-2">{t('landingpage.section2.title3')}</h2>
              <p className="text-lg font-roboto text-dark-blue leading-normal">
                {t('landingpage.section2.line5')}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/assets/landingpage/features-section/relationships-features.svg" alt="Relationship forward icon" className="w-16 h-16" />
            <div>
              <h2 className="text-2xl md:text-2xl font-poppins font-bold text-dark-blue mb-2">{t('landingpage.section2.title4')}</h2>
              <p className="text-lg font-roboto text-dark-blue leading-normal">
                {t('landingpage.section2.line6')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturesSection;
