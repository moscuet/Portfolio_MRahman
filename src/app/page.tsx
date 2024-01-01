'use client'
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import Main from '@/components/Main';
import FollowDownAnimation from '@/components/FollowDownAnimation';


type Skill = {
    id: number;
    name: string;
    proficiencyLevel: number;
};

type SkillsCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Other';

type SkillsState = {
    [key in SkillsCategory]: Skill[];
};

export default function Home() {
    const [skills, setSkills] = useState<SkillsState>({
        Frontend: [],
        Backend: [],
        Database: [],
        DevOps: [],
        Other: [],
    });


    useEffect(() => {
        async function fetchSkills() {
            const response = await fetch('/api/skills');
            const data = await response.json();
            setSkills(data.skills);
        }

        fetchSkills().catch(console.error);
    }, []);



    return (
        <>
            <div style={{border:'5px solid blue'}} className="min-h-screen flex-grow flex flex-col justify-center items-center p-4 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-10">
                    Hi, I am Rahman
                </h1>
             <div className='max-w-2xl'>
             <p className="text-base md:text-xl lg:text-xl text-gray-800 text-center mt-4 md:px-10 lg:px-20">
                    A Full-Stack Developer in Helsinki, creating seamless web experiences where technology meets user needs.
                </p>
             </div>
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-6 py-2 px-4 rounded">
                    <span className="animated-light-gradient-text">More about me</span>
                </Button>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <FollowDownAnimation />
                </div>
            </div>
            <Main />
        </>
    );
}