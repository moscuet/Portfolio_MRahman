import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ImageSliderProps {
    images: string[];
    url: string,
    projectName: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, url, projectName }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [current, nextSlide]);

    if (!Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <Box  style={{ height:'100%'  }}  sx={{pb:3, position: 'relative', mx: 'auto', overflow: 'hidden' }}>
            {images.map((image, index) => (
                <div key={index} style={{ display: index === current ? 'block' : 'none', height: '100%', position: 'relative' 
            }}>
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        layout='fill'
                        objectFit="contain"
                    />
                </div>
            ))}

            <Box sx={{ position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
                {images.map((_, idx) => (
                    <IconButton key={idx} onClick={() => setCurrent(idx)} sx={{ padding: 0, color: current === idx ? 'primary.main' : 'grey.500' }}>
                        <FiberManualRecordIcon fontSize="small" />
                    </IconButton>
                ))}
            </Box>
        </Box>
    );
};

export default ImageSlider;
