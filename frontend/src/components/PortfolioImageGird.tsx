import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

interface PortfolioImageGridProps {
    images: { src: string; fullSizeSrc: string; alt: string; title: string; description: string }[];
}

const PortfolioImageGrid: React.FC<PortfolioImageGridProps> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const handlePrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="relative">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${selectedImageIndex !== null ? 'blur-sm' : ''}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setSelectedImageIndex(index)}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{image.title}</h2>
                            <p className="text-gray-600">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImageIndex !== null && (
                <ImageViewer
                    src={images[selectedImageIndex].fullSizeSrc}
                    alt={images[selectedImageIndex].alt}
                    title={images[selectedImageIndex].title}  // Pass the title
                    onClose={() => setSelectedImageIndex(null)}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            )}
        </div>
    );
};

export default PortfolioImageGrid;