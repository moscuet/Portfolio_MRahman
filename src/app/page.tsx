'use client'
import '../styles/home.css';
import Head from 'next/head';
import { FaLinkedin, FaGithub, FaTimes, FaBars } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import SkillsList from '@/components/SkillsList';
import { useEffect, useState } from 'react';
import ScrollableContent from '@/components/ScroolBar';

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
    <div className="fixed inset-0 z-10 bg-gray-900 p-8 flex flex-col">
      <button onClick={toggleNav} className="text-white self-end">
        <FaTimes size={24} />
      </button>
      <nav className="mt-4">
        <a href="#about-section" className="block text-gray-300 hover:text-white">ABOUT</a>
        <a href="#projects-section" className="block text-gray-300 hover:text-white">PROJECTS</a>
        <a href="#skills-section" className="block text-gray-300 hover:text-white">SKILLS</a>
      </nav>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      <Head>
        <title>Mostafizur Rahman - Portfolio</title>
      </Head>

      {/* Mobile Navbar */}
      {mobileNavbar}

      {!isNavOpen && (
        <button onClick={toggleNav} className="text-white lg:hidden absolute top-0 right-0 m-4 z-20">
          <FaBars size={24} />
        </button>
      )}

      {/* Desktop Navbar/Sidebar */}
      <div className="sticky top-0 flex flex-col w-full lg:w-1/3 p-8 h-screen">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Mostafizur Rahman</h1>
          <h2 className="text-xl typewriter mb-4 ">Full Stack Developer</h2>
          <p className="text-gray-300 ">I create seamless Web Experiences Where Technology Meets User Needs</p>
          <nav className="mt-8">
            <a href="#about-section" className="block text-gray-300 hover:text-white mb-2">ABOUT</a>
            <a href="#projects-section" className="block text-gray-300 hover:text-white mb-2">PROJECTS</a>
            <a href="#skills-section" className="block text-gray-300 hover:text-white mb-2">SKILLS</a>
          </nav>
        </div>
        <div className="mt-auto flex ">
          <a href="https://www.linkedin.com/in/mostafizur-rahman-35568045" target="_blank" rel="noopener noreferrer" className=" mr-2 text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/moscuet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>


      {/* Main Content */}
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
