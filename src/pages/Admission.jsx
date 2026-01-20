import React, { useState } from 'react';
import GenericPage from '../components/GenericPage';
import { Download, FileText, Send, CheckCircle, GraduationCap, Calendar, CreditCard } from 'lucide-react';

const Admission = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const downloads = [
        { name: "College Brochure 2024-25", file: "/images/KSK/2024-2025-brouchure.pdf" },
        { name: "AICTE Approval 2024-25", file: "/images/KSK/3456-AICTE-APPROVAL.pdf" },
        { name: "College Profile", file: "/images/KSK/K.S.K-College-of-Engineering-and-Technology-New20240308-.pdf" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <GenericPage title="Admission 2026" subtitle="Your journey to excellence starts here">
            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Intro Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose KSKCET?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Join a vibrant community of innovators and leaders. With state-of-the-art labs,
                        expert faculty, and excellent placement records, we shape the engineers of tomorrow.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">

                    {/* Left Column: Info & Process */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: GraduationCap, title: "Top-Tier Faculty", desc: "Learn from industry experts and PhD holders." },
                                { icon: Calendar, title: "Placement Training", desc: "Intensive training from Year 1 for top MNCs." },
                                { icon: CreditCard, title: "Scholarships", desc: "Merit-based scholarships for deserving students." },
                                { icon: FileText, title: "Modern Curriculum", desc: "Aligned with Anna University & Industry standards." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <item.icon className="text-blue-600 mb-4" size={32} />
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Downloads Section */}
                        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Download className="mr-3 text-blue-600" /> Important Downloads
                            </h3>
                            <div className="grid gap-4">
                                {downloads.map((doc, idx) => (
                                    <a
                                        key={idx}
                                        href={doc.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow transition-all group"
                                    >
                                        <span className="font-semibold text-gray-700 group-hover:text-blue-700">{doc.name}</span>
                                        <Download className="text-blue-400 group-hover:text-blue-600" size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Admission Process Steps */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h3>
                            <div className="space-y-6">
                                {[
                                    { step: "01", title: "Enquire Online", text: "Fill out the enquiry form on this page." },
                                    { step: "02", title: "Counseling / Visit", text: "Visit our campus or attend counseling session." },
                                    { step: "03", title: "Document Verification", text: "Submit academic documents for verification." },
                                    { step: "04", title: "Confirm Seat", text: "Pay admission fees and confirm your seat." }
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                            {s.step}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">{s.title}</h4>
                                            <p className="text-gray-600">{s.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Form */}
                    <div className="lg:sticky lg:top-28">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-blue-600">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply Now</h3>
                            <p className="text-gray-500 mb-8 text-sm">Fill details to get a call back.</p>

                            {submitted ? (
                                <div className="text-center py-8 bg-green-50 rounded-lg border border-green-100">
                                    <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-3" />
                                    <h4 className="font-bold text-green-900 text-lg">Enquiry Sent!</h4>
                                    <p className="text-green-700 text-sm mb-4">We will contact you shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-green-800 font-semibold underline text-sm hover:text-green-900">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            placeholder="Student Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            placeholder="Mobile Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Course Interested In</label>
                                        <select
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            value={formData.course}
                                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                        >
                                            <option value="">Select Course</option>
                                            <option value="CSE">Computer Science (CSE)</option>
                                            <option value="ECE">Electronics (ECE)</option>
                                            <option value="EEE">Electrical (EEE)</option>
                                            <option value="MECH">Mechanical</option>
                                            <option value="CIVIL">Civil</option>
                                            <option value="AIDS">AI & Data Science</option>
                                            <option value="BME">Bio-Medical</option>
                                            <option value="AGRI">Agriculture</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center animate-pulse"
                                    >
                                        Submit Enquiry <Send className="ml-2" size={18} />
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="mt-6 bg-blue-900 text-white p-6 rounded-xl text-center shadow-lg">
                            <p className="text-blue-200 text-sm uppercase font-bold tracking-wider mb-1">Admission Helpline</p>
                            <p className="text-3xl font-black">+91 99426 48026</p>
                            <p className="text-xs text-blue-300 mt-2">Available 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                </div>
            </div>
        </GenericPage>
    );
};

export default Admission;
