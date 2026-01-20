import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';
import { MapPin } from 'lucide-react';

const Transport = () => {
    const banner = "/images/banners/facilities/transport.jpg";

    return (
        <DepartmentLayout
            title="Transport Facility"
            banner={banner}
            courseName="Connectivity & Convenience"
            intake="50+ Buses"
            duration="50 KM Radius"
            about={[
                "The college operates a fleet of buses connecting all major nearby towns and villages within a radius of 50 KM. This ensures that students and staff from surrounding areas can commute safely and comfortably to the campus.",
                "Our transport network covers Kumbakonam, Thanjavur, Papanasam, Needamangalam, Mannargudi, and other key locations. The buses are well-maintained and driven by experienced drivers to ensure punctuality and safety."
            ]}
            vision="To provide safe, reliable, and timely transportation for all students and staff, ensuring seamless connectivity to the campus."
            mission={[
                "To ensure 100% coverage of nearby rural and urban areas.",
                "To maintain a modern fleet of vehicles with top-notch safety standards.",
                "To provide affordable and hassle-free commuting options."
            ]}
        >
            <div className="space-y-12">
                {/* 50KM Radius Graphic */}
                <div className="flex justify-center py-10">
                    <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center relative shadow-xl">
                        <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-full animate-spin-slow"></div>
                        <div className="text-center z-10">
                            <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-sm font-bold uppercase text-blue-800 tracking-wider">KM Radius</div>
                            <div className="text-xs text-blue-500 mt-1">Covered</div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Transport Fleet</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {["transport1.jpg", "transport2.jpg", "transport3.jpg"].map((img, idx) => (
                            <div key={idx} className="rounded-xl overflow-hidden shadow-lg group">
                                <img src={`/images/facilities/${img}`} alt={`Transport ${idx + 1}`} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Transport;

