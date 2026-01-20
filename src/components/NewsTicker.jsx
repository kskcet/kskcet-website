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
                className="hidden lg:block fixed bottom-0 left-0 right-0 z-[40] bg-blue-900 border-t border-blue-700 shadow-2xl"
            >
                <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-6">
                    <div className="flex items-center flex-1 overflow-hidden">
                        <div className="flex items-center text-white font-bold whitespace-nowrap bg-blue-800 px-5 py-2 rounded text-base shadow-md mr-6 relative z-10">
                            <Bell size={20} className="mr-2 animate-pulse" />
                            Latest Updates
                        </div>

                        <div className="overflow-hidden relative flex-1 mask-linear-fade">
                            <div className="animate-marquee whitespace-nowrap text-blue-100 text-xl font-medium flex items-center">
                                <span className="mx-8">📢 Admission Open for 2026 Academic Year! Apply Now.</span>
                                <span className="mx-8">•</span>
                                <span className="mx-8">🏆 KSKCET Students win First Prize in National Hackathon.</span>
                                <span className="mx-8">•</span>
                                <span className="mx-8">📅 Upcoming Event: Tech Symposium on Feb 28th.</span>
                                <span className="mx-8">•</span>
                                <span className="mx-8">🎓 Placement Drive: Top MNCs recruiting this week.</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-blue-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full shrink-0 z-50 cursor-pointer"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NewsTicker;
