import { useTranslation } from 'react-i18next';

// Contact hero section component
const ContactHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-olive-green py-10 px-4 sm:px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section - Text Content */}
        <div className="text-left md:w-[45%] space-y-4">
          {/* Title */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-poppins font-bold leading-tight">
            {t('contactus.hero.title')}
          </h1>
  
          {/* Subtitle */}
          <p className="text-dark-blue text-md sm:text-lg md:text-lg font-poppins font-semibold">
            {t('contactus.hero.subtitle')}
          </p>
        </div>
  
        {/* Right Section - Contact Hero Image */}
        <div className="mt-6 md:mt-0 md:w-[40%] flex justify-center">
          <img 
            src="/assets/contactus/contacthero-contactus.svg" 
            alt={t('contactus.hero.imageAlt')}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto"  
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
