import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import Link from 'next/link';

const ExploreProjectSection = () => {
  const handleDemoClick = () => {
    window.open('https://awesome-mahavira-48e62b.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box className="my-4 p-3 bg-gray-100 rounded-lg shadow-md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-start">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Explore the Project</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="flex items-center" style={{ height: '150px' }}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
            <Button onClick={handleDemoClick} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
              Explore Live Demo
            </Button>

            <Link href="/" passHref>
              <Button
                variant="outlined"
                className="border border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 font-bold py-2 px-4 rounded"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExploreProjectSection;
