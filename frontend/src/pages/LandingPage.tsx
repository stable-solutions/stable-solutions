import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import { LogoText } from "../components/branding/LogoText";
import { useTranslation } from 'react-i18next';
import FeatureSection from '../components/landingPage/FeatureSection';


export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="relative h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-8 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight whitespace-nowrap"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('landingpage.section1.line1')}
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('landingpage.section1.line2')}
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LogoText />
            </motion.h1>
          </div>
          <motion.img
            src="https://placehold.co/300x300"
            alt="Your Image"
            className="w-full h-auto rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
        <motion.button
          className="px-8 py-3 bg-green-800 text-white rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>

      <div className="bg-[#fffbeb] py-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
              The one stop shop for all your digital professional needs
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-medium mb-8 text-gray-600">
              Transforming your business's digital capacities and online presence to reflect how awesome you are! Meaningful results is our top priority at Stable Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <img src="https://placehold.co/64x64" alt="AI tools icon" className="mr-4" />
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-gray-800">
                  Custom AI Tools
                </h2>
                <p className="text-base md:text-lg lg:text-lg text-gray-600">
                  Unlock the potential of artificial intelligence tailored specifically for your business needs. Together we can find focus on success to ensure your life easier.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="https://placehold.co/64x64" alt="Creative design icon" className="mr-4" />
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-gray-800">
                  Creative Design
                </h2>
                <p className="text-base md:text-lg lg:text-lg text-gray-600">
                  Our team can help you bring big aesthetics with the technology, delivering stunning websites and engaging apps like you’ve never seen before.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="https://placehold.co/64x64" alt="Digital full service icon" className="mr-4" />
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-gray-800">
                  Digital Full Service
                </h2>
                <p className="text-base md:text-lg lg:text-lg text-gray-600">
                  Turn your vision into reality! From setting up your digital presence to managing your online reputation, we’ve got you covered.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="https://placehold.co/64x64" alt="Relationship forward icon" className="mr-4" />
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-gray-800">
                  Relationship Forward
                </h2>
                <p className="text-base md:text-lg lg:text-lg text-gray-600">
                  Strong relationships are the foundation of success. We prioritize building lasting connections with our clients to ensure that their long-term goals are met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-10 bg-green-700"></div>


      <div className="bg-[#fffbeb] py-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
              Capabilities
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-medium mb-8 text-gray-600">
              Cutting-Edge Technologies, Tailor-Made Solutions Services By <LogoText />
            </p>
          </div>
          
          <FeatureSection />


        </div>
      </div>



      <Footer />

    </div>
  );
}