import React from 'react';
import { Grid, Box } from '@mui/material';

const TechStackSection = ({ techStack }: { techStack: string[] }) => {
  return (
    <Box className="my-4 p-2">
      <Grid container spacing={2} alignItems="center"> {/* Adjusted alignment here */}
        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-center md:justify-start">
          <h2 className="text-gray-800 font-bold text-xl">Tech Stack</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="shadow-md rounded-lg p-4">
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-gray-300 py-2 px-4 rounded">
                {tech}
              </span>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TechStackSection;
