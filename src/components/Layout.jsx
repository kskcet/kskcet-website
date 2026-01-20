import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsTicker from './NewsTicker';
import { AnimatePresence, motion } from 'framer-motion';
import { Presentation } from 'lucide-react'; // Icon for presentation
import { Link } from 'react-router-dom'; // For the floating button

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen relative"> {/* Added relative for the floating button */}
            <Navbar />
            {location.pathname === '/' && <NewsTicker />}
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />

            {/* Floating Presentation Mode Button */}
            <Link
                to="/presentation"
                className="fixed bottom-6 right-6 z-50 bg-white/10 hover:bg-blue-600 text-gray-500 hover:text-white p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 group border border-gray-200/20 hover:border-transparent hover:scale-110"
                title="Project Presentation Mode"
            >
                <Presentation size={20} />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                    Presentation Mode
                </span>
            </Link>
        </div>
    );
};

export default Layout;
