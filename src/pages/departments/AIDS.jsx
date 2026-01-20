import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const AIDS = () => {
    const banner = "/images/banners/departments/aids.jpg";

    return (
        <DepartmentLayout
            title="Artificial Intelligence & Data Science"
            banner={banner}
            courseName="B.E. AI & DS"
            about={[
                "The faculty of AI-DS is the soul of many engineering branches. This field is instrumental in bringing the world to where it is today. AI-DS course was started in our institution in the year 2022.",
                "Our department has well-qualified and experienced faculty members who are specialists in the areas of Database, Data Mining, Computer Architecture, Operating Systems, Image Processing, Wireless Network, Artificial Neural Networks, Information Security and Programming Languages. They actively involve themselves in research activities in the field of their specialization.",
                "They have published a number of papers in Journals and Conferences of National and International repute. The department attributes its success to the creative and innovative outlook of its students also. It encourages students to participate in numerous symposiums and to present papers in them. Students are also made to undergo in-plant training programs, where they hone their technical skills in the realm of computers."
            ]}
            vision="Create high-quality professionals in AI & DS to meet global demands."
            mission={[
                "To educate and generate at least 90% of the students as competent professionals to become part of the industry and research organizations.",
                "To give personalized training to the students with arrears, identifying their strength and weakness for the improvement of the academic results on an average of 85%.",
                "Offer a variety of blended learning methodology for overall personality improvement."
            ]}
            intake="60 Students"
            duration="4 Years (8 Semesters)"
            outcomes={[
                "Apply AI techniques to solve complex problems.",
                "Analyze and interpret data for decision making.",
                "Design and develop AI-based systems.",
                "Understand the ethical implications of AI and Data Science."
            ]}
        />
    );
};

export default AIDS;
