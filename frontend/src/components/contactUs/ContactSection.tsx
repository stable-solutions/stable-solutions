import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mb-12 w-4/5 mx-auto bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
        <h2 className="text-green-600 text-lg font-bold">Contact Us</h2>
        <h1 className="text-2xl font-bold text-blue-900">Get in Touch with Stable <span className="text-green-600">Solutions</span></h1>
        
        {/* Contact Form */}
        <form className="mt-6 max-w-lg mx-auto">
            <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-2 mb-4 border rounded"
            />
            <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 mb-4 border rounded" 
            />
            <textarea 
                placeholder="Your Message" 
                className="w-full p-2 mb-4 border rounded h-32"
            ></textarea>
            
            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
                Send Message
            </motion.button>
        </form>
    </motion.section>
);

export default ContactSection;
