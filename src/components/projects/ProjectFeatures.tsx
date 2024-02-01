import { Box, Grid, Paper, Typography } from '@mui/material';
import FeatureListIcon from '@mui/icons-material/FeaturedPlayList';

import React from 'react'

export default function ProjectFeatures({features}:{features:ProjectFeature[]}) {
 return (
<Box>
      <Grid container spacing={2} className="text-gray-900">
        
      <Grid item xs={12} sm={12} md={4} className="flex md:items-start items-center justify-center lg:justify-start">
  <FeatureListIcon className="mr-2 text-indigo-500" />
  <h2 className="font-bold text-xl">Project Features</h2>
</Grid>
        
        <Grid item xs={12} sm={12} md={8} className="rounded-lg p-4">
          <div className="flex flex-wrap justify-center gap-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-300 py-2 px-4 rounded w-full md:w-auto">
                <Typography variant="h6" component="h3" className="font-bold mb-2">
                  {feature.title}
                </Typography>
                {/* <img src={feature.img} alt={feature.title} className="mb-2 max-w-full h-auto" /> */}
                <Typography variant="body1" className="text-center">
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
