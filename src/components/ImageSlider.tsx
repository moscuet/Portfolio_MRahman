import React, { useState, useEffect } from "react";
import { Box, IconButton, CircularProgress } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface ImageSliderProps {
  images: string[];
url: string;
  projectName: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [current, length]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <style>
        {`
          .dynamic-height {
            height: calc((100vw - 96px) * 9 / 16);
          }
          @media (min-width: 921px) {
            .dynamic-height {
              height: 100%;
            }
          }
        `}
      </style>
      <div className="w-full dynamic-height">
        <Box
          style={{ height: "100%" }}
          sx={{ position: "relative", mx: "auto", overflow: "hidden" }}
        >
          {images.map((image, index) => {
            return (
              <div
                key={index}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: index === current ? "translateX(0%)" : "translateX(100%)",
                  transition: "transform 0.5s ease-out",
                }}
              >
                {index === 0 && isLoading && (
                  <CircularProgress />
                )}
                <Image
                  src={`/assets/images/${image}`}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit="contain"
                  onLoadingComplete={index === 0 ? handleLoadingComplete : undefined}
                />
              </div>
            );
          })}

          <Box
            sx={{
              position: "absolute",
              bottom: "-2px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
            }}
          >
            {images.map((_, idx) => (
              <IconButton
                key={idx}
                onClick={() => setCurrent(idx)}
                sx={{
                  padding: 0,
                  color: current === idx ? "primary.main" : "grey.500",
                  opacity: current === idx ? 1 : 0.3,
                }}
              >
                <FiberManualRecordIcon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ImageSlider;
