import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import EventPopup from '../components/EventPopup';

import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <EventPopup />
            {/* 1. Hero Section (Video) */}
            <div className="relative h-[85vh] lg:h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-black/20 z-[1]" />
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/KSK1.mp4" type="video/mp4" />
                </video>

                {/* Branding Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 z-10 pointer-events-none">
                    <div className="max-w-4xl mt-20">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="font-black leading-none mb-6 drop-shadow-lg uppercase tracking-tighter"
                        >
                            <span className="block text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 pb-2">
                                KSK
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl text-white">
                                College of
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl text-blue-400">
                                Engineering
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xl md:text-3xl font-light text-gray-200 tracking-widest uppercase border-l-4 border-blue-500 pl-4 bg-black/20 backdrop-blur-sm inline-block py-2"
                        >
                            Empowering Future Leaders
                        </motion.p>
                    </div>
                </div>
            </div>


            {/* 3. About & Quality Policy Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">About KSKCET</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Empowering Future Engineers
                            </h2>
                            <div className="prose text-gray-600">
                                <p>
                                    KSK College of Engineering and Technology is committed to providing quality technical education. We focus on discipline, innovation, and holistic development to create professionals who are ready to face global challenges.
                                </p>
                                <p>
                                    Our institution stands as a beacon of knowledge, offering state-of-the-art facilities and a dedicated faculty team to nurture young minds.
                                </p>
                            </div>
                            <Link to="/about" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-4 group">
                                Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Quality Policy</h3>
                            <p className="text-gray-700 leading-relaxed text-lg italic">
                                "We at KSK College of Engineering and Technology are committed to provide quality technical education to students and prepare them for facing global challenges with the right attitude and professional ethics."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Affiliated By Section */}
            <div className="py-12 bg-white border-b border-gray-100 relative z-20">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Affiliated With</h3>
                    <div className="flex justify-center flex-wrap gap-12 items-center">
                        {[
                            "WhatsApp-Image-2023-04-18-at-6.26.42-PM-1-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.26.43-PM-1-1-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.26.43-PM-2-1-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.26.43-PM-3-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.26.44-PM-1-1-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.26.44-PM-2-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.27.14-PM-1-1-300x100.jpg",
                            "WhatsApp-Image-2023-04-18-at-6.27.14-PM-2-300x100.jpg"
                        ].map((img, idx) => (
                            <div key={idx} className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={`/images/placement/affilated/${img}`}
                                    alt="Affiliation Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Student Testimonials (Heroes) */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
                        Student Testimonials
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "P. TAMILMARAN", batch: "CIVIL (2014-2018)", img: "tamilmaran.jpg", text: "KSK made me a better person and helped me discover myself. Teachers are very caring." },
                            { name: "S. BALAJI", batch: "MECH (2014-2018)", img: "balaji.jpg", text: "Quality education and supportive faculty helped me achieve my career goals." },
                            { name: "R. VIJAY", batch: "EEE (2015-2019)", img: "vijay.jpg", text: "The practical exposure and lab facilities at KSKCET are excellent." },
                            { name: "M. AFSHAL", batch: "CSE (2016-2020)", img: "afshal.jpg", text: "Placement training was top-notch. I got placed in a top MNC thanks to KSK." }
                        ].map((student, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-50 shadow-sm">
                                    <img src={`/images/hero/${student.img}`} alt={student.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-blue-900 mb-1">{student.name}</h3>
                                <div className="text-xs font-bold text-gray-400 mb-4">{student.batch}</div>
                                <p className="text-gray-600 italic text-sm leading-relaxed">"{student.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Top Recruiters Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
                        Our Top Recruiters
                    </h2>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        {[
                            "WhatsApp-Image-2023-04-18-at-5.48.03-PM-2-1.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.03-PM.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.04-PM.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.05-PM-1.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.05-PM-2.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.05-PM.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.06-PM-1.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.06-PM-2.jpg",
                            "WhatsApp-Image-2023-04-18-at-5.48.06-PM.jpg",
                            "fox.png"
                        ].map((img, idx) => (
                            <SwiperSlide key={idx} className="flex items-center justify-center">
                                <img
                                    src={`/images/placement/recruiters/${img}`}
                                    alt="Recruiter Logo"
                                    className="h-16 w-auto object-contain mix-blend-multiply"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* 6. Highlights Grid (Excellence, Global, Innovation) */}
            <div className="py-16 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Award size={32} />, title: "Excellence in Education", desc: "Providing world-class technical education to rural students." },
                            { icon: <Globe size={32} />, title: "Global Exposure", desc: "Preparing students for international challenges and careers." },
                            { icon: <Zap size={32} />, title: "Innovation Hub", desc: "State-of-the-art labs fostering creativity and research." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-blue-600 mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 capitalize">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
