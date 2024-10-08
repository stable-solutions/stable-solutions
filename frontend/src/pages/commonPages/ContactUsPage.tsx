import Footer from '../../components/Footer';
import ContactSection from '../../components/contactUs/ContactSection';
import ContactHero from '../../components/contactUs/ContactHero';
import ContactHeader from '../../components/contactUs/ContactHeader';

const ContactUsPage = () => {
    return (
        <div className="md:pt-16 bg-pale-blue">
            <ContactHero />
            <ContactHeader />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default ContactUsPage;
