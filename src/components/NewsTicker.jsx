import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';

const NewsTicker = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const newsItems = [
        "📢 Admission Open for 2026 Academic Year! Apply Now.",
        "🏆 KSKCET Students win First Prize in National Hackathon.",
        "📅 Upcoming Event: Tech Symposium on Feb 28th.",
        "🎓 Placement Drive: Top MNCs recruiting this week."
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleEnableNotifications = () => {
        alert("✅ Notifications have been enabled!");
        setShowModal(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
                                <h3 className="font-bold text-lg flex items-center">
                                    <Bell className="mr-2" size={20} /> Latest Notifications
                                </h3>
                                <button onClick={() => setShowModal(false)}><X size={20} /></button>
                            </div>
                            <div className="p-6 space-y-4">
                                {newsItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start text-gray-700 border-b border-gray-100 pb-2 last:border-0">
                                        <span className="mr-3 mt-1 text-blue-600 text-xs">●</span>
                                        <span>{item.replace(/^[📢🏆📅🎓]\s*/, '')}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 px-6 py-4 flex justify-end">
                                <button
                                    onClick={handleEnableNotifications}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded shadow transition-colors"
                                >
                                    Enable Notifications
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <button
                                onClick={() => setShowModal(true)}
                                className="flex items-center text-white font-bold whitespace-nowrap bg-blue-800 hover:bg-blue-700 transition-colors px-5 py-2 rounded text-base shadow-md mr-6 relative z-10 cursor-pointer"
                            >
                                <Bell size={20} className="mr-2 animate-pulse" />
                                Latest Updates
                            </button>

                            <div className="overflow-hidden relative flex-1 mask-linear-fade">
                                <div className="animate-marquee whitespace-nowrap text-blue-100 text-xl font-medium flex items-center">
                                    {newsItems.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <span className="mx-8">{item}</span>
                                            <span className="mx-8">•</span>
                                        </React.Fragment>
                                    ))}
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
        </>
    );
};

export default NewsTicker;
