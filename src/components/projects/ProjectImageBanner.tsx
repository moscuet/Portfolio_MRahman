'use client'
import React from 'react';
import ImageSlider from '@/components/ImageSlider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const ProjectImageBanner = ({ title, images, url, github }: { title: string, images: string[], url: string, github: string }) => {
    const handleDemoClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleGithubClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open(github, '_blank', 'noopener,noreferrer');
    };


    return (
        <div className="flex flex-col h-full items-center">
<div className='w-full h-full' >
                <ImageSlider images={images} url={url} projectName={title} />
           </div>
            <div className='max-w-3xl mt-5'  >
                <div className="flex-col items-center justify-center gap-4 md:gap-0 md:flex-row ">

                    <div className='flex justify-center '>
                        <span className="font-bold text-gray-900">
                            {title}
                        </span>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start ">
                        <Link className='mt-2' href={url} passHref>
                            <div onClick={handleGithubClick} className="text-indigo-500 hover:text-blue-800 font-bold no-underline cursor-pointer inline-flex items-center">
                                Github Repo
                                <ArrowForwardIcon style={{ transform: 'rotate(-45deg)' }} />
                            </div>
                        </Link>

                        {/* Divider hidden on smaller screens */}
                        <div className="hidden sm:inline-block h-3 w-0.5 bg-indigo-500 mx-3"></div>

                        <Link className='mt-2' href={url} passHref>
                            <div onClick={handleDemoClick} className="text-indigo-500 hover:text-blue-800 font-bold no-underline cursor-pointer inline-flex items-center">
                                Live Demo
                                <ArrowForwardIcon style={{ transform: 'rotate(-45deg)' }} />
                            </div>
                        </Link>

                        <div className="hidden sm:inline-block h-3 w-0.5 bg-indigo-500 mx-3"></div>

                        <Link className='mt-2' href={'/#project-section'} passHref>
                            <div className="text-indigo-500 hover:text-blue-800 font-bold no-underline cursor-pointer inline-flex items-center">
                                Back To Projects
                                <ArrowForwardIcon style={{ transform: 'rotate(-45deg)' }} />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectImageBanner;
