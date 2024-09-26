import React from 'react';

interface ImageViewerProps {
    src: string;
    alt: string;
    title: string;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, title, onClose, onNext, onPrevious }) => {

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 overflow-y-scroll"
            onClick={handleBackgroundClick}
        >
            <div className="relative w-full h-full flex flex-col items-center justify-start">
                {/* Title */}
                <div className="text-white text-center mt-4">{title}</div>

                {/* Image */}
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-3/4 max-w-5xl h-auto mt-4"  // Adjust width to 3/4, max width for larger screens
                    style={{ objectFit: 'contain' }}  // Maintain aspect ratio and fit within the container
                />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-4 text-white text-2xl"
                >
                    &times;
                </button>

                {/* Previous and Next Buttons */}
                <button
                    onClick={onPrevious}
                    className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                >
                    &#9664;
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default ImageViewer;
