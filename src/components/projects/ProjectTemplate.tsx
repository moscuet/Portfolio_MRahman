'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DevelopmentTimeline from '@/components/projects/TimeLine';
import MyRoleAndContributions from '@/components/projects/MyRoleAndContribution';
import ExploreProjectSection from '@/components/projects/ExploreProjectSection';
import ProjectStorySection from '@/components/projects/StorySection';
import TechStackSection from '@/components/projects/TechStackSection';
import LandingPageLayout from '@/components/projects/LandingPageLayout';

  type ProjectTemplateProps = {
    title: string;
    images: string[];
    github: string;
    url: string;
    techStack: string[];
    story: string;
    roles: string[];
    developmentSteps: { title: string; date: string }[];
  };
  

  
  const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ title, images, github, url, techStack, story, roles, developmentSteps }) => {

    const [targetWidth, setTargetWidth] = useState(0);

    useEffect(() => {
        const targetElement = document.getElementById('project-slider-container');
        if (targetElement) {
            setTargetWidth(targetElement.offsetWidth);
        }
    }, []);

    return (
        <Grid  container className="justify-center "  >
            <LandingPageLayout
                title={title}
                images={images}
                url={url}
                github={github}
            />
            <Grid container direction="column" className="justify-center" style={{ maxWidth: `calc(${targetWidth}px)`, margin: 'auto'}}>
                <Grid  item xs={12} mb={6} py={5} mt={5}>
                    <ProjectStorySection story={story} />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <TechStackSection techStack={techStack} />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <MyRoleAndContributions roles={roles} />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <DevelopmentTimeline developmentSteps ={developmentSteps} />
                </Grid>

                <Grid item xs={12} mb={6}  >
                    <ExploreProjectSection github={github} url={url} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectTemplate;
