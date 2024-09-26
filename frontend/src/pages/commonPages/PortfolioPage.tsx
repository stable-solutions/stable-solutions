import React from 'react';
import PortfolioImageGrid from '../../components/portfolio/PortfolioImageGrid';
import PortfolioHero from '../../components/portfolio/PortfolioHero';
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';

const PortfolioPage: React.FC = () => {
    return (
        <div className="flex-column bg-pale-blue mx-auto px-0 py-0 sm:px-0 lg:px-0 lg:py-0">
            <PortfolioHero />
            <PortfolioHeader />
            <PortfolioImageGrid />
        </div>
    );
};

export default PortfolioPage;
