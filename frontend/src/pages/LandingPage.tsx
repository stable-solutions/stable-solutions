import React from 'react';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturesSection from '../components/landingPage/FeaturesSection';
import CapabilitiesSection from '../components/landingPage/CapabilitiesSection';
import GreenDivider from '../components/landingPage/GreenDivider';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Green Bar Section */}
            <GreenDivider />

            {/* Capabilities Section */}
            <CapabilitiesSection />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default LandingPage;
