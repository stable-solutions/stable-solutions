import React from 'react';
import PortfolioImageGrid from '../../components/portfolio/PortfolioImageGrid';
import PortfolioHero from '../../components/portfolio/PortfolioHero';
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';

const PortfolioPage: React.FC = () => {
    return (
        <div className="flex-column bg-pale-blue mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <PortfolioHero />
            <PortfolioHeader />
            <PortfolioImageGrid />
        </div>
    );
};

export default PortfolioPage;
