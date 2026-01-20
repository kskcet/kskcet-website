import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Code, Layers, Zap, Smartphone, CheckCircle, Monitor, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            title: "KSKCET Digital Campus",
            subtitle: "A Next-Generation Institutional Web Platform",
            content: (
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <Monitor size={64} className="text-white" />
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl text-center">
                        Bridging the gap between traditional education and modern digital experiences.
                        A fully responsive, interactive, and premium web application.
                    </p>
                </div>
            ),
            bg: "from-slate-900 to-slate-800"
        },
        {
            id: 2,
            title: "The Problem & Solution",
            subtitle: "Why this upgrade was necessary",
            content: (
                <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
                    <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20">
                        <h3 className="text-2xl font-bold text-red-400 mb-4">Old Standard</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3"><X size={20} className="text-red-500" /> Static, unengaging content</li>
                            <li className="flex items-center gap-3"><X size={20} className="text-red-500" /> Poor mobile responsiveness</li>
                            <li className="flex items-center gap-3"><X size={20} className="text-red-500" /> Difficult to navigation</li>
                            <li className="flex items-center gap-3"><X size={20} className="text-red-500" /> outdated design language</li>
                        </ul>
                    </div>
                    <div className="bg-green-500/10 p-8 rounded-2xl border border-green-500/20">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">New Experience</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500" /> Dynamic & Interactive (React)</li>
                            <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500" /> Mobile-First & Zoom Safe</li>
                            <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500" /> Premium "Glassmorphism" UI</li>
                            <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500" /> Real-time Notifications</li>
                        </ul>
                    </div>
                </div>
            ),
            bg: "from-slate-900 to-blue-900"
        },
        {
            id: 3,
            title: "Technical Architecture",
            subtitle: "Built with a modern, scalable stack",
            content: (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
                    {[
                        { icon: Code, title: "React JS", desc: "Component Based UI", color: "text-blue-400", border: "border-blue-500/30" },
                        { icon: Layers, title: "Tailwind CSS", desc: "Utility-First Styling", color: "text-cyan-400", border: "border-cyan-500/30" },
                        { icon: Zap, title: "Framer Motion", desc: "High-Performance Animation", color: "text-purple-400", border: "border-purple-500/30" },
                        { icon: Smartphone, title: "Responsive", desc: "Mobile to 4K Support", color: "text-pink-400", border: "border-pink-500/30" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 bg-white/5 backdrop-blur-sm rounded-xl border ${item.border} flex flex-col items-center text-center`}
                        >
                            <item.icon size={48} className={`mb-4 ${item.color}`} />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            ),
            bg: "from-slate-900 to-purple-900"
        },
        {
            id: 4,
            title: "Key Features",
            subtitle: "Innovation in every detail",
            content: (
                <div className="space-y-6 w-full max-w-4xl">
                    {[
                        { title: "Smart Notification System", desc: "Real-time updates with modal integration for admissions and news." },
                        { title: "Dynamic Recruiting Slider", desc: "Infinite scroll ticker showcasing top recruiters." },
                        { title: "Video Integration", desc: "Immersive background video that scales perfectly across devices." },
                        { title: "Zoom-Safe Layout", desc: "Intelligent breakpoints (2XL) to handle 150-175% browser zoom." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition border-l-4 border-blue-500"
                        >
                            <div className="mt-1"><CheckCircle size={20} className="text-blue-400" /></div>
                            <div>
                                <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ),
            bg: "from-slate-900 to-indigo-900"
        },
        {
            id: 5,
            title: "Ready for Deployment",
            subtitle: "Scalable, Maintainable, Professional",
            content: (
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Thank You
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition transform hover:scale-105 flex items-center gap-2"
                    >
                        Launch Live Demo <ChevronRight size={20} />
                    </button>
                </div>
            ),
            bg: "from-black to-slate-900"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') navigate('/');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);

    return (
        <div className={`h-screen w-full overflow-hidden bg-gradient-to-br ${slides[currentSlide].bg} transition-colors duration-700`}>
            {/* Navigation Controls */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
                <div className="text-white/50 text-sm font-mono tracking-widest">
                    KSKCET PRESENTATION MODE
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="text-white/50 hover:text-white transition flex items-center gap-2"
                >
                    <span className="text-sm">EXIT</span> <X size={20} />
                </button>
            </div>

            <div className="relative h-full w-full flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center w-full max-w-6xl"
                    >
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-white text-center mb-4 tracking-tight"
                        >
                            {slides[currentSlide].title}
                        </motion.h1>

                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-blue-300 text-center mb-12 font-light tracking-wide uppercase"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-full flex justify-center"
                        >
                            {slides[currentSlide].content}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Bar & Arrows */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center gap-6 z-50">
                <div className="flex items-center gap-8">
                    <button onClick={prevSlide} className="p-3 rounded-full hover:bg-white/10 text-white transition">
                        <ChevronLeft size={32} />
                    </button>
                    <div className="flex gap-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="p-3 rounded-full hover:bg-white/10 text-white transition">
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPresentation;
