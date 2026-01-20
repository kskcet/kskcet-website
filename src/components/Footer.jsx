import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-10">


            {/* Main Footer Content */}
            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 border-b border-gray-800 pb-12">
                    {/* 1. About */}
                    <div className="xl:col-span-1">
                        <img src="/images/KSK/loga.png" alt="KSKCET Logo" className="h-16 mb-6 bg-white p-2 rounded-lg" />
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

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-blue-500 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> About Us</Link></li>
                            <li><Link to="/vision-mission" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Vision & Mission</Link></li>
                            <li><Link to="/governing-body" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Administration</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition flex items-center"><ExternalLink size={14} className="mr-2" /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Departments */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-green-500 inline-block pb-1">Departments</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/cse" className="hover:text-green-400 transition">Computer Science (CSE)</Link></li>
                            <li><Link to="/eee" className="hover:text-green-400 transition">Electrical (EEE)</Link></li>
                            <li><Link to="/ece" className="hover:text-green-400 transition">Electronics (ECE)</Link></li>
                            <li><Link to="/mech" className="hover:text-green-400 transition">Mechanical (Mech)</Link></li>
                            <li><Link to="/ai-ds" className="hover:text-green-400 transition">AI & Data Science</Link></li>
                        </ul>
                    </div>

                    {/* 4. Other Links (New) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-purple-500 inline-block pb-1">Other Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm font-semibold">
                            <li><a href="#" className="hover:text-purple-400 transition flex items-center">» ANTI-RAGGING COMMITTEE</a></li>
                            <li><a href="/images/KSK/3456-AICTE-APPROVAL.pdf" target="_blank" className="hover:text-purple-400 transition flex items-center">» AICTE APPROVAL</a></li>
                            <li><a href="/images/KSK/AUDITED-STATEMENT.pdf" target="_blank" className="hover:text-purple-400 transition flex items-center">» MANDATORY DISCLOSURE</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition flex items-center">» AICTE FEEDBACK</a></li>
                            <li><a href="/images/KSK/Complaints-cum-Redressal-Committee.pdf" target="_blank" className="hover:text-purple-400 transition flex items-center">» GRIEVANCES CELL</a></li>
                            <li><a href="/images/KSK/K.S.K-College-of-Engineering-and-Technology-New20240308-.pdf" target="_blank" className="hover:text-purple-400 transition flex items-center">» ACADEMIC CALENDAR</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition flex items-center">» E-RESOURCES</a></li>
                        </ul>
                    </div>

                    {/* 5. Contact Us */}
                    <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Contact Us</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start">
                                <MapPin size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                                <p>KSK College of Engineering & Technology<br />River Bridge 45C, Dharasuram Post,<br />Kumbakonam – 612 702,<br />Thanjavur District, TamilNadu, India.</p>
                            </div>
                            <div className="flex flex-col space-y-1 ml-8">
                                <div className="flex items-center"><Phone size={16} className="mr-2 text-green-500" /> +91 99426 48026</div>
                                <div className="flex items-center"><Phone size={16} className="mr-2 text-green-500" /> +91 96266 66573</div>
                            </div>
                            <div className="flex flex-col space-y-1 ml-8 mt-2">
                                <div className="flex items-center"><Mail size={16} className="mr-2 text-blue-500" /> kskduraimurugan2211@gmail.com</div>
                                <div className="flex items-center"><Mail size={16} className="mr-2 text-blue-500" /> kskenggcollege@gmail.com</div>
                            </div>
                        </div>
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
