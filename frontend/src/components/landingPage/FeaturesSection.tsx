import React from 'react';

const FeaturesSection: React.FC = () => (
  <div className="bg-off-white py-16 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto md:scale-75">
      {/* Main Heading */}
      <div className="w-full md:w-3/5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold mb-4 text-dark-blue leading-tight">
          The <em className="italic">one stop shop</em> for all your digital professional needs
        </h1>
        <p className="text-xl md:text-2xl font-poppins font-bold mb-8 text-dark-blue leading-normal">
          Transforming your business's digital capacities and online presence to reflect how awesome you are! 
          Meaningful results are our top priority at Stable Solutions.
        </p>
      </div>

      {/* Grid Layout for Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-start space-x-4">
          <img src="/assets/features-section/AI-features.svg" alt="AI tools icon" className="w-16 h-16" />
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-blue mb-2">Custom AI Tools</h2>
            <p className="text-lg font-roboto text-dark-blue leading-normal">
              Unlock the potential of artificial intelligence tailored specifically to your business needs.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="/assets/features-section/design-features.svg" alt="Creative design icon" className="w-16 h-16" />
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-blue mb-2">Creative Design</h2>
            <p className="text-lg font-roboto text-dark-blue leading-normal">
              Our team can help you blend the aesthetic with the technology, delivering stunning websites and engaging apps!
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="/assets/features-section/fullservice-features.svg" alt="Digital full service icon" className="w-16 h-16" />
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-blue mb-2">Digital Full Service</h2>
            <p className="text-lg font-roboto text-dark-blue leading-normal">
              Turn your visions into reality! From setting up your domain and business email, to design and development of your website or app, we do it all.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="/assets/features-section/relationships-features.svg" alt="Relationship forward icon" className="w-16 h-16" />
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-blue mb-2">Relationship Forward</h2>
            <p className="text-lg font-roboto text-dark-blue leading-normal">
              Strong relationships are the foundation of working together to understand your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
