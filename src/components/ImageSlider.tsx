import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ImageSliderProps {
    images: string[];
    url: string,
    projectName: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

  
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };    
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [current,length]);


    if (!Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <Box style={{ height: '100%' }} sx={{ position: 'relative', mx: 'auto', overflow: 'hidden' }}>
            {images.map((image, index) => {
                let style;
                if (index === current) {
                    style = { transform: 'translateX(0%)', transition: 'transform 0.5s ease-out' };
                } else if (index === (current + 1) % length) {
                    style = { transform: 'translateX(100%)', transition: 'transform 0.5s ease-out' };
                } else {
                    style = { transform: 'translateX(100%)' };
                }

                return (
                    <div
                        key={index}
                        style={{
                            ...style,
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <Image src={`/assets/images/${image}`} alt={`Slide ${index}`} layout='fill' objectFit="contain" />
                    </div>
                );
            })}

            <Box sx={{ position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
                {images.map((_, idx) => (
                    <IconButton key={idx} onClick={() => setCurrent(idx)} sx={{ padding: 0, color: current === idx ? 'primary.main' : 'grey.500', opacity: current === idx ? 1 : 0.3 }}>

                        <FiberManualRecordIcon fontSize="small" />
                    </IconButton>
                ))}
            </Box>
        </Box>
    );
};

export default ImageSlider;
