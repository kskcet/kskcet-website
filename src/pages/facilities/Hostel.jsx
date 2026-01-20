import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const Hostel = () => {
    const banner = "/images/banners/facilities/hostel.jpg";

    return (
        <DepartmentLayout
            title="Hostel Facilities"
            banner={banner}
            courseName="A Home Away From Home"
            intake="500+ Students"
            duration="Boys & Girls"
            about={[
                "KSKCET provides excellent hostel facilities for both boys and girls, ensuring a safe and comfortable living environment. We believe that a comfortable stay is essential for students to focus on their academic pursuits.",
                "The hostels are designed to provide a homely atmosphere with caring wardens to ensure the well-being of every student. We maintain a disciplined yet friendly atmosphere where students can study and relax."
            ]}
            vision="To provide a safe, secure, and conducive living environment that fosters personal growth and academic excellence."
            mission={[
                "To ensure high standards of hygiene and safety.",
                "To provide nutritious and balanced meals.",
                "To create a supportive community for students."
            ]}
        >
            <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 group hover:-translate-y-2 transition-transform">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Boys Hostel</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The boys' hostel offers spacious and well-ventilated rooms with all necessary amenities. It is located within the campus, providing easy access to the college and library facilities.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink-500 group hover:-translate-y-2 transition-transform">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">Girls Hostel</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The girls' hostel is designed with high security and comfort in mind. It provides a highly secure environment with 24/7 security and dedicated female wardens.
                        </p>
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Hostel Amenities</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {["Hygienic Mess (Veg & Non-Veg)", "24/7 Power Supply", "RO Water Purification", "Wi-Fi Connectivity", "Recreation Room", "Medical Assistance"].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">Gallery</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl overflow-hidden shadow-lg group">
                            <img src="/images/facilities/hostel1.jpg" alt="Hostel Building" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg group">
                            <img src="/images/facilities/hostel2.jpg" alt="Hostel Room" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Hostel;

