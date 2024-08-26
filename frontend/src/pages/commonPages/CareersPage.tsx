import { motion } from 'framer-motion';
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';

const CareersPage = () => {
    const { t } = useTranslation();

    const careersContent = [
        {
            type: 'header',
            content: t('careers.title'),
            description: t('careers.description'),
        },
        {
            type: 'section',
            title: t('careers.openPositionsTitle'),
            content: t('careers.openPositionsContent'),
        },
        {
            type: 'section',
            title: t('careers.benefitsTitle'),
            content: t('careers.benefitsContent'),
        },
        {
            type: 'section',
            title: t('careers.cultureTitle'),
            content: t('careers.cultureContent'),
        },
        // Add more sections as needed
    ];

    const renderContent = (item: any, index: any) => {
        switch (item.type) {
            case 'header':
                return (
                    <div key={index} className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {item.content}
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {item.description}
                        </motion.p>
                    </div>
                );
            case 'section':
                return (
                    <div key={index} className="mb-8">
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p
                            className="text-base sm:text-lg text-gray-600 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                        >
                            {item.content}
                        </motion.p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col">
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-green-100 p-4 sm:p-8 text-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={{ y: 0 }}
                    animate={{ y: -50 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
                {renderContent(careersContent[0], 0)}
            </div>

            <div className="p-4 sm:p-8 max-w-4xl mx-auto w-full">
                {careersContent.slice(1).map((item, index) => renderContent(item, index + 1))}
            </div>

            <Footer />
        </div>
    );
};

export default CareersPage;