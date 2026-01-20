import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const Biomedical = () => {
    const banner = "/images/banners/departments/biomedical.jpg";

    return (
        <DepartmentLayout
            title="Bio-Medical Engineering"
            banner={banner}
            courseName="B.E. Bio-Medical Engineering"
            intake="60 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Biomedical Engineering started in the Year 2011.",
                "A solid foundation in engineering is essential, even for students looking to enter medically-dominated areas. Biomedical Engineers have unique skills. Often they are needed to bridge traditional engineering skills with medical applications.",
                "Biomedical Engineers may be called upon in a wide range of capacities: to design instruments, devices, and software, to bring together knowledge from many technical sources to develop new procedures, or to conduct research needed to solve clinical problems.",
                "Biomedical Engineering will attract students' interest in pursuing a career in medicine, biotechnology, patent law or biomedical product sales and services."
            ]}
            vision="To produce professionally competent Biomedical Engineers to serve the healthcare industry and society."
            mission={[
                "To provide high-quality education in Biomedical Engineering principles and applications.",
                "To foster research and development in healthcare technologies.",
                "To bridge the gap between engineering and medicine for the betterment of society."
            ]}
            outcomes={[
                "Apply knowledge of engineering and biology to solve medical problems.",
                "Design and develop medical devices and systems.",
                "Analyze and interpret biological data.",
                "Demonstrate professional and ethical responsibility in the healthcare field."
            ]}
        />
    );
};

export default Biomedical;
