import React from 'react';

interface ImageViewerProps {
    src: string;
    alt: string;
    title: string;  // Add title prop
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, title, onClose, onNext, onPrevious }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}  // Close on clicking the blur area
        >
            <div
                className="relative"
                onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside
            >
                <div className="flex flex-col items-center justify-center">
                    <div className="text-white text-center mt-20 absolute">{title}</div>
                    <img src={src} alt={alt} className="max-w-full max-h-full" />
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-4 text-white text-2xl"
                >
                    &times;
                </button>
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