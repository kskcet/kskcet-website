import React from 'react';
import GenericPage from '../components/GenericPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Placement = () => {
    // Reusing recruiters from Home.jsx
    const recruiters = [
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
    ];

    const bannerImage = "/images/banners/placement.jpg";

    return (
        <GenericPage title="Placement Cell" subtitle="Building Careers, Shaping Futures" backgroundImage={bannerImage}>
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Intro Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-justify text-gray-700 leading-relaxed">
                        <h3 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">Why KSK Placement?</h3>
                        <p>
                            Every year, a large number of reputed companies across a gamut of industries ranging from technology, core manufacturing to consulting, visit our campus. Industry-oriented educational methods coupled with innovative teaching techniques have resulted in providing the best suitable placements for KSK students.
                        </p>
                        <p>
                            Every department has a proactive approach in the placement process. A team of highly experienced and trained professionals of the corresponding department groom and nurture the KSK students into industry-ready professionals. The training of skills imparted to the students help them to understand placement opportunities as well as learn about challenges leading them to evolve as confident individuals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Briefcase size={24} /></div>
                            <div>
                                <div className="font-bold text-gray-900">30+ LPA</div>
                                <div className="text-xs text-gray-500">Highest Package</div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600"><TrendingUp size={24} /></div>
                            <div>
                                <div className="font-bold text-gray-900">95%</div>
                                <div className="text-xs text-gray-500">Placement Record</div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Users size={24} /></div>
                            <div>
                                <div className="font-bold text-gray-900">500+</div>
                                <div className="text-xs text-gray-500">Recruiters</div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4">
                            <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Award size={24} /></div>
                            <div>
                                <div className="font-bold text-gray-900">Global</div>
                                <div className="text-xs text-gray-500">Exposure</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Placement Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-3">
                            <div className="text-4xl font-bold text-blue-600">Annual Visits</div>
                            <p className="text-gray-600">by many reputed companies</p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="text-4xl font-bold text-blue-600">Global & Premier</div>
                            <p className="text-gray-600">Indian companies exposure.</p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="text-4xl font-bold text-blue-600">INR 30 Lacs</div>
                            <p className="text-gray-600">Highest Package / Annum</p>
                        </div>
                    </div>
                </div>

                {/* Recruiters Carousel */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Our Valued Recruiters</h3>
                        <p className="text-gray-500 mt-2">Top companies that trust our talent</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <Swiper
                            modules={[Autoplay, Grid, Pagination]}
                            spaceBetween={30}
                            slidesPerView={2}
                            grid={{
                                rows: 2,
                                fill: 'row'
                            }}
                            breakpoints={{
                                640: { slidesPerView: 3, grid: { rows: 2 } },
                                1024: { slidesPerView: 5, grid: { rows: 2 } },
                            }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="h-[300px] w-full"
                        >
                            {recruiters.map((img, idx) => (
                                <SwiperSlide key={idx} className="flex items-center justify-center p-4 border border-gray-50 rounded-lg hover:border-blue-100 transition-colors">
                                    <img src={`/images/placement/recruiters/${img}`} alt="Recruiter" className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                </SwiperSlide>
                            ))}
                            {/* Duplicate for demo if list is short to fill grid */}
                            {recruiters.map((img, idx) => (
                                <SwiperSlide key={`dup-${idx}`} className="flex items-center justify-center p-4 border border-gray-50 rounded-lg hover:border-blue-100 transition-colors">
                                    <img src={`/images/placement/recruiters/${img}`} alt="Recruiter" className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </GenericPage>
    );
};

export default Placement;
