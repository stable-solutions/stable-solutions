import React from 'react';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturesSection from '../components/landingPage/FeaturesSection';
import CapabilitiesSection from '../components/landingPage/CapabilitiesSection';
import ProcessSection from '../components/landingPage/ProcessSection';
import PortfolioSection from '../components/landingPage/PortfolioSection';
import GreenDivider from '../components/landingPage/GreenDivider';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col space-y-0"> {/* Added space-y-0 to remove default space between sections */}
            {/* Hero Section */}
            <div className="-mb-2"> {/* Using negative margin to reduce space between sections */}
                <HeroSection />
            </div>

            {/* Features Section */}
            <div className="-mb-2">
                <FeaturesSection />
            </div>

            {/* Green Bar Section */}
            <div className="-mb-2">
                <GreenDivider />
            </div>

            {/* Capabilities Section */}
            <div className="-mb-2">
                <CapabilitiesSection />
            </div>

            <div className="-mb-2">
                <ProcessSection />
            </div>

            <div className="-mb-2">
                <PortfolioSection />
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default LandingPage;
