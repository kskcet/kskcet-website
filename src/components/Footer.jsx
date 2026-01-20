import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-10">


            {/* Main Footer Content */}
            <div className="container mx-auto px-6 mt-16">
                <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                    <div className="md:col-span-1">
                        <img src="/images/KSK/loga.png" alt="KSKCET Logo" className="h-20 mb-6 bg-white p-2 rounded-lg" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai. A premier institution dedicated to technical excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-400 transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-blue-500 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/about" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> About Us</Link></li>
                            <li><Link to="/vision-mission" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Vision & Mission</Link></li>
                            <li><Link to="/governing-body" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Administration</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-green-500 inline-block pb-1">Departments</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/cse" className="hover:text-green-400 transition">Computer Science (CSE)</Link></li>
                            <li><Link to="/eee" className="hover:text-green-400 transition">Electrical (EEE)</Link></li>
                            <li><Link to="/ece" className="hover:text-green-400 transition">Electronics (ECE)</Link></li>
                            <li><Link to="/mech" className="hover:text-green-400 transition">Mechanical (Mech)</Link></li>
                            <li><Link to="/ai-ds" className="hover:text-green-400 transition">AI & Data Science</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start"><MapPin size={20} className="mr-3 text-orange-500 flex-shrink-0" /> Thanjavur Main Road, Kumbakonam - 612 501.</li>
                            <li className="flex items-center"><Phone size={20} className="mr-3 text-green-500" /> +91 98765 43210</li>
                            <li className="flex items-center"><Mail size={20} className="mr-3 text-blue-500" /> info@kskcet.edu.in</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} KSK College of Engineering and Technology. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="/admin/login" className="hover:text-red-400 transition font-semibold text-xs uppercase tracking-wide">Admin Login</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
