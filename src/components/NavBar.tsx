'use client'

import Image from 'next/image';
import logo from '../../public/assets/brand_logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@mui/material';

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div style={{ height: '100px' }} className="fixed top-0 left-0 right-0 z-10 flex flex-row justify-between items-center w-full pr-4 bg-gray-100 text-gray-800">
                <div style={{ height: '100%' }} className="flex items-center">
                    <img src={'/assets/brand_logo.png'} alt="Logo" style={{ height: '100%' }} />
                </div>

                <div className="flex items-center">
                    <nav className="hidden lg:flex mr-4">
                        <a href="#about-section" className="nav-link">ABOUT</a>
                        <a href="#projects-section" className="nav-link">PROJECTS</a>
                        <a href="#skills-section" className="nav-link">SKILLS</a>
                    </nav>

                    <Button onClick={toggleNav} className="lg:hidden ml-4">
                        <FaBars size={24} color="#6366F1" />
                    </Button>

                </div>
            </div>

            {isNavOpen && (
        <div className="fixed inset-y-0 right-0 z-10 bg-gray-100 p-8 flex flex-col w-[150px]">
            <button onClick={toggleNav} className="text-indigo-500 self-end">
                <FaTimes size={24} />
            </button>
            
            <nav className="mt-4 flex flex-col">
                <a href="#about-section" style={{ color: 'rgb(31, 41, 55)' }} className="nav-link mb-2 hover:text-indigo-600">ABOUT</a>
                <a href="#projects-section" style={{ color: 'rgb(31, 41, 55)' }} className="nav-link mb-2 hover:text-indigo-600">PROJECTS</a>
                <a href="#skills-section" style={{ color: 'rgb(31, 41, 55)' }} className="nav-link mb-2 hover:text-indigo-600">SKILLS</a>
            </nav>
        </div>
    )}
        </>
    );
}
