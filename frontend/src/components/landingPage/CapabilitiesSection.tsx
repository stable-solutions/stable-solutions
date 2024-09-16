import React from 'react';
import DottedFeatureSection from './DottedFeatureSection';

const CapabilitiesSection: React.FC = () => (
  <div className="relative bg-off-white flex justify-center items-center overflow-hidden">
    {/* Wrapper with scaling applied */}
    <div className="transform scale-75" style={{ width: '100%', height: '100%', maxWidth: '100%' }}>
      {/* Reduce padding-top (py-16 -> py-8) */}
      <div className="py-2 px-4 sm:px-2">
        {/* Smaller Capabilities Header - reduced size by 15% */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-poppins font-semibold mb-4 text-dark-blue">
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
    </div>
  </div>
);

export default CapabilitiesSection;
