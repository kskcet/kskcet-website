import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const Agri = () => {
    const banner = "/images/banners/departments/agri.jpg";

    return (
        <DepartmentLayout
            title="Agricultural Engineering"
            banner={banner}
            courseName="B.E. Agricultural Engineering"
            about={[
                "Involved in the improvisation of the quality of manufacturing processes and distribution of agricultural products.",
                "Can opt for designing the structure and agricultural equipment, research of plants, seeds and soils, harvesting, manufacturing, packaging.",
                "Our program prepares students for diverse roles in the agricultural sector, blending engineering principles with biological sciences."
            ]}
            vision="Create high-quality professionals involved in the improvisation of agricultural processes."
            mission={[
                "To educate and generate at least 90% of the students as competent professionals to become part of the industry and research organizations.",
                "To give personalized training to the students with arrears, identifying their strength and weakness for the improvement of the academic results on an average of 85%.",
                "Offer a variety of blended learning methodology for overall personality improvement."
            ]}
            intake="30 Students"
            duration="4 Years (8 Semesters)"
            outcomes={[
                "Involved in the improvisation of the quality of manufacturing processes and distribution of agricultural products.",
                "Can opt for designing the structure and agricultural equipment, research of plants, seeds and soils, harvesting, manufacturing, packaging",
                "Involved in the designing and testing of agricultural equipment, machinery, and part",
                "Choose the job role such as scientists, researchers, agronomists, horticulturalists etc.",
                "Can work as Agriculture Research Scientist, Food Safety Applications Engineer, Soil and Plant Scientist, Conservation Scientist and Forester, Agriculture and Irrigation Engineer, Lecturer/Professor, IBPS Agriculture Field Officer (AFO), Indian Forest Service- IFS Officer, Indian Agricultural Research Institute (IARI) jobs",
                "Can do Higher Education after B.E Agricultural Engineering"
            ]}
        />
    );
};

export default Agri;
