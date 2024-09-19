import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const CostEstimatorPage = () => {
    return (
        <div className="pt-32 p-6 bg-gray-100">
            <EstimatorSection />
            <Footer />
        </div>
    );
};

const EstimatorSection = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        industry: '',
        projectType: '',
        crossPlatform: false,
        includeAI: false,
        techStack: [],
    });

    const techStackOptions = [
        'React', 'Vue', 'Angular', 'Django', 'FastAPI',
        'Spring', 'Spring Boot', 'AWS', 'Azure'
    ];

    const handleCalculate = (e) => {
        
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'techStack') {
            let updatedTechStack = [...formData.techStack];
            if (checked) {
                updatedTechStack.push(value);
            } else {
                updatedTechStack = updatedTechStack.filter(stack => stack !== value);
            }
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
            <h1 className="text-2xl font-bold text-blue-900">Estimate Your Project Cost with <span className="text-green-600">Stable Solutions</span></h1>
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
                            {/* Add more options as needed */}
                        </select>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
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
                            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mr-2"
                        >
                            Back
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                        >
                            Next
                        </motion.button>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                name="crossPlatform"
                                checked={formData.crossPlatform}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Cross Platform
                        </label>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevStep}
                            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mr-2"
                        >
                            Back
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                        >
                            Next
                        </motion.button>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                name="includeAI"
                                checked={formData.includeAI}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Include AI
                        </label>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevStep}
                            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mr-2"
                        >
                            Back
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                        >
                            Next
                        </motion.button>
                    </div>
                )}
                {step === 5 && (
                    <div>
                        <p className="mb-4">Select Tech Stack:</p>
                        {techStackOptions.map((tech) => (
                            <label key={tech} className="block mb-2">
                                <input
                                    type="checkbox"
                                    name="techStack"
                                    value={tech}
                                    checked={formData.techStack.includes(tech)}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                {tech}
                            </label>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevStep}
                            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors mr-2"
                        >
                            Back
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCalculate}
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                        >
                            Calculate Cost
                        </motion.button>
                    </div>
                )}
            </form>
        </motion.section>
    );
};

export default CostEstimatorPage;
