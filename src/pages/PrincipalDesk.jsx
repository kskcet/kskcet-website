import React from 'react';
import ProfileLayout from '../components/ProfileLayout';

const PrincipalDesk = () => {
    return (
        <ProfileLayout
            title="Principal's Desk"
            name="Dr. R. Rajavignesh M.E., Ph.D."
            role="Principal"
            image="/images/characters/Principal.png"
            quote="A desire can change nothing, a decision can change something but a determination can change everything."
        >
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">HEARTY WELCOME TO KSK COLLEGE OF ENGINEERING AND TECHNOLOGY</h4>

            <p>
                I extend a warm welcome to all the students who choose KSKCET as a preferred destination for their higher education. To educate a student in mind and in morals is the most significant need of the hour. We at KSKCET present quality education adhered to discipline that composes each student to realize the self and inspires them to build their career with greater ease in this ever-changing competent society.
            </p>
            <p>
                Apart from the academic curriculum, the students are encouraged to excel in the skills they have like in sports, cultural, social activities, etc. The institute will definitely continue to contribute for the development and growth of young minds.
            </p>
            <p>
                Our faculty members are dedicated mentors who guide students not just in academics but in life skills. We trust that with the right guidance and determination, every student can achieve their dreams.
            </p>
        </ProfileLayout>
    );
};

export default PrincipalDesk;
