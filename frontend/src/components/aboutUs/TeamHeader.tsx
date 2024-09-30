import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamHeader: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center w-full space-y-3 pl-8 pr-6">
			<h1 className="text-2xl sm:text-2xl md:text-2xl font-poppins font-extrabold text-olive-green leading-snug md:leading-normal">
				{t('aboutus.teamHeader.title')}
			</h1>
			<p className="text-3xl md:text-3xl text-dark-blue font-poppins font-extrabold mt-4 text-center">
				{t('aboutus.teamHeader.subtitle')}
			</p>
		</div>
	);
};

export default TeamHeader;