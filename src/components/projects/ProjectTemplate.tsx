'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MyRoleAndContributions from '@/components/projects/MyRoleAndContribution';
import ExploreProjectSection from '@/components/projects/ExploreProjectSection';
import ProjectStorySection from '@/components/projects/StorySection';
import TechStackSection from '@/components/projects/TechStackSection';
import ProjecImageBanner from '@/components/projects/ProjectImageBanner';
import ProjectFeatures from './ProjectFeatures';



const ProjectTemplate: React.FC<ProjectType> = ({ title, images, github, url, techStack, story, roles, features }) => {


    return (
        <Grid container className="flex flex-col items-center">
            <Grid item style={{ width: '100%', height: 'calc(100vh - 180px)' }}>
                <ProjecImageBanner
                    title={title}
                    images={images}
                    url={url}
                    github={github}
                />
            </Grid>

            <Grid container item className="flex  flex-col w-full justify-center max-w-5xl" >

                <Grid item xs={12} mb={6} py={5} mt={5}>
                    <ProjectStorySection story={story} />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <TechStackSection techStack={techStack} />
                </Grid>
               {features && <Grid item xs={12} mb={6} py={5}  >
                    <ProjectFeatures features={features}/>
                </Grid>}

                <Grid item xs={12} mb={6} py={5}  >
                    <MyRoleAndContributions roles={roles} />
                </Grid>

                {/* <Grid item xs={12} mb={6} py={5}  >
                    <DevelopmentTimeline developmentSteps={developmentSteps} />
                </Grid> */}

                <Grid item xs={12} mb={6}  >
                    <ExploreProjectSection github={github} url={url} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectTemplate;
