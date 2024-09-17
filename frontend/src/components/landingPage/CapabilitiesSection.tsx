import React from 'react';
import DottedFeatureSection from './DottedFeatureSection';

const CapabilitiesSection: React.FC = () => (
  <div className="bg-off-white py-16 px-4 sm:px-8">
    {/* Removed scaling */}
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-2xl md:text-2xl font-poppins font-semibold mb-4 text-dark-blue">
        Capabilities
      </h1>
    </div>

    {/* Subheader with increased line spacing and 7/10 width */}
    <div className="max-w-6xl mx-auto">
      <p className="text-3xl sm:text-4xl md:text-4xl font-poppins font-extrabold text-dark-blue leading-loose mb-8 sm:w-full md:w-3/5">
        Cutting-Edge Technologies, Tailor-Made Solutions Services by <span className="text-olive-green">Stable Solutions</span>
      </p>
    </div>

    {/* Include the Dotted Feature Section */}
    <DottedFeatureSection />
  </div>
);

export default CapabilitiesSection;
