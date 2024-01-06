import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image, { ImageLoader } from 'next/image';

interface ProjectCardProps {
    id: string;
    imageUrl: string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageUrl, title }) => {
    const imageLoader = ({ src, width, quality }:{src:ImageLoader, width:string, quality:string}) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
      }

    return (
        <Link href={`/projects/${id}`} passHref>
            <Box
                sx={{
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
                            // sizes="(max-width: 768px) 90vw, 80vw"
                            style={{objectFit: "contain"}}	
                        />

                        <Typography
                            component="div"
                            variant="h5"
                            sx={{
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '4px',
                            }}
                        >
                            {title}
                        </Typography>
                    </CardMedia>
                </Card>
            </Box>
        </Link>
    );
};

export default ProjectCard;
