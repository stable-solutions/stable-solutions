import React, { useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import Footer from "../components/Footer";
import { LogoText } from "../components/branding/LogoText";
import { useTranslation } from 'react-i18next';


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
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bring Your Ideas
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              to Life with
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LogoText />
            </motion.h1>
          </div>
          <motion.img
            src="https://example.com/your-image.jpg"
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

      <Footer />

    </div>
  );
}