import React from 'react';
import { Award, BookOpen, Clock, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const DepartmentLayout = ({ title, courseName, about, vision, mission, outcomes, intake, duration, children, banner }) => {

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. Clean Academic Banner */}
            <div className="relative h-[400px] flex items-center justify-center bg-blue-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url(${banner || '/images/hero-bg.jpg'})` }}
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-4 border border-white/30 rounded-full text-blue-100 text-sm font-semibold tracking-widest uppercase bg-white/10 backdrop-blur-sm"
                    >
                        Department of
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
                    >
                        {title}
                    </motion.h1>
                    <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto">{courseName}</p>
                </div>
            </div>

            {/* 2. Main Content Container (Centered, No Sidebar) */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                {/* Course Facts Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-gray-100">
                    <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                        <Clock className="mx-auto text-blue-600 mb-2" size={24} />
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Duration</div>
                        <div className="text-lg font-black text-gray-900">{duration || "4 Years"}</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
                        <Users className="mx-auto text-green-600 mb-2" size={24} />
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Intake</div>
                        <div className="text-lg font-black text-gray-900">{intake || "60 Seats"}</div>
                    </div>
                </div>

                {/* About Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
                        About the Program
                    </h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed text-justify max-w-none">
                        {about && about.map((para, idx) => (
                            <p key={idx} className="mb-4">{para}</p>
                        ))}
                    </div>
                </section>

                {/* Vision & Mission (Side by Side) */}
                <section className="grid md:grid-cols-2 gap-8">
                    {vision && (
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative group hover:shadow-lg transition-shadow">
                            <Target className="text-blue-200 absolute top-4 right-4 w-24 h-24 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                            <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">Our Vision</h3>
                            <p className="text-gray-700 text-lg leading-relaxed relative z-10 italic">
                                "{vision}"
                            </p>
                        </div>
                    )}
                    {mission && (
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 relative group hover:border-blue-600 transition-colors shadow-sm">
                            <Award className="text-gray-100 absolute top-4 right-4 w-24 h-24 group-hover:text-blue-50 transition-colors duration-500" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
                            <ul className="space-y-3 relative z-10">
                                {Array.isArray(mission) ? mission.map((m, i) => (
                                    <li key={i} className="flex items-start text-gray-600">
                                        <span className="mt-2 mr-3 min-w-[6px] h-1.5 bg-blue-500 rounded-full"></span>
                                        <span>{m}</span>
                                    </li>
                                )) : <p className="text-gray-600">{mission}</p>}
                            </ul>
                        </div>
                    )}
                </section>

                {/* Program Outcomes */}
                {outcomes && (
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-600 rounded-sm"></span>
                            Program Outcomes
                        </h2>
                        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="grid gap-6 relative z-10">
                                {outcomes.map((outcome, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-300 leading-relaxed pt-1">{outcome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Dynamic Content (Gallery / Facilities) */}
                {children && (
                    <section className="pt-8 border-t border-gray-100">
                        {children}
                    </section>
                )}

            </div>
        </div>
    );
};

export default DepartmentLayout;
