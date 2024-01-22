import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image, { ImageLoader } from 'next/image';
import { Button } from './ui/Button';

const ProjectCard: React.FC<ProjectList> = ({ id, imageUrl, title, skillsIcon, skillsIconText, intro }) => {
    const [isHovered, setIsHovered] = useState(false);

    const imageLoader = ({ src, width, quality }: { src: ImageLoader, width: string, quality: string }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <Link href={`/projects/${id}`} passHref>
            <Box
                sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    width: '100%',
                    mb: 1,
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card sx={{ width: '100%', mb: 1 }}>
                    <CardMedia
                        component="div"
                        sx={{
                            position: 'relative',
                            height: 'auto',
                            width: '100%',
                            overflow: 'hidden',
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
                            <div
                                className="icon absolute w-full flex justify-center flex-col items-center p-2"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {skillsIcon && <Image src={`/assets/images/${skillsIcon}`} alt="Tech Stack Icons" title="Skills icon" height="40" width='150' />}
                                <span className='text-gray-800 text-sm'>{skillsIconText}</span>
                                <p className='py-2' style={{ textAlign: 'justify' }}>{intro}</p>
                                <Button className='text-sm' size='xs'>Details</Button>
                            </div>
                        )}
                    </CardMedia>
                </Card>
            </Box>
        </Link>
    );
};

export default ProjectCard;
