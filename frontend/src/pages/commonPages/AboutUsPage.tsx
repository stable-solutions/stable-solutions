import Footer from '../../components/Footer'; // Assuming the Footer is in this location
import AboutSection from '../../components/aboutUs/AboutSection';
import TeamSection from '../../components/aboutUs/TeamSection';
import TeamHeader from '../../components/aboutUs/TeamHeader';
import CapabilitiesSection from '../../components/landingPage/CapabilitiesSection';

const AboutUsPage = () => {
    return (
        <div className="pt-32 bg-pale-blue">
            <AboutSection />
            <TeamHeader />
            <TeamSection />
            <CapabilitiesSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
