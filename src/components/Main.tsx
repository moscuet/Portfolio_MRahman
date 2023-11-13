import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';

interface MainProps {
  children: React.ReactNode;
}

const Main = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div id="projects-section"
      >

        <Grid container justifyContent="center">
          <Grid item>
            <div className="inline-block mb-6">
              <span className="text-gray-800 text-xl font-bold">
                MY PROJECT
              </span>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" style={{ padding: '0 20px' }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id='business-intelligence'
              imageUrl="/assets/images/business_Intelligence_01.png"
              title="My Awesome Project"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id='cooking-recipe'
              imageUrl="/assets/images/business_Intelligence_02.png"
              title="My Awesome Project"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id='1'
              imageUrl="/assets/images/business_Intelligence_03.png"
              title="My Awesome Project"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id='1'
              imageUrl="/assets/images/business_Intelligence_03.png"
              title="My Awesome Project"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id='1'
              imageUrl="/assets/images/business_Intelligence_03.png"
              title="My Awesome Project"
            />
          </Grid>
        </Grid>

      </div>
    </div>
  );
};

export default Main;
