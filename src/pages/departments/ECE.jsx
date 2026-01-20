import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const ECE = () => {
    const banner = "/images/banners/departments/ece.jpg";

    return (
        <DepartmentLayout
            title="Electronics & Communication Engineering"
            banner={banner}
            courseName="B.E. Electronics & Communication Engineering"
            intake="60 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Electronics and Communication Engineering (ECE) aims to producing high quality engineers. The department was established in the year 2008.",
                "ECE is a swiftly advancing field, with new ideas emerging every other second. From mobile phones to fiber optics and remote sensing, there are exciting avenues to explore and create.",
                "The department has excellent laboratory facilities and a dedicated faculty team to provide in-depth knowledge in the areas of Electronics, Communication, VLSI, Embedded Systems, and Signal Processing."
            ]}
            vision="To be a center of repute in Electronics and Communication Engineering and to produce globally competent professionals."
            mission={[
                "To provide quality education and training in the field of Electronics and Communication Engineering.",
                "To foster research and innovation in emerging technologies.",
                "To prepare students for successful careers in industry and academia."
            ]}
            outcomes={[
                "Design and analyze complex electronic circuits and communication systems.",
                "Apply modern tools and techniques for the design and implementation of electronics and communication systems.",
                "Demonstrate ability to work in multidisciplinary teams.",
                "Communicate effectively and engage in lifelong learning."
            ]}
        >
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img src="/images/facilities/ece-lab.jpg" alt="ECE Laboratory" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg">Communication Systems Lab</h4>
                            <p className="text-sm text-gray-600">Equipped with latest kits for analog and digital communication.</p>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img src="/images/facilities/ece-lab-1.jpg" alt="ECE Laboratory 2" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg">VLSI & Embedded Lab</h4>
                            <p className="text-sm text-gray-600">Advanced tools for VLSI design and embedded system development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default ECE;
