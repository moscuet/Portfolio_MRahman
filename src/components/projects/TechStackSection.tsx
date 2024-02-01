import React from 'react';
import { Grid, Box } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


const TechStackSection = ({ techStack }: { techStack: string[] }) => {
  return (
    <Box >
      <Grid container spacing={2} className='text-gray-900'>
      <Grid item xs={12} sm={12} md={4} className="flex justify-center lg:justify-start">
        <DeveloperModeIcon className="mr-2 text-indigo-500" />
        <h2 className=" font-bold text-xl">Tech Stack</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="rounded-lg p-4">
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
