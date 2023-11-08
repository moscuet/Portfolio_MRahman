'use client'

import '../styles/home.css'
import Link from 'next/link';
import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ScrollableContent from '@/components/ScroolBar';
import ProjectCard from '@/components/ProjectCard';
import { useEffect, useState } from 'react';
import SkillsList from '@/components/SkillsList';

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

  const [skills, setSkills] = useState<SkillsState>({ Frontend: [], Backend: [], Database: [], DevOps: [], Other: [], });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  useEffect(() => {

    async function fetchSkills() {
      const response = await fetch('/api/skills');
      const data = await response.json();
      setSkills(data.skills);
    }

    fetchSkills().catch(console.error);
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row">
      <Head>
        <title>Mostafizur Rahman - Portfolio</title>
      </Head>
      {/* nav bar section */}

      <div className="w-full lg:w-1/3 bg-gray-900 p-8 flex flex-col justify-between sticky top-0 h-screen">
        <div style={{ minWidth: '320px' }} className="p-8 flex-grow">
          <div className="max-w-xs mx-auto flex flex-col h-full justify-between">

            <div style={{ minWidth: '256px' }}>
              <h1 className="text-3xl font-bold mb-4 text-white">Mostafizur Rahman</h1>
              <h2 className="text-xl typewriter mb-4">Full Stack Developer</h2>
              <p className="text-gray-300 mb-8"> I create seamless Web Experiences Where Technology Meets User Needs</p>
              <div className="space-y-4">
                <div className="space-y-4">
                  <a href="#about-section" className="block text-gray-300 hover:text-white cursor-pointer">ABOUT</a>
                  <a href="#projects-section" className="block text-gray-300 hover:text-white cursor-pointer">PROJECTS</a>
                  <a href="#skills-section" className="block text-gray-300 hover:text-white cursor-pointer">SKILLS</a>
                </div>

              </div>
            </div>

{/* nav link  */}
            <div className="mt-24">
              <div className="flex justify-start items-center space-x-4">
                <a href="https://www.linkedin.com/in/mostafizur-rahman-35568045" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/moscuet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scrolling content */}

      <ScrollableContent>
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>

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

        </div>
      </ScrollableContent>


    </div>
  );
}