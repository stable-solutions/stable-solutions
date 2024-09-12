import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, Settings, Brush } from 'lucide-react';
import Footer from '../../components/Footer';


const ContactUsPage = () => {
    return (
        <div className="pt-32 p-6 bg-gray-100">
            <AboutSection />
            <TeamSection />
            <CapabilitiesSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

const AboutSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center mb-12 w-full md:w-4/5 mx-auto"
    >
        <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-green-600 text-lg font-bold">About Us</h2>
            <h1 className="text-3xl font-bold text-blue-900">Meet the Faces of <span className="text-green-600">Stable Solutions</span>: An Orchestra of Software Development</h1>
            <p className="text-gray-600 mt-2">Reach your Digital Professional Dreams, Together with Stable Solutions</p>
        </div>
        <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://placehold.co/500x500"
            alt="Illustration of team collaboration"
            className="mt-6 md:mt-0 md:ml-6 rounded-lg shadow-lg md:w-1/2"
        />
    </motion.section>
);

const TeamSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12"
    >
        <h2 className="text-green-600 text-lg font-bold">Our Team</h2>
        <h1 className="text-2xl font-bold text-blue-900">Teamwork makes the DREAM work: Our Effort, Your Success</h1>
        <div className="flex flex-wrap justify-center mt-6 gap-6">
            {['Rafael', 'Malik Byrd', 'Diya Li'].map((name, index) => (
                <TeamMember key={index} name={name} role={['CEO & Co-founder', 'CSO & Co-founder', 'CTO & Co-founder'][index]} />
            ))}
        </div>
    </motion.section>
);

const TeamMember = ({ name, role }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-lg shadow-lg p-4"
    >
        <img src="https://placehold.co/150x150" alt={`Portrait of ${name}`} className="rounded-full mx-auto" />
        <h3 className="font-bold text-purple mt-4">{name}</h3>
        <p className="text-grep-100">{role}</p> {/* Inline style added */}
        <div className="flex justify-center mt-2 space-x-2">
            <a href="#" className="text-purple-700 hover:text-purple-500 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-purple-700 hover:text-purple-500 transition-colors"><i className="fab fa-instagram"></i></a>
        </div>
    </motion.div>
);

const CapabilitiesSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mb-12 w-4/5 mx-auto"
    >
        <h2 className="text-green-600 text-lg font-bold">Capabilities</h2>
        <h1 className="text-2xl font-bold text-blue-900">Cutting-Edge Technologies, Tailor-Made Solutions Services by Stable <span className="text-green-600">Solutions</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
                { icon: 'laptop-code', title: 'Website Development', description: 'Crafting tailor-made, responsive, and engaging websites that deliver compelling user experiences and drive business growth.' },
                { icon: 'mobile-alt', title: 'Mobile App Development', description: 'Designing feature-rich, intuitive, and secure mobile apps for iOS and Android platforms that resonate with user needs and expectations.' },
                { icon: 'cogs', title: 'Custom Software Development', description: 'Custom solutions for desktop, web, and mobile applications to meet unique business needs.' },
                { icon: 'paint-brush', title: 'Digital Branding & Aesthetics', description: 'Logos, designs, graphic art, and any other custom visuals that will take your brand to the next level.' }
            ].map((capability, index) => (
                <Capability key={index} {...capability} />
            ))}
        </div>
    </motion.section>
);

const icons = {
    'laptop-code': Laptop,
    'mobile-alt': Smartphone,
    'cogs': Settings,
    'paint-brush': Brush,
};

const Capability = ({ icon, title, description }) => {
    const IconComponent = icons[icon];
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
            <IconComponent className="text-4xl text-green-500" />
            <h3 className="text-blue-900 font-bold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2 text-center">{description}</p>
        </motion.div>
    );
};

const ContactSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mb-12 w-4/5 mx-auto bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
        <h2 className="text-green-600 text-lg font-bold">Contact Us</h2>
        <h1 className="text-2xl font-bold text-blue-900">Get in Touch with Stable <span className="text-green-600">Solutions</span></h1>
        <form className="mt-6 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded h-32"></textarea>
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

export default ContactUsPage;