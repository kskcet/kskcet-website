import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const Civil = () => {
    const banner = "/images/banners/departments/civil.jpg";

    return (
        <DepartmentLayout
            title="Civil Engineering"
            banner={banner}
            courseName="B.E. Civil Engineering"
            intake="60 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Civil Engineering was established to provide high-quality education in the field of infrastructure development. It is one of the oldest and most trusted branches of engineering.",
                "Our curriculum focuses on planning, designing, constructing, and maintaining the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.",
                "The department has well-equipped laboratories and experienced faculty to guide students in both theoretical and practical aspects of Civil Engineering."
            ]}
            vision="To be a center of excellence in Civil Engineering education, research, and consultancy."
            mission={[
                "To produce competent Civil Engineers with high technical and managerial skills.",
                "To promote research and development activities in the field of Civil Engineering.",
                "To provide consultancy services to the industry and society."
            ]}
            outcomes={[
                "Apply knowledge of mathematics, science, and engineering to solve complex civil engineering problems.",
                "Design and construct sustainable infrastructure projects.",
                "Conduct experiments and analyze data for quality control and material testing.",
                "Engage in lifelong learning and professional development."
            ]}
        >
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img src="/images/facilities/civil-lab.jpg" alt="Civil Engineering Laboratory" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg">Survey & Structural Lab</h4>
                            <p className="text-sm text-gray-600">Advanced equipment for surveying and material testing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Civil;
