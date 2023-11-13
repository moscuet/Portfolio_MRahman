'use client'
import React, { useState } from 'react';
import { Paper, Button, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CropLandscapeRounded } from '@mui/icons-material';
import Link from 'next/link';

const ImageSlider = ({ images, url }: { images: string[], url: string }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const handleDemoClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <Box style={{ height: '100%', width: '100%', overflow: 'hidden' }} position="relative">
            <ArrowBackIosIcon
                sx={{ position: 'absolute', top: '50%', left: '32px', zIndex: 10, cursor: 'pointer' }}
                onClick={prevSlide}
            />
            <ArrowForwardIosIcon
                sx={{ position: 'absolute', top: '50%', right: '32px', zIndex: 10, cursor: 'pointer' }}
                onClick={nextSlide}
            />
            {images.map((image, index) => (
                <div key={index} style={{ display: index === current ? 'block' : 'none', position: 'relative', height: '100%' }}>
                    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', height: '100%' }}>
                        <img src={image} alt={`Slide ${index}`} style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }} />
                    </Paper>
                    <Link href={url} passHref>
                        <div onClick={handleDemoClick} className="absolute bottom-2 right-2 z-20 text-indigo-500 hover:text-blue-800 font-bold no-underline inline-flex items-center cursor-pointer">
                            Live Demo
                            <ArrowForwardIcon style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                    </Link>

                </div>
            ))}

        </Box>
    );
};

export default ImageSlider;