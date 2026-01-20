import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';

const NewsTicker = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide on scroll down after a small threshold
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-0 left-0 right-0 z-[40] bg-blue-900 border-t border-blue-700 shadow-2xl"
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1 overflow-hidden">
                        <div className="flex items-center text-white font-bold whitespace-nowrap bg-blue-800 px-5 py-2 rounded text-base shadow-md">
                            <Bell size={20} className="mr-2 animate-pulse" />
                            Latest Updates
                        </div>
                        <div className="overflow-hidden relative flex-1">
                            <div className="animate-marquee whitespace-nowrap text-blue-100 text-xl font-medium">
                                <span className="mx-4">📢 Admission Open for 2026 Academic Year! Apply Now.</span>
                                <span className="mx-4">•</span>
                                <span className="mx-4">🏆 KSKCET Students win First Prize in National Hackathon.</span>
                                <span className="mx-4">•</span>
                                <span className="mx-4">📅 Upcoming Event: Tech Symposium on Feb 28th.</span>
                                <span className="mx-4">•</span>
                                <span className="mx-4">🎓 Placement Drive: Top MNCs recruiting this week.</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="ml-4 text-blue-300 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NewsTicker;
