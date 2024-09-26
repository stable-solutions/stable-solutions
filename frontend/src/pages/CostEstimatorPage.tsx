import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

interface FormData {
  industry: string;
  projectType: string;
  crossPlatform: boolean;
  includeAI: boolean;
  techStack: string[];
}

const CostEstimatorPage = () => {
  return (
    <div className="pt-32 p-6 bg-gray-100">
      <EstimatorSection />
      <Footer />
    </div>
  );
};

const EstimatorSection = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    projectType: '',
    crossPlatform: false,
    includeAI: false,
    techStack: [],
  });

  const techStackOptions = ['React', 'Vue', 'Angular', 'Django', 'FastAPI', 'Spring', 'AWS', 'Azure'];

  const handleCalculate = () => {
    // Calculation logic or API call here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === 'techStack') {
      const updatedTechStack = checked
        ? [...formData.techStack, value]
        : formData.techStack.filter((stack) => stack !== value);
      setFormData({
        ...formData,
        techStack: updatedTechStack,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 w-3/5 mx-auto bg-grey-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-green-600 text-lg font-bold">Cost Estimator</h2>
      <h1 className="text-2xl font-bold text-blue-900">
        Estimate Your Project Cost with <span className="text-green-600">Stable Solutions</span>
      </h1>
      <form className="mt-6 max-w-lg mx-auto">
        {step === 1 && (
          <div>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              type="button"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              Next
            </motion.button>
          </div>
        )}
        {step === 2 && (
          <div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="">Select Project Type</option>
              <option value="web">Web Page</option>
              <option value="app">App</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              type="button"
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mr-2"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              type="button"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              Next
            </motion.button>
          </div>
        )}
        {/* Repeat similar structure for step 3, 4, and 5 */}
      </form>
    </motion.section>
  );
};

export default CostEstimatorPage;
