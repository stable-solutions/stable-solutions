import React from 'react';
import PortfolioImageGrid from '../../components/PortfolioImageGird';

const images = [
    {
        src: 'https://via.placeholder.com/600x400',
        fullSizeSrc: 'https://via.placeholder.com/600x1201',
        alt: 'Project 1',
        title: 'Project 1',
        description: 'This is the description for Project 1.'
    },
    {
        src: 'https://via.placeholder.com/600x400',
        fullSizeSrc: 'https://via.placeholder.com/600x1202',
        alt: 'Project 2',
        title: 'Project 2',
        description: 'This is the description for Project 2.'
    },
    {
        src: 'https://via.placeholder.com/600x400',
        fullSizeSrc: 'https://via.placeholder.com/600x1203',
        alt: 'Project 3',
        title: 'Project 3',
        description: 'This is the description for Project 3.'
    }]

const PortfolioPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-dark-blue mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to our portfolio page! Here you can find a selection of our recent projects and works.
            </p>
            <PortfolioImageGrid images={images} />
        </div>
    );
};

export default PortfolioPage;
