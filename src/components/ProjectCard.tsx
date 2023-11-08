import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface ProjectCardProps {
    id?: string;
    imageUrl: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, id }) => {
    return (
        <Link href={'/'} passHref> {/* Wrap the Box with Link and pass href */}
            <a style={{ textDecoration: 'none' }}> {/* Use an anchor tag to make it clickable */} 
                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: ['column', 'column', 'row'],
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        cursor: 'pointer',
                    }}
                >
                    <Card sx={{ width: ['100%', '100%', '50%'], mb: 1, p: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ height: 'auto', width: '100%' }}
                            image={imageUrl}
                            alt={title}
                        />
                    </Card>

                    <Box sx={{ width: ['100%', '100%', '50%'], ml: [0, 0, 2] }}>
                        <Typography component="div" variant="h5" sx={{ color: 'white' }}>
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#d1d1d1',
                                whiteSpace: 'normal',
                                overflow: 'hidden',
                                wordBreak: 'break-word',
                                mt: 1
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>

                </Box>
            </a>
        </Link>
    );
};

export default ProjectCard;
