'use client'
import React from 'react';
import { Grid } from '@mui/material';
import ImageSlider from '@/components/ImageSlider';
import FollowDownAnimation from '../FollowDownAnimation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const ProjectBusinessIntellegence = ({ title, images, url }: { title: string, images: string[], url: string }) => {
    return (
        <Grid container direction="column" style={{ minHeight: 'calc(100vh - 120px)', display: 'flex'}}>
            <Grid style={{ display: 'inline-flex', justifyContent: 'center' }} className="mb-5">
                <div style={{ maxHeight: 'calc(100vh - 250px)', maxWidth: 'calc(100vw - 150px)', overflow: 'hidden' }}>
                    <ImageSlider images={images} url={url} projectName={title} />
                </div>
            </Grid>

            <Grid item style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                <FollowDownAnimation />
            </Grid>
        </Grid>
    );
};


/*
<div className=" min-h-screen flex-grow flex flex-col justify-center items-center p-4">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-10">
    Hi, I am Rahman
</h1>
<p className="text-base md:text-xl lg:text-xl text-gray-800 text-center mt-4 px-20">
    A Full-Stack Developer in Helsinki, creating seamless web experiences where technology meets user needs.
</p>
<Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-6 py- px-4 rounded">
    <span className="animated-light-gradient-text">More about me</span>
</Button>
</div>     
<FollowDownAnimation/>

*/
export default ProjectBusinessIntellegence;
