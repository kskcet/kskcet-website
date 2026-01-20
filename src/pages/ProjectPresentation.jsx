import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Code, Layers, Zap, Smartphone, CheckCircle, Monitor, X, ArrowRight, Layout, Globe, Server, Database, AlertCircle, Shield, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            title: "KSKCET Web Portal 2.0",
            subtitle: "Engineering the Future of Institutional Digital Presence",
            content: (
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
                        <div className="relative w-72 h-72 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden ring-1 ring-white/20">
                            <div className="absolute inset-0 bg-[url('/images/banners/college_banner.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                            <Monitor size={96} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-blue-600 px-6 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-white font-mono text-sm font-bold">LIVE BUILD</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 max-w-2xl w-full text-center">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-blue-400">React</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Core Engine</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-purple-400">Modern</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Architecture</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-green-400">Fast</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Performance</p>
                        </div>
                    </div>
                </div>
            ),
            bg: "from-slate-950 via-slate-900 to-blue-950"
        },
        {
            id: 2,
            title: "The Challenge: Legacy Systems",
            subtitle: "Identifying the bottlenecks in the previous architecture",
            content: (
                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 text-red-500/10 rotate-12">
                            <AlertCircle size={200} />
                        </div>
                        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                            <X className="border-2 border-red-500 rounded-full p-1" size={32} />
                            Problem Statement
                        </h3>
                        <ul className="space-y-4 text-gray-300 relative z-10">
                            <li className="flex items-start gap-4">
                                <span className="text-red-500 font-mono">01.</span>
                                <div>
                                    <strong className="text-red-200 block">Static Content</strong>
                                    <span className="text-sm opacity-70">Hardcoded HTML pages requiring manual updates for every small change.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-red-500 font-mono">02.</span>
                                <div>
                                    <strong className="text-red-200 block">Non-Responsive</strong>
                                    <span className="text-sm opacity-70">Broken layout on mobile devices and high-zoom accessibility modes.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-red-500 font-mono">03.</span>
                                <div>
                                    <strong className="text-red-200 block">Zero Interactivity</strong>
                                    <span className="text-sm opacity-70">Lack of engaging elements like dynamic sliders or notifications.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full aspect-video bg-gray-800 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center mb-4 group">
                            <div className="text-center">
                                <Globe size={48} className="text-gray-600 mx-auto mb-2 group-hover:text-gray-500 transition" />
                                <span className="text-gray-500 text-sm font-mono uppercase">Snapshot: Old kskcet.edu.in</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-400 text-sm italic">
                            "The previous website served information but failed to deliver an experience."
                        </p>
                    </div>
                </div>
            ),
            bg: "from-slate-950 to-red-950/30"
        },
        {
            id: 3,
            title: "Visual Transformation",
            subtitle: "A Complete UI/UX Overhaul",
            content: (
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-6xl h-[500px]">
                    {/* Split Screen Container */}
                    <div className="flex-1 bg-gray-900 border-r border-gray-700 relative overflow-hidden group">
                        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-red-400 font-bold text-xs uppercase border border-red-500/30">Before</div>
                        <div className="h-full w-full flex items-center justify-center bg-gray-800/50 grayscale opacity-50 group-hover:opacity-100 transition duration-500">
                            <div className="text-center p-8">
                                <Layout size={64} className="mx-auto mb-4 text-gray-500" />
                                <h4 className="text-gray-400 font-mono">Standard Bootstrap Grid</h4>
                                <p className="text-gray-600 text-sm mt-2">Boxy, Cluttered, Text-Heavy</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>

                    <div className="flex-1 bg-slate-900 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 z-10 bg-blue-600/20 backdrop-blur px-3 py-1 rounded text-blue-300 font-bold text-xs uppercase border border-blue-500/30">After</div>
                        <div className="h-full w-full bg-[url('/images/banners/college_banner.jpg')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                                    <h4 className="text-white font-bold text-xl mb-2">Glassmorphism UI</h4>
                                    <p className="text-blue-200 text-sm">Depth, Hierarchy, and Focus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            bg: "from-slate-900 to-slate-800"
        },
        {
            id: 4,
            title: "Tech Stack: React.js",
            subtitle: "Why we chose a Component-Based Architecture",
            content: (
                <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl items-center">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Code size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Reusability</h3>
                                <p className="text-gray-400">Built modular components (Navbar, Footer, Cards) appearing across 20+ pages without code duplication.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Layers size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Virtual DOM</h3>
                                <p className="text-gray-400">Ensures blazing fast updates by only re-rendering changed elements, not the whole page.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Zap size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Single Page Application (SPA)</h3>
                                <p className="text-gray-400">No page reloads. Transitions are instant, providing an app-like feel.</p>
                            </div>
                        </div>
                    </div>

                    {/* Code Mockup */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 p-0 overflow-hidden shadow-2xl font-mono text-xs md:text-sm relative group transform hover:scale-105 transition duration-500">
                        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-500 ml-2">Navbar.jsx</span>
                        </div>
                        <div className="p-6 text-blue-300 overflow-x-auto">
                            <p><span className="text-purple-400">const</span> <span className="text-yellow-300">Navbar</span> = () ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                            <p className="pl-8 text-white">{'<'}<span className="text-green-400">motion.nav</span></p>
                            <p className="pl-12 text-cyan-300">initial<span className="text-white">=</span>{'{'}{'{'} y: -100 {'}'}{'}'}</p>
                            <p className="pl-12 text-cyan-300">animate<span className="text-white">=</span>{'{'}{'{'} y: 0 {'}'}{'}'}</p>
                            <p className="pl-12 text-cyan-300">className<span className="text-white">=</span><span className="text-orange-300">"fixed w-full z-50..."</span></p>
                            <p className="pl-8 text-white">/{'>'}</p>
                            <p className="pl-4">);</p>
                            <p>{'};'}</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            ),
            bg: "from-slate-950 to-blue-950"
        },
        {
            id: 5,
            title: "Tech Stack: Tailwind CSS",
            subtitle: "Utility-First Design System",
            content: (
                <div className="flex flex-col items-center w-full max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-12">
                        <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center hover:border-cyan-400 transition cursor-pointer">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-3"></div>
                            <span className="text-cyan-400 font-bold">Colors</span>
                        </div>
                        <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center hover:border-purple-400 transition cursor-pointer">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">Aa</div>
                            <span className="text-purple-400 font-bold">Typography</span>
                        </div>
                        <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center hover:border-green-400 transition cursor-pointer">
                            <div className="flex gap-1 mb-3">
                                <div className="w-4 h-8 bg-green-500 rounded-sm"></div>
                                <div className="w-4 h-8 bg-green-500/50 rounded-sm"></div>
                                <div className="w-4 h-8 bg-green-500/20 rounded-sm"></div>
                            </div>
                            <span className="text-green-400 font-bold">Spacing</span>
                        </div>
                        <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center hover:border-orange-400 transition cursor-pointer">
                            <div className="w-12 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-md shadow-lg mb-3"></div>
                            <span className="text-orange-400 font-bold">Gradients</span>
                        </div>
                    </div>

                    <div className="bg-slate-900/80 p-8 rounded-2xl border border-cyan-500/20 text-center max-w-3xl">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            "Tailwind allows us to rapidly build custom designs without fighting the framework. We defined a custom <span className="text-cyan-400 font-mono">Theme Config</span> ensuring consistent branding across every pixel."
                        </p>
                    </div>
                </div>
            ),
            bg: "from-slate-950 to-cyan-950/30"
        },
        {
            id: 6,
            title: "Tech Stack: Framer Motion",
            subtitle: "Bringing the Interface to Life",
            content: (
                <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                    <div className="flex gap-8 mb-12">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-32 h-32 rounded-full border-t-4 border-l-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                        />
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                        >
                            <Zap size={40} className="text-yellow-400" />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left w-full">
                        <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Micro-Interactions</h4>
                            <p className="text-gray-400 text-sm">Buttons scale on hover, links glow, and icons animate to provide immediate feedback to user actions.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-pink-900/10 border border-pink-500/20">
                            <h4 className="text-lg font-bold text-pink-300 mb-2">Page Transitions</h4>
                            <p className="text-gray-400 text-sm">Smooth layout transitions between routes prevent the jarring "white flash" of traditional web browsing.</p>
                        </div>
                    </div>
                </div>
            ),
            bg: "from-slate-950 to-purple-950/40"
        },
        {
            id: 7,
            title: "Advanced Features",
            subtitle: "Going Beyond Basic Requirements",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {/* Mobile First */}
                    <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition">
                            <Smartphone size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-300 mb-4">Mobile-First & Zoom Safe</h3>
                        <p className="text-gray-400 mb-6">
                            Designed defensively for extreme edge cases.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Smart Hamburger Menu Fallack</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span><strong>2XL Breakpoints</strong> for 175% Zoom support</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Touch-optimized interactive elements</span>
                            </li>
                        </ul>
                    </div>

                    {/* Notifications */}
                    <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900 border border-yellow-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-yellow-500/50 transition duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition">
                            <Bell size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-300 mb-4">Live Notification System</h3>
                        <p className="text-gray-400 mb-6">
                            Real-time updates without refreshing.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Animated News Ticker</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span><strong>Modal Popups</strong> for urgent alerts</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Context-aware status icons</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            bg: "from-slate-950 to-indigo-950"
        },
        {
            id: 8,
            title: "Project Conclusion",
            subtitle: "Deployment & Future Scope",
            content: (
                <div className="flex flex-col items-center justify-center space-y-12">
                    <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
                        <div className="text-center p-6 bg-white/5 rounded-2xl">
                            <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2">Build Status</h4>
                            <div className="text-2xl font-bold text-green-400 flex items-center justify-center gap-2">
                                <CheckCircle size={24} /> Stable
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-2xl">
                            <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2">Code Quality</h4>
                            <div className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-2">
                                <Shield size={24} /> A+ Grade
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-2xl">
                            <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-2">Database</h4>
                            <div className="text-2xl font-bold text-purple-400 flex items-center justify-center gap-2">
                                <Database size={24} /> Ready
                            </div>
                        </div>
                    </div>

                    <div className="relative group cursor-pointer" onClick={() => navigate('/')}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button
                            className="relative px-16 py-6 bg-slate-900 rounded-full leading-none flex items-center divide-x divide-gray-600"
                        >
                            <div className="pr-6">
                                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Live Demo</span>
                                <span className="text-gray-100 font-bold text-xl">ACCESS PROJECT</span>
                            </div>
                            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                                <ChevronRight size={32} />
                            </span>
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm mt-8">
                        Designed & Developed by <span className="text-white font-semibold">Engineering Team</span> • 2026
                    </p>
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
        <div className={`h-screen w-full overflow-hidden bg-gradient-to-br ${slides[currentSlide].bg} transition-colors duration-1000 font-sans selection:bg-pink-500 selection:text-white`}>
            {/* Navigation Controls */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">K</div>
                    <div>
                        <div className="text-white text-sm font-bold tracking-wide">KSKCET Project</div>
                        <div className="text-white/50 text-[10px] font-mono uppercase tracking-widest">Presentation Mode</div>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all text-white/70 hover:text-white backdrop-blur-md"
                >
                    <span className="text-xs font-bold tracking-wider">EXIT</span>
                    <X size={16} className="group-hover:rotate-90 transition transform" />
                </button>
            </div>

            <div className="relative h-full w-full flex items-center justify-center p-4 md:p-12 overflow-y-auto md:overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, y: -30, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center w-full max-w-7xl h-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-blue-300 uppercase tracking-widest mb-4">
                                Slide {currentSlide + 1} / {slides.length}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 tracking-tight text-white drop-shadow-2xl">
                                {slides[currentSlide].title}
                            </h1>
                            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-2xl text-blue-200/80 text-center mb-12 font-light tracking-wide uppercase max-w-3xl leading-relaxed"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="w-full flex justify-center perspective-1000 flex-grow items-center"
                        >
                            {slides[currentSlide].content}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Bar & Arrows */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center gap-6 z-50 bg-gradient-to-t from-black/90 to-transparent pt-20">
                <div className="flex items-center gap-8 backdrop-blur-xl bg-white/5 px-8 py-3 rounded-full border border-white/10 shadow-2xl">
                    <button onClick={prevSlide} className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition group active:scale-90">
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition" />
                    </button>
                    <div className="flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition group active:scale-90">
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectPresentation;
