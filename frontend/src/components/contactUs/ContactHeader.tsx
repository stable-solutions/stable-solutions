import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full space-y-3 pl-8 pr-6 mt-24">
      {/* Title */}
      <h1 className="text-2xl sm:text-2xl md:text-2xl font-poppins font-bold text-olive-green leading-snug md:leading-normal">
        {t('contactus.header.title')}
      </h1>

      {/* Subtitle with conditional line break */}
      <p className="text-2xl md:text-2xl text-dark-blue font-poppins font-extrabold mt-16 text-center">
        {t('contactus.header.subtitle')}
        <span className="hidden md:inline"> <br /> </span>
        {t('contactus.header.subtitleContinued')}
      </p>
    </div>
  );
};

export default ContactHeader;
