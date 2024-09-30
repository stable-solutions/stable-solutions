import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-pale-blue py-10 px-4 sm:px-6">
      <div className="w-full lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-[35%,65%] gap-6 mb-20">
        
        {/* Left Section - Contact Information */}
        <div className="bg-purple text-white p-6 space-y-6 rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-none">
          
          {/* Office Address */}
          <div className="border border-white border-3 rounded-lg p-4 space-y-3">
            <h3 className="text-md font-poppins font-bold">{t('contactus.officeAddress')}</h3>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img src="/assets/contactus/mapicon-contactus.svg" alt={t('contactus.mapIconAlt')} className="w-full h-full" />
              </div>
              <p className="font-poppins text-md">
                {t('contactus.address', { returnObjects: true }).map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
  
          {/* Phone Number */}
          <div className="border border-white border-3 rounded-lg p-4 space-y-3">
            <h3 className="text-md font-poppins font-bold">{t('contactus.phoneNumber')}</h3>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img src="/assets/contactus/phoneicon-contactus.svg" alt={t('contactus.phoneIconAlt')} className="w-full h-full" />
              </div>
              <p className="font-poppins text-md">{t('contactus.phone')}</p>
            </div>
          </div>
  
          {/* Email Us */}
          <div className="border border-white border-3 rounded-lg p-4 space-y-3">
            <h3 className="text-md font-poppins font-bold">{t('contactus.emailUs')}</h3>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img src="/assets/contactus/emailicon-contactus.svg" alt={t('contactus.emailIconAlt')} className="w-full h-full" />
              </div>
              <p className="font-poppins text-md break-all overflow-hidden">
                {t('contactus.email')}
              </p>
            </div>
          </div>
        </div>
  
        {/* Right Section - Contact Form */}
        <div className="bg-pale-blue rounded-lg p-6">
          <form className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourname">
                {t('contactus.form.name')}
              </label>
              <input
                id="yourname"
                type="text"
                placeholder={t('contactus.form.namePlaceholder')}
                className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
                required
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="youremail">
                {t('contactus.form.email')}
              </label>
              <input
                id="youremail"
                type="email"
                placeholder={t('contactus.form.emailPlaceholder')}
                className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
                required
              />
            </div>
  
            {/* Phone Field */}
            <div>
              <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourphone">
                {t('contactus.form.phone')}
              </label>
              <input
                id="yourphone"
                type="text"
                placeholder={t('contactus.form.phonePlaceholder')}
                className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
                required
              />
            </div>
  
            {/* Business Field */}
            <div>
              <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourbusiness">
                {t('contactus.form.business')}
              </label>
              <input
                id="yourbusiness"
                type="text"
                placeholder={t('contactus.form.businessPlaceholder')}
                className="w-full h-10 border-2 border-dashed border-dark-blue rounded-full px-3 placeholder-gray-500 font-poppins text-sm"
                required
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourmessage">
                {t('contactus.form.message')}
              </label>
              <textarea
                id="yourmessage"
                rows={4}
                placeholder={t('contactus.form.messagePlaceholder')}
                className="w-full border-2 border-dashed border-dark-blue rounded-lg px-3 py-1 placeholder-gray-500 font-poppins text-sm"
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-olive-green text-white py-2 px-6 rounded-full font-poppins font-semibold text-sm hover:bg-pale-blue hover:text-olive-green transition"
            >
              {t('contactus.form.submitButton')}
              <span className="ml-2">➔</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;