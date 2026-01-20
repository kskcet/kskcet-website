import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';
import { Coffee, ShieldCheck, Users } from 'lucide-react';

const Cafeteria = () => {
    const banner = "/images/banners/facilities/cafeteria.jpg";

    return (
        <DepartmentLayout
            title="Campus Cafeteria"
            banner={banner}
            courseName="Hygienic & Healthy Food"
            intake="Open to All"
            duration="All Day"
            about={[
                "A spacious and hygienic cafeteria is available within the campus, serving delicious and nutritious food to students and staff at affordable rates. It serves as a great place for relaxation and social interaction."
            ]}
            vision="To provide healthy, hygienic, and affordable organic food options to the college community."
            mission={[
                "To maintain the highest standards of cleanliness.",
                "To serve fresh and nutritious meals.",
                "To ensure customer satisfaction."
            ]}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white shadow-xl border-t-4 border-green-500 rounded-xl group hover:-translate-y-1 transition-transform">
                    <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-green-600">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hygienic Environment</h3>
                    <p className="text-gray-600 leading-relaxed">Maintained with high standards of cleanliness and food safety protocols.</p>
                </div>
                <div className="p-8 bg-white shadow-xl border-t-4 border-orange-500 rounded-xl group hover:-translate-y-1 transition-transform">
                    <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-orange-600">
                        <Coffee size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Nutritious Menu</h3>
                    <p className="text-gray-600 leading-relaxed">Balanced diet options including snacks, beverages, and full meals for healthy living.</p>
                </div>
                <div className="p-8 bg-white shadow-xl border-t-4 border-blue-500 rounded-xl group hover:-translate-y-1 transition-transform">
                    <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-blue-600">
                        <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Social Hub</h3>
                    <p className="text-gray-600 leading-relaxed">A perfect place for students to unwind, discuss ideas, and enjoy their breaks.</p>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Cafeteria;

