import React from 'react';
import GenericPage from '../components/GenericPage';
import { Mail, Phone, MapPin, Building, Globe, LifeBuoy, ShieldAlert } from 'lucide-react';

const Contact = () => {
    return (
        <GenericPage title="Contact Us" subtitle="We are here to help">
            <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

                {/* Top Section: Contact Cards & Form */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Details */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 uppercase tracking-wide">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                KSK College of Engineering and Technology is dedicated to providing the best educational experience. Reach out to us for admissions, general inquiries, or student support.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {/* Main Campus */}
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Address</h3>
                                    <address className="not-italic text-gray-600 leading-relaxed">
                                        KSK College of Engineering & Technology<br />
                                        River Bridge 45C, Dharasuram Post,<br />
                                        Kumbakonam – 612 702,<br />
                                        Thanjavur District, TamilNadu, India.
                                    </address>
                                </div>
                            </div>

                            {/* Principal & Admin */}
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                                    <Building size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Contacts</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4 items-start sm:items-center">

                                        <span className="font-medium text-gray-700">Office</span>
                                        <div className="text-left sm:text-right">
                                            <a href="tel:+919626666573" className="text-blue-600 font-bold hover:underline block">+91 96266 66573</a>
                                        </div>

                                        <span className="font-medium text-gray-700">Admission</span>
                                        <div className="text-left sm:text-right">
                                            <a href="tel:+919942648026" className="text-blue-600 font-bold hover:underline block">+91 99426 48026</a>
                                        </div>

                                        <span className="font-medium text-gray-700 self-start mt-1">Email</span>
                                        <div className="text-left sm:text-right flex flex-col gap-1 w-full overflow-hidden">
                                            <a href="mailto:kskduraimurugan2211@gmail.com" className="text-blue-600 font-bold hover:underline text-sm break-all">kskduraimurugan2211@gmail.com</a>
                                            <a href="mailto:kskenggcollege@gmail.com" className="text-blue-600 font-bold hover:underline text-sm break-all">kskenggcollege@gmail.com</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-blue-600">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Support & Helplines Section (New Request) */}
                <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="text-red-600" size={32} />
                        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                            Student Support & Helplines
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Anti-Ragging Committee", number: "+91 98656 98983", desc: "Immediate assistance for ragging concerns." },
                            { title: "Women's Safety Cell", number: "+91 99426 48026", desc: "Dedicated support for female students." },
                            { title: "Grievance Redressal", number: "0435 2452233", desc: "Report academic or administrative issues." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                                <p className="text-red-600 font-bold text-xl mb-1">{item.number}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full Width Map */}
                <div className="rounded-xl overflow-hidden shadow-lg h-[450px] border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.618684617652!2d79.35851535!3d10.95152335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a553363364fa1e3%3A0xe5334645e523315!2sK.S.K.%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KSKCET Location Map"
                    ></iframe>
                </div>

            </div>
        </GenericPage>
    );
};

export default Contact;
