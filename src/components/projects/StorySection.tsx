import React from 'react';
import { Grid, Box } from '@mui/material';

const ProjectStorySection = () => {
  return (
    <Box className="my-4 p-2">
      <Grid container spacing={2} alignItems="center"> 
        <Grid item xs={12} sm={12} md={4} className="flex items-center">
          <h2 className="text-gray-800 font-bold text-xl">Project Story</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <p className="text-base md:text-xl lg:text-lg text-gray-800">
            This is a group project for a business intelligence consulting company. Because of privacy reasons, we can't share the code publicly. The site demo was deployed on Netlify by removing the company's credentials, and here is the demo link.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectStorySection;
