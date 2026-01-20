
import React from 'react';
import GenericPage from '../components/GenericPage';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
    // Data processed from user input
    // Added 'year' to help with sorting/displaying if needed, though relying on visual date for now.
    const events = [
        { title: "Chairman Chess Trophy-2025", date: "25 MAR", year: "2025", desc: "A prestigious chess tournament hosted to encourage strategic thinking and sportsmanship among students.", category: "Sports" },
        { title: "Republic Day Celebration", date: "26 JAN", year: "2025", desc: "Honoring the constitution and the spirit of India with flag hoisting and cultural programs.", category: "Celebration" },
        { title: "Founder's Day Celebration", date: "10 JAN", year: "2025", desc: "Commemorating the legacy of our founders with gratitude and special events.", category: "Celebration" },
        { title: "Pongal Celebration", date: "10 JAN", year: "2025", desc: "The harvest festival celebrated with traditional joy, sugarcane, and cultural performances.", category: "Celebration" },
        { title: "National Farmers Day", date: "23 DEC", year: "2024", desc: "Recognizing the vital contribution of farmers to society.", category: "Social" },
        { title: "National Constitution Day", date: "26 NOV", year: "2024", desc: "Observing the adoption of the Constitution of India.", category: "Social" },
        { title: "Heritage of Tamil - Local Visit", date: "16 NOV", year: "2024", desc: "First Year Students visited local heritage sites to understand Tamil culture.", category: "Academic" },
        { title: "Yoga Programme", date: "13 NOV", year: "2024", desc: "Organized by S&H Department with Art of Living for mental and physical well-being.", category: "Health" },
        { title: "Blood Donation Camp", date: "09 OCT", year: "2024", desc: "Organized by NSS Cell & Rajah Mirasdar Govt. Hospital.", category: "Social" },
        { title: "Special Meditation Programme", date: "07 OCT", year: "2024", desc: "A session dedicated to mindfulness and stress management for students.", category: "Health" },
        { title: "Engineers Day - CSE", date: "19 SEP", year: "2024", desc: "Technical events, coding challenges, and project expos celebrating engineering.", category: "Academic" },
        { title: "First Year Inaugural Ceremony", date: "13 SEP", year: "2024", desc: "Welcoming ceremony for Our New Joiners and their parents.", category: "Ceremony" },
        { title: "Graduation Day", date: "18 JUN", year: "2023", desc: "Celebrating the academic success of our graduates as they step into the future.", category: "Ceremony" },
        { title: "KSKCET Mega Job Fair", date: "28 FEB", year: "2022", desc: "A massive job fair offering opportunities for students with top recruiters.", category: "Placement" },
    ];

    const bannerImage = "/images/banners/events/banner.jpg";

    return (
        <GenericPage title="News & Events" subtitle="Happenings @ KSKCET" backgroundImage={bannerImage}>
            <div className="max-w-5xl mx-auto px-4 py-8">

                <div className="relative border-l-2 border-blue-100 ml-4 md:ml-6 space-y-16">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-md transform transition-transform hover:scale-125 z-10" />

                            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                                <div className="flex flex-col md:flex-row">
                                    {/* Date Column */}
                                    <div className="bg-blue-50 text-blue-800 p-6 flex flex-col items-center justify-center min-w-[120px] border-b md:border-b-0 md:border-r border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <span className="text-3xl font-black tracking-tighter leading-none">{event.date.split(' ')[0]}</span>
                                        <span className="text-sm font-bold uppercase tracking-wide mt-1">{event.date.split(' ')[1]}</span>
                                        <span className="text-xs font-medium opacity-70 mt-1">{event.year}</span>
                                    </div>

                                    {/* Content Column */}
                                    <div className="p-6 md:p-8 flex-grow">
                                        <div className="flex items-start justify-between mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${event.category === 'Celebration' ? 'bg-pink-100 text-pink-600' :
                                                event.category === 'Academic' ? 'bg-purple-100 text-purple-600' :
                                                    event.category === 'Placement' ? 'bg-green-100 text-green-600' :
                                                        event.category === 'Social' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-gray-100 text-gray-600'
                                                }`}>
                                                {event.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                                            {event.desc}
                                        </p>

                                        <div className="flex items-center text-blue-600 font-semibold text-sm group/btn cursor-pointer">
                                            Read More
                                            <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-white border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm">
                        Load More Events
                    </button>
                </div>
            </div>
        </GenericPage>
    );
};

export default Events;
