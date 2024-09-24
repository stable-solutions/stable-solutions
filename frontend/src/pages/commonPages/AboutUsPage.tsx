import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer'; // Assuming the Footer is in this location
import AboutSection from '../../components/aboutUs/AboutSection'
import TeamSection from '../../components/aboutUs/TeamSection'

const AboutUsPage = () => {
    return (
        <div className="pt-32 bg-pale-blue">
            <AboutSection />
            <TeamSection />
            <Footer />
        </div>
    );
};


export default AboutUsPage;
