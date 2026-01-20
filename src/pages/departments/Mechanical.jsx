import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const Mechanical = () => {
    const banner = "/images/banners/departments/mech.jpg";

    return (
        <DepartmentLayout
            title="Mechanical Engineering"
            banner={banner}
            courseName="B.E. Mechanical Engineering"
            intake="120 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Mechanical Engineering at KSKCET was started in the year 2002. The department offers a richly integrated curriculum of education and research to its students. The Bachelor degree in Engineering (B.E.) program has an intake of 120 students.",
                "Mechanical Engineering is the discipline that applies the principles of engineering physics and material science for the design, analysis, manufacturing and maintenance of mechanical systems.",
                "It is the branch of engineering that pertains to the design, production and operation of machinery. The department provides a conducive environment for students to develop their technical and professional skills."
            ]}
            vision="To develop as a center of excellence in Mechanical Engineering and to create professionals with technical skills and ethical values."
            mission={[
                "To provide quality education in Mechanical Engineering and to prepare the students for a successful career.",
                "To create a conducive environment for research and innovation.",
                "To inculcate ethical values and leadership qualities in the students."
            ]}
            outcomes={[
                "Apply knowledge of mathematics, science, and engineering to solve complex mechanical engineering problems.",
                "Design and analyze mechanical systems and processes to meet desired needs.",
                "Conduct investigations of complex problems using research-based knowledge and research methods.",
                "Use modern engineering tools and techniques for engineering practice."
            ]}
        >
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img src="/images/facilities/mech-lab.jpg" alt="Mechanical Laboratory" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg">Manufacturing Technology Lab</h4>
                            <p className="text-sm text-gray-600">State-of-the-art machines for practical learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default Mechanical;
