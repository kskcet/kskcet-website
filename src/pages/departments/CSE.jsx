import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const CSE = () => {
    const banner = "/images/banners/departments/cse.jpg";

    return (
        <DepartmentLayout
            title="Computer Science Engineering"
            banner={banner}
            courseName="B.E. Computer Science Engineering"
            intake="60 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Computer Science and Engineering started in the Year 2011 with an intake of 60. The department provides a good knowledge environment complemented by excellence in teaching.",
                "The department has state-of-the-art infrastructure and computing environments to equip the students with the latest developments in the field. The strength of the department lies in its dedicated faculty who deliver top-class student-centric teaching.",
                "Big Data Analytics, Computer Vision, Cloud Computing, Network Security, and Image Processing are some of the strong areas of research in the department."
            ]}
            vision="To produce globally competent professionals, motivates research and entrepreneurial skills with ethical values."
            mission={[
                "To process the students into professionals of technical excellence with ethical values.",
                "To impart high quality technical education and strong practical exposure.",
                "Aims to create quality professionals with a zest for manufacturing and design."
            ]}
            outcomes={[
                "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals.",
                "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
                "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
                "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools."
            ]}
        >
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img src="/images/facilities/cse-lab.jpg" alt="CSE Laboratory" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg">Advanced Computing Lab</h4>
                            <p className="text-sm text-gray-600">Equipped with high-end workstations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
};

export default CSE;
