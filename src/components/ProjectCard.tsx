import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image, { ImageLoader } from 'next/image';
import { Button } from './ui/Button';
import '../styles/detailsbutton.css'


const ProjectCard: React.FC<ProjectList> = ({ id, imageUrl, title, skillsIcon, skillsIconText, intro }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                cursor: 'pointer',
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card
                sx={{
                    width: '100%',
                    mb: 1,
                    p: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >                    <CardMedia
                component="div"
                sx={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    overflow: 'hidden',
                    opacity: 1,
                    transition: 'opacity .3s ease-in-out',
                    borderRadius: '5px',
                }}
            >
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={1600}
                        height={900}
                        style={{ objectFit: "contain" }}
                    />
                    {isHovered && (
                        <div className="absolute w-full h-full flex justify-center items-center p-2 bg-opacity-90 bg-black top-0 left-0 right-0 bottom-0 flex-col">

                            {skillsIcon && <Image src={`/assets/images/${skillsIcon}`} alt="Tech Stack Icons" title="Skills icon" height="50" width='150' />}
                            <span className='text-white text-sm'>{skillsIconText}</span>
                            <p className='py-1 sm:py-3 md:py-4 text-white text-sm max-w-[420px]' style={{ textAlign: 'justify' }}>{intro}</p>
                            <div className="btn-container">

                                <Link href={`/projects/${id}`} passHref>
                                    <div className="details-btn">
                                        <a >Details</a>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    )}

                </CardMedia>
            </Card>
        </Box>
    );
};

export default ProjectCard;
