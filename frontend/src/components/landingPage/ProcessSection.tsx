import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';  // Using an icon from lucide-react

const ProcessSection: React.FC = () => {
  const navigate = useNavigate();

  // Function to navigate to the contact page (Get a Proposal)
  const handleProposalClick = () => {
    navigate('/contact-us');  // Assuming this is where users request proposals
  };

  return (
    <section className="bg-purple py-16 px-8 md:px-12 lg:px-16 w-full">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h3 className="text-white text-xl font-poppins font-bold">
          Our Process
        </h3>
        <h2 className="text-3xl sm:text-3xl md:text-3xl font-poppins font-extrabold leading-tight text-white mt-4">
          The Art of Crafting Great Software: <br />Our Development Process
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between md:gap-6"> {/* Adjusting spacing here */}
        {/* Left Column - Process Steps */}
        <div className="flex flex-col space-y-8 md:w-2/5 text-white md:ml-20 md:pr-0 mt-8 md:mt-12"> {/* Reducing width */}
          {/* Step 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-gray-300 text-6xl font-poppins font-bold italic">1</span>
            </div>
            <div className="ml-4">
              <h4 className="text-white text-2xl md:text-3xl font-poppins font-bold">Planning & Discovery</h4>
              <p className="text-sm md:text-lg text-white mt-2 font-roboto font-medium">
                This phase involves understanding your project needs and defining the scope.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex md:mt-8">
            <div className="flex-shrink-0">
              <span className="text-gray-300 text-6xl font-poppins font-bold italic">2</span>
            </div>
            <div className="ml-4">
              <h4 className="text-white text-2xl md:text-3xl font-poppins font-bold">Creating Design Strategy</h4>
              <p className="text-sm md:text-lg text-white mt-2 font-roboto font-medium">
                We define the design strategy and create UI/UX prototypes for your project.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex md:mt-8">
            <div className="flex-shrink-0">
              <span className="text-gray-300 text-6xl font-poppins font-bold italic">3</span>
            </div>
            <div className="ml-4">
              <h4 className="text-white text-2xl md:text-3xl font-poppins font-bold">Development & Refinement</h4>
              <p className="text-sm md:text-lg text-white mt-2 font-roboto font-medium">
                Our team builds, tests, and refines the solution, ensuring optimal performance.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex md:mt-8">
            <div className="flex-shrink-0">
              <span className="text-gray-300 text-6xl font-poppins font-bold italic">4</span>
            </div>
            <div className="ml-4">
              <h4 className="text-white text-2xl md:text-3xl font-poppins font-bold">Launch & Support</h4>
              <p className="text-sm md:text-lg text-white mt-2 font-roboto font-medium">
                We ensure a smooth launch and offer ongoing support for your solution.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image and Button */}
        <div className="flex flex-col items-center md:w-[45%] mt-12 md:mt-0 mx-auto md:mr-20"> {/* Reduced width and removed extra margin */}
          {/* Process Graphic */}
          <img 
            src="/assets/landingpage/process-section/graphics-process.svg" 
            alt="Process Graphics" 
            className="w-full h-auto max-h-[500px] object-contain mx-auto"  // Centered image
          />

          {/* Proposal Button */}
          <button 
            onClick={handleProposalClick}
            className="mt-6 px-8 py-3 bg-olive-green text-white rounded-full text-base sm:text-lg md:text-xl font-poppins font-semibold flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <span>Get a Proposal</span>
            <ArrowRight size={20} />  {/* Adding the arrow icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;