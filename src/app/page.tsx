import '../styles/home.css'
import Link from 'next/link';
import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ScrollableContent from '@/components/ScroolBar';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col sm:flex-row">
      <Head>
        <title>Mostafizur Rahman - Portfolio</title>
      </Head>

      <div className="w-full sm:w-1/3 bg-gray-900 p-8 flex flex-col justify-between sticky top-0 h-screen">
        <div className="p-8 flex-grow">
          <div className="max-w-xs mx-auto flex flex-col h-full justify-between">

            <div>
              <h1 className="text-3xl font-bold mb-4 text-white">Mostafizur Rahman</h1>
              <h2 className="text-xl text-gray-300 mb-4">Full Stack Developer</h2>
              <p className="text-gray-400 mb-8">I craft creative seamless web experiences that bridge technology and user needs</p>
              <div className="space-y-4">
                <div className="space-y-4">
                  <a href="#about-section" className="block text-gray-300 hover:text-white cursor-pointer">ABOUT</a>
                  <a href="#projects-section" className="block text-gray-300 hover:text-white cursor-pointer">PROJECTS</a>
                  <a href="#skills-section" className="block text-gray-300 hover:text-white cursor-pointer">SKILLS</a>
                </div>

              </div>
            </div>

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

      <ScrollableContent>
        <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <div id="about-section" className="mb-8">
            <button
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden animate-sideways"
            >
              ABOUT
            </button>
            <p className="mt-4 text-l font-serif">
              From civil engineering to coding: I've redefined my career as a full-stack web developer. I am proficient in a comprehensive range of technologies across front-end and back-end development, database management, testing, and DevOps.             </p>
            <p className="mt-4 text-l font-serif">
              My fascination with coding took root during a university course where I worked with the Fortran language. It wasn't until 2019, however, that I fully committed to pursuing a career in this field.             </p>
            <p className="mt-4 text-l font-serif">
              With three years of experience in web development, I've become adept at creating robust software solutions through my work with Integrify and Ontime-Research. Away from the keyboard, I enjoy keeping up with the latest tech trends, exploring cinema, traveling, and finding tranquility in swimming.
            </p>
          </div>



          <div id="projects-section" className="mb-8">
            <button
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden animate-sideways"
            >
              PROJECTS
            </button>

            <div>
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
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-20 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out relative overflow-hidden animate-sideways"
            >
              Skills
            </button>
          </div>

        </div>
      </ScrollableContent>
    </div>
  );
}