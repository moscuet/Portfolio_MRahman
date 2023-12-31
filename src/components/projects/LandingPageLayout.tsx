'use client'
import React from 'react';
import { Grid } from '@mui/material';
import ImageSlider from '@/components/ImageSlider';
import FollowDownAnimation from '../FollowDownAnimation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const ProjectBusinessIntellegence = ({ title, images, url }: { title: string, images: string[], url: string }) => {
    const handleDemoClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Grid container direction="column" style={{ minHeight: 'calc(100vh - 120px)', display: 'flex' }}>
            <Grid style={{ display: 'inline-flex', justifyContent: 'center' }} className="mb-5">

                <div style={{ maxHeight: 'calc(100vh - 250px)', maxWidth: 'calc(100vw - 150px)', overflow: 'hidden' }}>
                    <ImageSlider images={images} url={url} projectName={title} />
                </div>
            </Grid>

     
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <div className="inline-flex items-center justify-center md:flex-row flex-col">
                        <span className="text-indigo-500 font-bold mb-2 md:mb-0">
                            {title}
                        </span>

                        <div className="hidden md:inline-block h-4 w-0.5 bg-indigo-500 mx-2" ></div>

                        <Link href={url} passHref>
                            <div onClick={handleDemoClick} className="text-indigo-500 hover:text-blue-800 font-bold no-underline cursor-pointer inline-flex items-center">
                                Live Demo
                                <ArrowForwardIcon style={{ transform: 'rotate(-45deg)' }} />
                            </div>
                        </Link>
                    </div>
                </Grid>
            </Grid>

            <Grid item style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                <FollowDownAnimation />
            </Grid>
        </Grid>
    );
};

export default ProjectBusinessIntellegence;
