import React from 'react';

const GenericPage = ({ title, subtitle, children, backgroundImage }) => {
    return (
        <div className="font-sans text-gray-800 pt-20"> {/* Added padding-top for fixed navbar */}
            {/* Banner - Flat & Clean */}
            <div className="relative h-[300px] w-full bg-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
                <img
                    src={backgroundImage || "/images/KSK/1-2.jpg"}
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/KSK/1-2.jpg";
                    }}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{title}</h1>
                        {subtitle && <p className="text-xl text-blue-200 font-light">{subtitle}</p>}
                        <div className="w-24 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                </div>
            </div>

            {/* Content Section - Flat & Standard */}
            <div className="container mx-auto px-6 py-16">
                <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-sm shadow-sm">
                    <div className="prose prose-lg max-w-none text-gray-600">
                        {children || (
                            <div className="space-y-4">
                                <p>Content for {title} will be updated shortly.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericPage;
