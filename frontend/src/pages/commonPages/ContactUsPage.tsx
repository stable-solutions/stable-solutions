import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer'; // Assuming the Footer is in this location
import ContactSection from '../../components/contactUs/ContactSection'


const ContactUsPage = () => {
    return (
        <div className="pt-32 p-6 bg-gray-100">
            <ContactSection />
            <Footer />
        </div>
    );
};


export default ContactUsPage;
