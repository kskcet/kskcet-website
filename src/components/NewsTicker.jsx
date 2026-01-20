import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, Trophy, Briefcase, Megaphone, CheckCircle } from 'lucide-react';

const NewsTicker = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const newsItems = [
        { type: 'admission', text: "Admission Open for 2026 Academic Year! Apply Now." },
        { type: 'achievement', text: "KSKCET Students win First Prize in National Hackathon." },
        { type: 'event', text: "Upcoming Event: Tech Symposium on Feb 28th." },
        { type: 'placement', text: "Placement Drive: Top MNCs recruiting this week." }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'admission': return <Megaphone size={18} className="text-orange-500" />;
            case 'achievement': return <Trophy size={18} className="text-yellow-500" />;
            case 'event': return <Calendar size={18} className="text-blue-500" />;
            case 'placement': return <Briefcase size={18} className="text-green-500" />;
            default: return <Bell size={18} className="text-gray-500" />;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsVisible(false);
            else setIsVisible(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleEnableNotifications = () => {
        setNotificationsEnabled(true);
        setTimeout(() => {
            alert("✅ Notifications Enabled! You will receive updates.");
            setShowModal(false);
        }, 800);
    };

    if (!isVisible) return null;

    return (
        <>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modern Header */}
                            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-5 flex justify-between items-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
                                <div>
                                    <h3 className="font-bold text-xl flex items-center tracking-tight">
                                        <Bell className="mr-2" size={22} /> Notification Center
                                    </h3>
                                    <p className="text-blue-200 text-xs mt-1">Stay updated with the latest campus news</p>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors relative z-10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Notifications List */}
                            <div className="p-4 bg-gray-50/50 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                <div className="space-y-3">
                                    {newsItems.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-default flex items-start gap-4"
                                        >
                                            <div className="p-2 bg-gray-50 rounded-full shrink-0">
                                                {getIcon(item.type)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 text-sm leading-snug">
                                                    {item.text}
                                                </h4>
                                                <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">
                                                    {item.type}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer / Action */}
                            <div className="p-5 border-t border-gray-100 bg-white items-center flex justify-between">
                                <span className="text-xs text-gray-400 font-medium">
                                    {notificationsEnabled ? "Updates enabled" : "Don't miss out on updates"}
                                </span>
                                <button
                                    onClick={handleEnableNotifications}
                                    disabled={notificationsEnabled}
                                    className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 ${notificationsEnabled
                                            ? "bg-green-100 text-green-700 cursor-default shadow-none"
                                            : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/30"
                                        }`}
                                >
                                    {notificationsEnabled ? (
                                        <>
                                            <CheckCircle size={16} className="mr-2" /> Enabled
                                        </>
                                    ) : (
                                        "Enable Notifications"
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-[40] bg-blue-900 border-t border-blue-700 shadow-2xl"
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
                                            <span className="mx-8">{item.text}</span>
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
