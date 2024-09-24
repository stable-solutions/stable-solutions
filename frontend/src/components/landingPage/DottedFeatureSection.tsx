import React from 'react';

const DottedFeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-start border-dashed border-4 border-dark-blue rounded-2xl p-6 h-full transform  duration-150 hover:border-purple bg-transparent">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12 mb-4" /> {/* Icon stays on top-left */}
        <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-dark-blue">
                {title}
            </h2>
            <p className="text-sm md:text-base font-roboto text-dark-blue"> {/* Roboto font for subtext */}
                {description}
            </p>
        </div>
    </div>
);

const DottedFeatureSection = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DottedFeatureCard
                icon="/assets/landingpage/capabilities-section/stack-capabilities.svg"
                title="Website Development"
                description="Crafting tailor-made, responsive, and engaging websites that deliver compelling user experiences and drive business growth."
            />
            <DottedFeatureCard
                icon="/assets/landingpage/capabilities-section/mobile-capabilities.svg"
                title="Mobile App Development"
                description="Designing feature-rich, intuitive, and secure mobile apps for iOS and Android platforms that resonate with user needs and expectations."
            />
            <DottedFeatureCard
                icon="/assets/landingpage/capabilities-section/desktop-capabilities.svg"
                title="Custom Software Development"
                description="Custom solutions for desktop, web, and mobile applications to meet unique business needs."
            />
            <DottedFeatureCard
                icon="/assets/landingpage/capabilities-section/sparkle-capabilities.svg"
                title="Digital Branding & Aesthetics"
                description="Logos, designs, graphic art, and any other custom visuals that will take your brand to the next level."
            />
        </div>
    </div>
);

export default DottedFeatureSection;
