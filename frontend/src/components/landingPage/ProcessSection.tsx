import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';  // Using an icon from lucide-react
import { useTranslation } from 'react-i18next';  // Import useTranslation hook

const ProcessSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();  // Initialize the t function

  // Function to navigate to the contact page (Get a Proposal)
  const handleProposalClick = () => {
    navigate('/contact-us');  // Assuming this is where users request proposals
  };

  return (
    <section className="bg-purple py-12 px-4 sm:px-6 md:px-12 w-full">
      {/* Header Section */}
      <div className="w-full md:max-w-7xl mx-auto text-center mb-8">
        <h3 className="text-white text-lg sm:text-xl font-poppins font-medium">
          {t('landingpage.process.subtitle')}
        </h3>
        <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold leading-tight text-white mt-2">
          {t('landingpage.process.title')}
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left Column - Process Steps */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2 text-white mt-4 md:mt-12">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex md:mt-8 items-start">
              <div className="flex-shrink-0">
                <span className="text-gray-300 text-[70px] sm:text-[80px] md:text-[60px] font-poppins font-bold italic leading-none">
                  {step}
                </span>
              </div>
              <div className="ml-4 sm:ml-6 md:ml-8">
                <h4 className="text-white text-2xl sm:text-3xl lg:text-xl font-poppins font-bold mb-2">
                  {t(`landingpage.process.step${step}.title`)}
                </h4>
                <p className="sm:text-md md:text-md text-white mt-1 font-poppins font-medium leading-relaxed">
                  {t(`landingpage.process.step${step}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Image and Button */}
        <div className="flex flex-col justify-between items-center w-full md:w-[45%] mt-8 md:mt-20 mx-auto h-auto md:h-full">
          {/* Process Graphic */}
          <img 
            src="/assets/landingpage/process-section/graphics-process.svg" 
            alt={t('landingpage.process.imageAlt')}
            className="w-full h-auto max-h-[400px] md:max-h-[660px] md:flex-grow object-contain mx-auto"  // Adjusted heights for mobile and md+
          />

          {/* Proposal Button */}
          <button 
            onClick={handleProposalClick}
            className="mt-6 md:mt-12 px-8 py-3 bg-olive-green text-white rounded-full text-base sm:text-lg md:text-xl font-poppins font-bold flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <span>{t('landingpage.process.proposalButton')}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
