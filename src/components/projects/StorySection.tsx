import React from 'react';
import { Grid, Box } from '@mui/material';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone'; 

const ProjectStorySection = ({story}:{story:string}) => {
  return (
    <Box >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-center lg:justify-start">
          <AutoStoriesTwoToneIcon className="mr-2 text-indigo-500" />

          <h2 className="text-gray-800 font-bold text-xl">Project Story</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <p className="text-justify text-base md:text-xl lg:text-lg text-gray-800">
            {story}
          </p>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectStorySection;
