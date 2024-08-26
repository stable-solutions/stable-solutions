import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import SelectPopUp from './SelectPopUp';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'zh', label: '简体中文' },
        // Add more languages as needed
    ];

    return (
        <>
            <button
                className="flex items-center space-x-1 text-white hover:text-gray-800"
                onClick={() => setIsOpen(true)}
            >
                <Globe size={20} />
                <span>{i18n.language.toUpperCase()}</span>
            </button>

            <SelectPopUp
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSelect={changeLanguage}
                options={languageOptions}
                title={t('popup.selectLanguage')}
            />
        </>
    );
};

export default LanguageSwitcher;