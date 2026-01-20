import React from 'react';
import DepartmentLayout from '../../components/DepartmentLayout';

const EEE = () => {
    const banner = "/images/banners/departments/eee.jpg";

    return (
        <DepartmentLayout
            title="Electrical & Electronics Engineering"
            banner={banner}
            courseName="B.E. Electrical & Electronics Engineering"
            intake="30 Students"
            duration="4 Years (8 Semesters)"
            about={[
                "The Department of Electrical and Electronics Engineering was started in the year 2001. The department has been accredited in 2009, 2014 and 2018.",
                "The main areas of learning in this program pertain to principles and analysis of the equipment and systems used in the generation, transmission, distribution and utilization of electrical energy. The other areas of learning pertain to electronic devices and circuits used in the measurement, instrumentation, control and protection of electrical equipment and conversion systems.",
                "Students also learn concepts related to computers and the applications for computer based systems used in the design analysis and operation of power system.",
                "Students execute mini-projects in their laboratory courses. They are also encouraged to publish papers in national and international conferences. They are actively engaged in the multidisciplinary work on satellites (Studsat), Robotics and MEMS. The faculty members are actively engaged in research and regularly publish papers."
            ]}
            vision="To produce professionally competent Electrical and Electronics Engineers to meet the global challenges."
            mission={[
                "To provide quality education in the field of Electrical and Electronics Engineering.",
                "To establish state-of-the-art laboratories to facilitate research and development.",
                "To promote ethical values and leadership qualities among students."
            ]}
            outcomes={[
                "Apply knowledge of mathematics, science, and engineering to solve complex electrical engineering problems.",
                "Design and analyze electrical components and systems.",
                "Demonstrate proficiency in the use of modern engineering tools.",
                "Understand the impact of engineering solutions in a global, economic, environmental, and societal context."
            ]}
        />
    );
};

export default EEE;
