import React, { useState } from 'react';
import { Paper, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const ImageSlider = ({ images, url, projectName }: { images: string[], url: string, projectName: string }) => {
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
        <Box id='project-slider-container' sx={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        <ArrowBackIosIcon
            sx={{ position: 'absolute', top: '50%', left: '32px', zIndex: 11, cursor: 'pointer' }}
            onClick={prevSlide}
        />
        <ArrowForwardIosIcon
            sx={{ position: 'absolute', top: '50%', right: '32px', zIndex: 11, cursor: 'pointer' }}
            onClick={nextSlide}
        />
        {images.map((image, index) => (
            <Paper key={index} elevation={3} className={`${index === current ? 'block' : 'hidden'}`} sx={{ padding: 2, textAlign: 'center', maxWidth:'100%', height: '100%', position: 'relative' }}>
                <Image
                    src={image}
                    alt={`Slide ${index}`}
                    layout="responsive"
                    width={16}
                    height={9}
                    objectFit="fit"
                />
            </Paper>
        ))}
    </Box>
    );
};


export default ImageSlider;


