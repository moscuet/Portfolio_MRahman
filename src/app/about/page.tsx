import React from 'react';
import '../../styles/about.css'
import dynamic from 'next/dynamic';
const AboutMe = dynamic(() => import('@/components/about/AboutMe'))
const MySkills= dynamic(() => import('@/components/about/MySkills'))

const page = () => {
    return (
        <div className='flex flex-col items-center animated-light-gradient-text'>
            <AboutMe />
            <MySkills />
        </div>
    );
};
export default page;

