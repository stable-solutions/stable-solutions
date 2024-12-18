import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section className="flex flex-col md:flex-row items-center justify-between mb-24 w-full md:w-full lg:max-w-7xl mx-auto bg-pale-blue px-4 md:px-0 lg:px-16">
			{/* Text Section */}
			<div className="flex flex-col items-start w-full space-y-3">
				<h2 className="text-olive-green text-2xl sm:text-2xl md:text-2xl font-poppins font-extrabold md:mb-8 md:ml-20">
					{t('aboutus.title')}
				</h2>
				<h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-poppins font-extrabold text-dark-blue leading-snug md:leading-normal md:ml-20">
					{t('aboutus.subtitle', { company: 'Stable Solutions' })}
				</h1>
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-blue font-roboto font-medium mt-8 sm:mt-12 md:mt-16 md:ml-20">
					{t('aboutus.description')}
				</p>
			</div>

			{/* Image Section */}
			<img
				src="/assets/aboutus/puzzle-aboutus.svg"
				alt={t('aboutus.imageAlt')}
				className="w-[80%] sm:w-[60%] md:w-[50%] h-auto mt-8 md:mr-20 md:mt-0 md:ml-8 rounded-lg item-start"
			/>
		</section>
	);
};

export default AboutSection;
