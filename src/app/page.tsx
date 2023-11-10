'use client'
import Head from 'next/head';
import { FaLinkedin, FaGithub, FaTimes, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';
import SkillsList from '@/components/SkillsList';
import Main from '@/components/Main';

import '../styles/navBar.css'


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

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        async function fetchSkills() {
            const response = await fetch('/api/skills');
            const data = await response.json();
            setSkills(data.skills);
        }

        fetchSkills().catch(console.error);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const mobileNavbar = isNavOpen && (
        <div className="fixed inset-y-0 right-0 z-10 bg-gray-800 p-8 flex flex-col w-[150px]">
            <button onClick={toggleNav} className="text-white self-end">
                <FaTimes size={24} />
            </button>
            <nav className="mt-4 flex flex-col">
                <a href="#about-section" className=" animate-character text-gray-300 hover:text-white mb-2">ABOUT</a>
                <a href="#projects-section" className="text-gray-300 hover:text-white mb-2">PROJECTS</a>
                <a href="#skills-section" className="text-gray-300 hover:text-white mb-2">SKILLS</a>
            </nav>
        </div>
    );

    
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <Head>
                <title>Mostafizur Rahman - Portfolio</title>
            </Head>

            {/* Top Navbar */}
            <div style={{ height: '100px' }} className="flex flex-row justify-between items-center w-full pr-4 bg-gray-100 text-gray-800">
  <div style={{ height: '100%' }} className="flex items-center">
    {/* Inline style to ensure the logo fills the height of the navbar */}
    <img src={'/assets/brand_logo.png'} alt="Logo" style={{ height: '100%' }} />
  </div>

  {/* Navigation Links and Hamburger Menu on the right */}
  <div className="flex items-center">
    {/* Hidden navigation links on smaller screens */}
    <nav className="hidden lg:flex animate-sideways">
      <a href="#about-section" className="nav-link">ABOUT</a>
      <a href="#projects-section" className="nav-link">PROJECTS</a>
      <a href="#skills-section" className="nav-link">SKILLS</a>
    </nav>

    {/* Hamburger Menu shown on smaller screens */}
    <Button onClick={toggleNav} className="lg:hidden ml-4">
      <FaBars size={24} />
    </Button>
  </div>
</div>




            {mobileNavbar}

            {/* Landing Page */}
            <div className="flex-grow flex flex-col justify-center items-center p-4">
                <h1 style={{ marginBottom: 10 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center">
                    Hi, I am Rahman
                </h1>
                <p className="text-base md:text-xl lg:text-xl text-gray-800 text-center mt-4">
                    A Full-Stack Developer in Helsinki, creating seamless web experiences where technology meets user needs.
                </p>
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-4 py-2 px-4 rounded">
  <span className="animated-light-gradient-text">More about me</span>
</Button>
            </div>

            {/* Main Content */}
            {/* Content would be here */}

        </div>
    );
}




{/* 
<div>
<h1 className="text-3xl font-bold">Mostafizur Rahman</h1> 
<h2 className="text-xl typewriter ">Full Stack Developer</h2>
</div>

{/* <Main>


                <div id="about-section" className="mb-8">
                    <button
                        className=" animate-sideways mb-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden text-xl animate-button"
                    >
                        ABOUT
                    </button>
                    <div className="pl-4">
                        <p className="mt-4 text-l font-serif">
                            From civil engineering to coding: I've redefined my career as a full-stack web developer. I am proficient in a comprehensive range of technologies across front-end and back-end development, database management, testing, and DevOps.
                        </p>
                        <p className="mt-4 text-l font-serif">
                            My fascination with coding took root during a university course where I worked with the Fortran language. It wasn't until 2019, however, that I fully committed to pursuing a career in this field.
                        </p>
                        <p className="mt-4 text-l font-serif">
                            With three years of experience in web development, I've become adept at creating robust software solutions through my work with Integrify and Ontime-Research. Away from the keyboard, I enjoy keeping up with the latest tech trends, exploring cinema, traveling, and finding tranquility in swimming.
                        </p>
                    </div>
                </div>

                <div id="projects-section" className="mb-8">
                    <button
                        className="animate-sideways mb-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden text-xl"
                    >
                        PROJECTS
                    </button>
                    <div className="pl-2">
                        <ProjectCard
                            id='1'
                            imageUrl="https://www.imgworlds.com/_next/static/media/zombie.62426ba0.png"
                            title="My Awesome Project"
                            description="This is a great project that does amazing things."
                        />
                        <ProjectCard
                            id='2'
                            imageUrl="https://www.imgworlds.com/_next/static/media/zombie.62426ba0.png"
                            title="My Awesome Project"
                            description="This is a great project that does amazing things."
                        />
                    </div>
                </div>

                <div id="skills-section" className="mb-8">
                    <button
                        className="animate-sideways mb-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden text-xl"
                    >
                        SKILLS
                    </button>
                    <div className="pl-4">
                        <SkillsList skills={skills} />
                    </div>
                </div>

            </Main> */}