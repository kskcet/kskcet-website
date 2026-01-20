import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            subItems: [
                { name: 'About College', path: '/about' },
                { name: 'Vision & Mission', path: '/vision-mission' },
                { name: 'Chairman', path: '/chairman' },
                { name: 'Secretary', path: '/secretary' },
                { name: 'Principal', path: '/principal-desk' },
            ]
        },

        {
            name: 'Departments',
            path: '#departments',
            subItems: [
                { name: 'Computer Science (CSE)', path: '/cse' },
                { name: 'Electrical & Electronics (EEE)', path: '/eee' },
                { name: 'Mechanical (Mech)', path: '/mech' },
                { name: 'Electronics & Communication (ECE)', path: '/ece' },
                { name: 'AI & Data Science', path: '/ai-ds' },
                { name: 'Bio-Medical', path: '/bme' },
                { name: 'Agricultural', path: '/agri' },
                { name: 'Civil', path: '/civil' },
            ]
        },
        {
            name: 'Facilities',
            path: '#facilities',
            subItems: [
                { name: 'Library', path: '/library' },
                { name: 'Hostel', path: '/hostel' },
                { name: 'Transport', path: '/transport' },
                { name: 'Cafeteria', path: '/cafeteria' },
            ]
        },
        { name: 'Placement', path: '/placement' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Events', path: '/events' },
        { name: 'Administration', path: '/administration' },
        { name: 'Contact Us', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Forced Solid White Theme as per user request
    const navbarClasses = 'bg-white text-blue-900 shadow-md py-2 border-b border-blue-50';

    // Text is always dark blue in white theme
    const navTextIsDark = true;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 font-sans ${navbarClasses}`}
        >
            <div className="w-full px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/images/kskcet_header_logo.png"
                        alt="KSKCET Logo"
                        className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {link.subItems ? (
                                <>
                                    <button className={`flex items-center font-bold text-[17px] tracking-wide transition-colors ${navTextIsDark ? 'text-blue-900 hover:text-blue-600' : 'text-blue-900 hover:text-blue-600'}`}>
                                        {link.name} <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.15, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                                            >
                                                <div className="py-2">
                                                    {link.subItems.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            to={sub.path}
                                                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-2 border-transparent hover:border-blue-600"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`font-bold text-[17px] tracking-wide transition-colors ${navTextIsDark ? 'text-blue-900 hover:text-blue-600' : 'text-blue-900 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button (Desktop) */}
                <Link to="/admission" className={`hidden lg:block px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-sm ${navTextIsDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-900 hover:bg-gray-100'
                    }`}>
                    Admission
                </Link>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(true)} className={`lg:hidden p-2 ${navTextIsDark ? 'text-blue-900' : 'text-blue-900'}`}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col shadow-2xl lg:hidden"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
                            <span className="text-2xl font-black text-blue-900 tracking-tighter uppercase">Menu</span>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors bg-gray-50 rounded-full">
                                <X size={32} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                    {link.subItems ? (
                                        <div className="space-y-3">
                                            <div className="text-xl font-bold text-gray-900">{link.name}</div>
                                            <div className="pl-4 space-y-3 border-l-4 border-blue-100 ml-1">
                                                {link.subItems.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block py-1 text-base font-medium text-gray-600 hover:text-blue-700 hover:translate-x-1 transition-all"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-xl font-bold text-gray-900 hover:text-blue-700 hover:pl-2 transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Link to="/admission" onClick={() => setIsOpen(false)} className="block w-full text-center py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                                    Apply for Admission
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
