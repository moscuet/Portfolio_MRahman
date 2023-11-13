import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface ProjectCardProps {
    id: string;
    imageUrl: string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageUrl, title }) => {
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
                        <img
                            src={imageUrl}
                            alt={title}
                            style={{ width: '100%', display: 'block' }}
                        />
                        <Typography
                            component="div"
                            variant="h5"
                            sx={{ 
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
