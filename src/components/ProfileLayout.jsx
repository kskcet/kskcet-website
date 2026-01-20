import React from 'react';
import GenericPage from './GenericPage';

const ProfileLayout = ({ title, name, role, image, quote, children }) => {
    return (
        <GenericPage title={title} subtitle={name}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                    {/* Left Column: Avatar & Info */}
                    <div className="w-full md:w-1/3 flex flex-col items-center sticky top-24">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl relative z-10">
                                <img
                                    src={image || "/images/profile-placeholder.svg"}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/profile-placeholder.svg"; }}
                                    alt={name}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 bg-gray-100"
                                />
                            </div>
                        </div>

                        <div className="mt-8 text-center space-y-2">
                            <h3 className="text-2xl font-bold text-blue-900">{name}</h3>
                            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-800 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-blue-100">
                                {role}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Message Content */}
                    <div className="w-full md:w-2/3 space-y-8">
                        {quote && (
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 text-6xl text-blue-100 font-sans z-0">"</div>
                                <blockquote className="relative z-10 text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
                                    {quote}
                                </blockquote>
                            </div>
                        )}

                        <div className="prose prose-lg text-gray-600 text-justify leading-relaxed">
                            {children}
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex items-center justify-end">
                            <img src="/images/KSK/loga.png" alt="Signature" className="h-16 opacity-80 filter grayscale hover:grayscale-0 transition-all" />
                        </div>
                    </div>
                </div>
            </div>
        </GenericPage>
    );
};

export default ProfileLayout;
