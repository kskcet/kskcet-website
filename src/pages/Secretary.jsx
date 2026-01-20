import React from 'react';
import ProfileLayout from '../components/ProfileLayout';

const Secretary = () => {
    return (
        <ProfileLayout
            title="Secretary's Message"
            name="Mr. K.S.K Duraimurugan M.E."
            role="Secretary"
            image="/images/characters/Secretary.png"
            quote="We value every individual and it is our aspiration to provide the best possible environment where students can succeed."
        >
            <p>
                KSKCET is committed to creating an ambience for nurturing modernization, creativity, and excellence in our students. Education is a lifelong journey, and we aim to make this journey exciting and fulfilling for every student who walks through our gates.
            </p>
            <p>
                We aim to prepare young engineers to face confidently and competently the challenges and competitions of the modern world. By imparting high-quality technical education coupled with appropriate training and wide exposure to state-of-the-art practices, we ensure our students are industry-ready.
            </p>
            <p>
                We give top priority to discipline and knowledge and the application of the same for societal progress and upliftment. Our goal is to mold students into leaders who can drive positive change in society.
            </p>
            <p className="font-bold text-blue-900">
                Dear Students, your future begins here. We are looking forward to helping you succeed!
            </p>
        </ProfileLayout>
    );
};

export default Secretary;
