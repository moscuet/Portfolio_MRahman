import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import Link from 'next/link';

const ExploreProjectSection = ({ github, url }: { github: string, url: string }) => {

  const handleDemoClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open(github, '_blank', 'noopener,noreferrer');
  };

  const handleHomeClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <Box className="py-5  mb-5 bg-gray-100 rounded-lg shadow-md ">

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-start">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Explore the Project</h2>
        </Grid>

        <Grid item xs={12} sm={12} md={8} className="flex items-center" style={{ height: '150px' }}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">


            <Button
              variant="outlined"
              className="border w-full border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 font-bold py-2 px-4 rounded"
            >
              <span className="sm:hidden">Live Demo</span>
              <span className="hidden sm:inline">Explore Live Demo</span>
            </Button>


            <Button
              variant="outlined"
              className="border w-full border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 font-bold py-2 px-4 rounded"
            >
              <span className="sm:hidden">Github</span>
              <span className="hidden sm:inline">Github: Source Code</span>
            </Button>

            <Button
              onClick={handleHomeClick}
              variant="outlined"
              className="border w-full border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 font-bold py-2 px-4 rounded"
            >
              <span className="sm:hidden">Home</span>
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </div>
        </Grid>

      </Grid>
    </Box>
  );
};

export default ExploreProjectSection;
