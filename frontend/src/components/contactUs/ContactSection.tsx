import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendEmail } from './sendEmail.ts';  // Import the email logic

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    yourname: '',
    youremail: '',
    yourphone: '',
    yourbusiness: '',
    yourmessage: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await sendEmail(formData);  // Call the sendEmail function from the new file
      setSubmitted(true);
    } catch (error) {
      setError(true);
    }
  };

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
                {(t('contactus.address', { returnObjects: true }) as string[]).map((line: string, index: number) => (
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
          {submitted ? (
            <p className="text-olive-green font-poppins font-medium text-lg">Thank you for contacting us! We will get back to you soon.</p>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-dark-blue font-poppins font-semibold text-sm" htmlFor="yourname">
                  {t('contactus.form.name')}
                </label>
                <input
                  id="yourname"
                  type="text"
                  value={formData.yourname}
                  onChange={handleChange}
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
                  value={formData.youremail}
                  onChange={handleChange}
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
                  value={formData.yourphone}
                  onChange={handleChange}
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
                  value={formData.yourbusiness}
                  onChange={handleChange}
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
                  value={formData.yourmessage}
                  onChange={handleChange}
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
          )}
          {error && <p className="text-red-500 font-poppins">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
