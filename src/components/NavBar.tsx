'use client'
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 1024); // Or your mobile breakpoint

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });


  
    return (
        <>
            <div style={{ height: '100px' }} className="fixed top-0 left-0 right-0 z-10 flex flex-row justify-between items-center w-full pr-4 bg-gray-100 text-gray-800">
            <div className="flex items-center" style={{ height: '100%' }}>
                <Link href="/" passHref style={{ height: '100%' }}>
                    <img 
                        src={'/assets/brand_logo.png'} 
                        alt="Logo" 
                        style={{ height: '100%', cursor: 'pointer' }}
                    />
                </Link>
            </div>

                <div className="flex items-center">
                    <nav className="hidden lg:flex mr-4">
                    <a href="/" className="nav-link">PORTFOLIO</a>
                        <a href="/about" className="nav-link">ABOUT</a>
                        <a href="/contact" className="nav-link">CONTACT</a>
                    </nav>

                    {isMobile && (
                        <Button onClick={toggleNav} className="ml-4">
                            <FaBars size={24} color="#6366F1" />
                        </Button>
                    )}
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

