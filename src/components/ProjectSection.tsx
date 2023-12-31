'use client'

import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/Button';


export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 'business-intelligence', imageUrl: "/assets/images/business_Intelligence_01.png", title: "My Awesome Project" },
    { id: 'cooking-recipe', imageUrl: "/assets/images/business_Intelligence_02.png", title: "My Awesome Project" },
    { id: 'business-intelligence2', imageUrl: "/assets/images/business_Intelligence_01.png", title: "My Awesome Project" },
    { id: 'business-intelligence3', imageUrl: "/assets/images/business_Intelligence_01.png", title: "My Awesome Project" },
    { id: 'business-intelligence4', imageUrl: "/assets/images/business_Intelligence_01.png", title: "My Awesome Project" },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div id="project-section" style={{ paddingTop: '120px' }}
    >

      <Grid container justifyContent="center">
        <Grid item>
          <div className="inline-block mb-12">
            <span className="text-gray-900 text-xl font-bold">
              MY PROJECTS
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" style={{ padding: '0 20px' }}>
        {displayedProjects.map(project => (
          <Grid key={project.id} item xs={12} sm={6} md={6} lg={6}>
            <ProjectCard
              id={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
            />
          </Grid>
        ))}

        {!showAll && projects.length > 4 && (
          <Grid item xs={12} className="text-center">
            <Button  onClick={() => setShowAll(true)} className='my-6' variant={'primary'}>
            Show All Projects
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
