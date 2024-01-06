import React from 'react';
import '../../styles/about.css'
import AboutMe from '@/components/about/AboutMe';
import MySkills from '@/components/about/MySkills';

const page = () => {
    return (
        <div className='flex flex-col items-center animated-light-gradient-text'>
            <AboutMe />
            <MySkills />
        </div>
    );
};
export default page;

