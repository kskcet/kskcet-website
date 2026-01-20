import React from 'react';
import ProfileLayout from '../components/ProfileLayout';

const Chairman = () => {
    return (
        <ProfileLayout
            title="Chairman's Message"
            name="Thiru. K.S. KrishnaMoorthy"
            role="Chairman"
            image="/images/characters/Chairman.jpg"
            quote="Right Education definitely paves the path for the children to become skilled at new things in a correct manner."
        >
            <p>
                <strong>K.S.K College of Engineering and Technology</strong> stands as a beacon of quality education, founded on the principles of discipline, dedication, and excellence. We believe that education is not just about academic learning but about shaping character and fostering innovation.
            </p>
            <p>
                Our institution is committed to providing a state-of-the-art learning environment where students can explore their potential and develop the skills necessary to thrive in a competitive global landscape. We place a strong emphasis on practical knowledge and ethical values, ensuring our graduates are not just successful professionals but also responsible citizens.
            </p>
            <p>
                As we continue to grow, our focus remains on empowering the youth of our nation with the tools they need to build a brighter future. I invite you to join us in this journey of learning and transformation.
            </p>
        </ProfileLayout>
    );
};

export default Chairman;
