import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image, { ImageLoader } from 'next/image';



const ProjectCard: React.FC<ProjectList> = ({ id, imageUrl, title, skillsIcon }) => {
    const imageLoader = ({ src, width, quality }: { src: ImageLoader, width: string, quality: string }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <Link href={`/projects/${id}`} passHref>
            <Box
               sx={{
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
                '&:hover .icon': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.5s ease-in-out'
                },
            }}
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

                    </CardMedia>
                    {
                        skillsIcon &&
                        <p className="icon absolute left-1/2 top-10 transform -translate-x-1/2">
                            <Image src={`/assets/images/${skillsIcon}`} alt="Tech Stack Icons" title="Skills icon" height="40" width='120' />
                        </p>
                    }
                </Card>
            </Box>
        </Link>
    );
};

export default ProjectCard;
