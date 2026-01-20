import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay, but only once per session
        const hasSeenPopup = sessionStorage.getItem('hasSeenEventPopup');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('hasSeenEventPopup', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                            <h3 className="text-lg font-bold flex items-center">
                                <Calendar className="mr-2" size={20} /> Upcoming Event
                            </h3>
                            <button
                                onClick={closePopup}
                                className="p-1 hover:bg-blue-700 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body - Placeholder Image or Content */}
                        <div className="p-0">
                            <img
                                src="/images/KSK/WhatsApp-Image-2025-03-25-at-15.49.32_e72c20f1.jpg"
                                alt="Event Banner"
                                className="w-full h-auto object-cover max-h-[400px]"
                            />
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Admissions Open 2024-25</h4>
                                <p className="text-gray-600 mb-6">
                                    Join KSK College of Engineering and Technology. Enroll now for a bright future.
                                </p>
                                <div className="flex gap-4 justify-center">
                                    <Link
                                        to="/admission"
                                        onClick={closePopup}
                                        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Apply Now
                                    </Link>
                                    <button
                                        onClick={closePopup}
                                        className="px-6 py-2 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EventPopup;
