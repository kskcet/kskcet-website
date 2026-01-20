import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';
import { Book, Users, Layers, Monitor } from 'lucide-react';

const Library = () => {
    const banner = "/images/banners/facilities/library.jpg";

    return (
        <DepartmentLayout
            title="Central Library"
            banner={banner}
            courseName="Knowledge Resource Center"
            intake="100 Seats"
            duration="Open Access"
            about={[
                "The Library is the soul of our educational institution. It is located in a spacious 350 sq.m area designed to provide a quiet and conducive environment for learning and research.",
                "Our library is fully automated and provides open access to students and staff. It houses a vast collection of books, journals, and digital resources to cater to the academic needs of the engineering community."
            ]}
            vision="To serve as a knowledge hub that supports the teaching, learning, and research needs of the college community."
            mission={[
                "To provide easy access to knowledge resources.",
                "To promote reading habits among students.",
                "To adapt to the changing information needs of the digital age."
            ]}
        >
            <div className="space-y-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Library Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl text-center shadow-lg border-b-4 border-blue-500 group hover:-translate-y-2 transition-transform">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                            <Book className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">11,423</div>
                        <div className="text-sm text-gray-600 font-medium">Volumes</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl text-center shadow-lg border-b-4 border-green-500 group hover:-translate-y-2 transition-transform">
                        <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                            <Layers className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">30</div>
                        <div className="text-sm text-gray-600 font-medium">National Journals</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl text-center shadow-lg border-b-4 border-purple-500 group hover:-translate-y-2 transition-transform">
                        <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                            <Monitor className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
                        <div className="text-sm text-gray-600 font-medium">Intl. Journals</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl text-center shadow-lg border-b-4 border-orange-500 group hover:-translate-y-2 transition-transform">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                            <Users className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">100</div>
                        <div className="text-sm text-gray-600 font-medium">Seating Capacity</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {["Book Lending", "Reference Section", "Digital Library", "Reprography Service", "OPAC (Online Public Access Catalog)", "Current Awareness Service"].map((s, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Library;

